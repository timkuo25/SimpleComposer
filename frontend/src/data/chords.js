const chords = {
    "C": {
        "1": {name: "C",notes: ["C", "E", "G"]},
        "1maj7" : {name: "Cmaj7", notes: ["C", "E", "G", "B"]},
        "2m": {name: "Dm", notes: ["D", "F", "A"]},
        "2m7": {name: "Dm7", notes: ["D", "F", "A", "C"]},
        "3m": {name: "Em", notes: ["E", "G", "B"]},
        "3m7": {name: "Em7", notes: ["E", "G", "B", "D"]},
        "4": {name: "F", notes: ["F", "A", "C"]},
        "4maj7": {name: "Fmaj7", notes: ["F", "A", "C", "E"]},
        "5": {name: "G", notes: ["G", "B", "D"]},
        "57": {name: "G7", notes: ["G", "B", "D", "F"]},
        "6m": {name: "Am", notes: ["A", "C", "E"]},
        "6m7": {name: "Am7", notes: ["A", "C", "E", "G"]},
        "7m7-5": {name: "Bm7-5", notes: ["B", "D", "F", "A"]}
    },
    "G": {
        "1": {name: "G", notes: ["G", "B", "D"]},
        "1maj7" : {name: "Gmaj7", notes: ["G", "B", "D", "F#"]},
        "2m": {name: "Am", notes: ["A", "C", "E"]},
        "2m7": {name: "Am7", notes: ["A", "C", "E", "G"]},
        "3m": {name: "Bm", notes: ["B", "D", "F#"]},
        "3m7": {name: "Bm7", notes: ["B", "D", "F#", "A"]},
        "4": {name: "C", notes: ["C", "E", "G"]},
        "4maj7": {name: "Cmaj7", notes: ["C", "E", "G", "B"]},
        "5": {name: "D", notes: ["D", "F#", "A"]},
        "57": {name: "D7", notes: ["D", "F#", "A", "C"]},
        "6m": {name: "Em", notes: ["E", "G", "B"]},
        "6m7": {name: "Em7", notes: ["E", "G", "B", "D"]},
        "7m7-5": {name: "F#m7-5", notes: ["F#", "A", "C", "E"]}
    },
    "D": {
        "1": {name: "D", notes: ["D", "F#", "A"]},
        "1maj7": {name: "Dmaj7", notes: ["D", "F#", "A", "C#"]},
        "2m": {name: "Em", notes: ["E", "G", "B"]},
        "2m7": {name: "Em7", notes: ["E", "G", "B", "D"]},
        "3m": {name: "F#m", notes: ["F#", "A", "C#"]},
        "3m7": {name: "F#m7", notes: ["F#", "A", "C#", "E"]},
        "4": {name: "G", notes: ["G", "B", "D"]},
        "4maj7": {name: "Gmaj7", notes: ["G", "B", "D", "F#"]},
        "5": {name: "A", notes: ["A", "C#", "E"]},
        "57": {name: "A7", notes: ["A", "C#", "E", "G"]},
        "6m": {name: "Bm", notes: ["B", "D", "F#"]},
        "6m7": {name: "Bm7", notes: ["B", "D", "F#", "A"]},
        "7m7-5": {name: "C#m7-5", notes: ["C#", "E", "G", "B"]}
    },
    "A": {
        "1": {name: "A", notes: ["A", "C#", "E"]},
        "1maj7": {name: "Amaj7", notes: ["A", "C#", "E", "G#"]},
        "2m": {name: "Bm", notes: ["B", "D", "F#"]},
        "2m7": {name: "Bm7", notes: ["B", "D", "F#", "A"]},
        "3m": {name: "C#m", notes: ["C#", "E", "G#"]},
        "3m7": {name: "C#m7", notes: ["C#", "E", "G#", "B"]},
        "4": {name: "D", notes: ["D", "F#", "A"]},
        "4maj7": {name: "Dmaj7", notes: ["D", "F#", "A", "C#"]},
        "5": {name: "E", notes: ["E", "G#", "B"]},
        "57": {name: "E7", notes: ["E", "G#", "B", "D"]},
        "6m": {name: "F#m", notes: ["F#", "A", "C#"]},
        "6m7": {name: "F#m7", notes: ["F#", "A", "C#", "E"]},
        "7m7-5": {name: "G#m7-5", notes: ["G#", "B", "D", "F#"]}
    },
    "E": {
        "1": {name: "E", notes: ["E", "G#", "B"]},
        "1maj7" : {name: "Emaj7", notes: ["E", "G#", "B", "D#"]},
        "2m": {name: "F#m", notes: ["F#", "A", "C#"]},
        "2m7": {name: "F#m7", notes: ["F#", "A", "C#", "E"]},
        "3m": {name: "G#m", notes: ["G#", "B", "D#"]},
        "3m7": {name: "G#m7", notes: ["G#", "B", "D#", "F#"]},
        "4": {name: "A", notes: ["A", "C#", "E"]},
        "4maj7": {name: "Amaj7", notes: ["A", "C#", "E", "G#"]},
        "5": {name: "B", notes: ["B", "D#", "F#"]},
        "57": {name: "B7", notes: ["B", "D#", "F#", "A"]},
        "6m": {name: "C#m", notes: ["C#", "E", "G#"]},
        "6m7": {name: "C#m7", notes: ["C#", "E", "G#", "B"]},
        "7m7-5": {name: "D#m7-5", notes: ["D#", "F#", "A", "C#"]}
    }
}

export default chords 