package difficulty
import assetFile.MetaData
import structure.SpookyWall
import structure.WallStructure
import structure.walls
import kotlin.math.ceil

class BpmAdjuster(diff:Difficulty, private val meta: MetaData) {
    private val baseBpm: Double = meta.bpm
    private val changes: ArrayList<Pair<_BPMChanges, Double>> = mapChangesToBeat(diff._customData._BPMChanges)

    private fun mapChangesToBeat(changes: ArrayList<_BPMChanges>): ArrayList<Pair<_BPMChanges, Double>> {
        val l = arrayListOf(_BPMChanges(baseBpm,0.0,4,4) to 0.0)
        var beat = 0.0
        changes.forEach {
            val c = l.last().first
            val traversedBeats = (it._time-c._time) * c.multiplier()
            beat += ceil(traversedBeats)
            l.add(it to beat)
        }
        l.sortedBy { it.second }
        return l
    }

    fun generate(w: WallStructure): List<_obstacles> {
        val walls = w.walls()

        // adjusts the neccesary values
        walls.forEach {     it.startTime += w.beat  }
        walls.forEach {     it.adjustToBPM()        }
        walls.forEach {     it.addOffset()          }

        // adds the njsOffset if time is true
        if (w.time)
            walls.forEach { it.startTime += meta.hjd }

        // creates Obstacles
        return walls.map { it.to_obstacle() }
    }

    private fun SpookyWall.addOffset(){
        val offset = meta.bpm / 60000 * meta.offset
        this.startTime += offset
    }

    private fun SpookyWall.adjustToBPM(){
        val c = lastChange(this.startTime).first
        this.startTime = findTime(this.startTime)
        if (this.duration > 0)
            this.duration * c.multiplier()
    }

    fun findTime(time:Double): Double {
        val lastChangePair = lastChange(time)
        val change = lastChangePair.first
        val beat = lastChangePair.second
        return change._time + (time-beat) * change.multiplier()
    }

    private fun lastChange(beat: Double) =
         changes.last { it.second <= beat }


    private fun _BPMChanges.multiplier() =
        baseBpm / this._BPM
}