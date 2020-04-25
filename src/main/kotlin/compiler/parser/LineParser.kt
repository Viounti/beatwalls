package compiler.parser

import assetFile.isDouble
import compiler.parser.types.*
import org.mariuszgromada.math.mxparser.Constant
import org.mariuszgromada.math.mxparser.Function
import structure.Define
import structure.WallStructure

/*
EXAMPLE SYNTAX
10 wallstruct
 height=10
 height+=10
 height -= 10
struct myStruct: wallstruct1, wallstruct2
  height +=10
const a = 10
fun f(x) = 2*10
10 mystruct
    height=f(a)
interface myInterface: interface1, inteface2
    height = 10
20 wallstruct: myInterface
 */


class LineParser {

    // the final structlist of the Factory
    val structList = mutableListOf<WsFactory>()

    // this always Points to the last structure
    lateinit var lastStructure: OperationsHolder

    val dataSet = DataSet()


//        _      _
//  _ __ (_) ___| | _____ _ __
// | '_ \| |/ __| |/ / _ \ '__|
// | |_) | | (__|   <  __/ |
// | .__/|_|\___|_|\_\___|_|
// |_|

    fun parseLines(l: List<Line>){
        l.forEach { parseLine(it) }
    }

    fun parseLine(l: Line){
        when{
            isConstant(l) -> defineConstant(l)
            isFunction(l) -> defineFunction(l)
            isCustomStruct(l) -> defineCustomStruct(l)
            isBwInterface(l) -> defineInterface(l)
            isProperty(l) -> addProperty(l)
            isWsFact(l) -> addWsFact(l)
            else -> throw InvalidLineExpression(l)
        }
    }

//                  _          __                  _   _
//  _ __ ___   __ _(_)_ __    / _|_   _ _ __   ___| |_(_) ___  _ __  ___
// | '_ ` _ \ / _` | | '_ \  | |_| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
// | | | | | | (_| | | | | | |  _| |_| | | | | (__| |_| | (_) | | | \__ \
// |_| |_| |_|\__,_|_|_| |_| |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/

    private fun checkName(name: String){
        if (dataSet.inKeys(name)) throw NameAlreadyExistException(name)

    }

    fun isConstant(l: Line) = l.sBefore(" ")  == "const"

    fun defineConstant(l: Line){
        val value = l.sAfter("const")
        val name = l.sBetween("const","=")
        checkName(name)
        val args = (dataSet.constantList.values  + dataSet.functionList.values).toTypedArray()
        val c = Constant(value,*args)
        if(!c.syntaxStatus || dataSet.inKeys(name)) throw InvalidLineExpression(l, "Constant is invalid")
        dataSet.constantList[name] = c
    }

    fun isFunction(l: Line) = l.sBefore(" ") == "fun"

    fun defineFunction(l: Line){
        val value = l.sAfter("fun")
        val name = l.sBetween("fun","(")
        checkName(name)
        val args = (dataSet.constantList.values  + dataSet.functionList.values).toTypedArray()
        val f = Function(value,*args)
        if(!f.syntaxStatus || dataSet.inKeys(name)) throw InvalidLineExpression(l, "Function is invalid")
        dataSet.functionList[name] = f
    }

    fun isCustomStruct(l: Line) = l.sBefore(" ") == "struct"

    fun defineCustomStruct(l: Line){
        val name = l.sBetween("struct",":")
        checkName(name)

        val ohList = l.sAfter(":").toOperatorHolderList {
            dataSet.wsFactories[it]?:dataSet.interfaces[it]?:
            throw InvalidLineExpression(l,"$it is not a valid interface/WallStructure")
        }

        val structList: List<WallStructure> = ohList.filterIsInstance<WsFactory>().map { it.create() }
        val interfaceOp: MutableList<operation> = ohList.filterIsInstance<BwInterface>().flatMap { it.operations }.toMutableList()
        val wsGenerator: () -> Define ={ Define().also { it.structures = structList }}
        val wsFactory = WsFactory(wsGenerator, interfaceOp)
        dataSet.wsFactories[name]=wsFactory
        lastStructure = wsFactory
    }

    fun isBwInterface(l: Line) = l.s.startsWith("interface ")

    fun defineInterface(l: Line) {
        val name = l.sBetween("struct",":")
        checkName(name)

        val ohList = l.sAfter(":").toInterfaceList {
            dataSet.interfaces[it]?:throw InvalidLineExpression(l,"$it is not a valid Interface")
        }
        val interfaceOp: MutableList<operation> = ohList.flatMap { it.operations }.toMutableList()
        val i = BwInterface(interfaceOp)

        dataSet.interfaces[name] = i
        lastStructure = i
    }

    fun isProperty(l: Line): Boolean= Assign(l.s).name in dataSet.wsProperties.keys

    fun addProperty(l: Line) = parseProperty(l,lastStructure) { dataSet.wsProperties[it]?: throw InvalidLineExpression(l) }

    fun isWsFact(l: Line): Boolean {
        val b = l.sBefore(" ")
        val n = l.sBetween(b,":")
        return b.isDouble() && n in dataSet.wsFactories.keys
    }

    fun addWsFact(l: Line){
        val beat = l.sBefore(" ")
        val name = l.sBetween(beat,":")
        val fact = dataSet.wsFactories[name]?: throw InvalidLineExpression(l,"fakt $name does not exist, please report this error")
        val defaultInterface = dataSet.interfaces["default"]
        val wsFact = WsFactory({ fact.create() },defaultInterface)
        structList.add(wsFact)
        lastStructure = wsFact
    }
}


val Function.syntaxStatus: Boolean get() = this.checkSyntax()


class NameAlreadyExistException(name: String, cause:Throwable? = null): Exception("$name already exist in keys, please choose a different name",cause)


