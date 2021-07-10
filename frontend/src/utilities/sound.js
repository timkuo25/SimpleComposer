import {note} from '@tonaljs/tonal'
import { Howl } from 'howler'

const sound = new Howl({
    src: ['pianosprite.mp3'],
    onload(){
        soundEngine.init()
    },
    onloaderror(e, msg){
        console.log('Error', e, msg)
    }
})

const soundEngine = {
    init(){
        const lengthOfNote = 2400
        let timeIndex = 0
        for(let i = 24; i <= 96; i++){
            sound['_sprite'][i] = [timeIndex, lengthOfNote]
            timeIndex += lengthOfNote
        }
    },
    play(soundSequence){
        const soundSequenceMidiNumbers = soundSequence.map(noteName => {
            return note(noteName).midi
        })
        soundSequenceMidiNumbers.forEach(noteMidiNumber => {
            sound.play(noteMidiNumber.toString())
        });
    },
    stop(){
        sound.stop()
    }
}

export {sound, soundEngine}