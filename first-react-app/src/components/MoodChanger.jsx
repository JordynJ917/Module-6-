import { useState } from "react";

function MoodChanger() {
    const [mood, setMood] = useState('alright');

    const handleWinLotto = () => {
        setMood('estatic')
    }

    const handleRunningLate = () => {
        let newMood = 'stressed'
        if (mood === 'stressed') newMood = 'Really stressed'
        else if (mood === 'Really stressed') newMood = 'giving up'

        setMood(newMood)
    }

    return (
    <div className="MoodChanger componentBox">
        Current Mood: {mood}

        <button onClick={() => setMood('tired')}>
            Stay Up Late
        </button>

        {/* Do Not Use */}
        {/* <button onClick={setMood} */}

        <button onClick={() => setMood('hungry')}>
            Skipped Lunch
        </button>

        <button onClick={() => setMood('optimistic')}>
            Got Good Sleep
        </button>

        <button onClick={handleRunningLate}>Running Late</button>
        <button onClick={handleWinLotto}>Win Lotto</button>
    </div>
    )
}

export default MoodChanger;