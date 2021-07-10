import { useState } from 'react'
import { empty, canon } from '../data/sheet'
import chords from '../data/chords'
import { save } from '../utilities/axios'
import { soundEngine } from '../utilities/sound'

const Sheet = (props) => {
  const [sheet, setSheet] = useState(props.sheet)
  const [key, setKey] = useState(props.Key)
  const [octave, setOctave] = useState(props.octave)

  const handleChange = (id, event) => {
    setSheet(
      sheet.map(item => item.map( subItem => 
        subItem.id === id
          ? {
              id: id,
              chord: event.target.value
            }
          : subItem
      ))
    )
  }

  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleSave = async () => {
    try{
      const response = await save({
        user: props.user,
        key: key,
        octave: octave,
        sheet: sheet
      })
      alert(response)
    }
    catch(e){ alert("Error occured!")}
  }

  const handlePlay = async (e) => {
    e.target.style.pointerEvents = "none"
    const playList = sheet.flat().filter(item => item.chord !== "").map(item => item.chord)
    console.log(playList)
    for (let i = 0; i < playList.length; i++){
      soundEngine.play(chords[key][playList[i]].notes.map(item => item + octave))
      await sleep(2000)
    }
    e.target.style.pointerEvents = "auto"
  }

  const handleClear = () => setSheet(empty)

  const handleIdk = () => setSheet(canon)


  const vlStyle = id => {
    if (id % 2 === 0) return {display: "none"}
    return {}
  }

  return (
    <div className="App">
      <h2 className="title">Simple Composer</h2>
      <div className="info">
        <label className="user-info">User: <span style={{color: "rgb(32, 4, 83)"}}>{props.user}</span></label>
        <label>Key: </label>
        <select
            value={key}
            onChange={e => setKey(e.target.value)}
            className="key"
          >
            <option value="C">C</option>
            <option value="G">G</option>
            <option value="D">D</option>
            <option value="A">A</option>
            <option value="E">E</option>
          </select>
        <label>Octave: </label>
        <select
          value={octave}
          onChange={e => setOctave(e.target.value)}
          className="octave"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
      </div>
      <div className="sheet">
        {sheet.map((item, index) => 
          <div className="row" key={index}>
            {item.map(subItem => {
              return (
                <div key={subItem.id} className="custom-select">
                  <select
                    value={subItem.chord}
                    id={subItem.id.toString()}
                    onChange={e => handleChange(subItem.id, e)}
                    className="chord"
                  >
                    <option value=""></option>
                    <option value="1">{chords[key]["1"].name}</option>
                    <option value="1maj7">{chords[key]["1maj7"].name}</option>
                    <option value="2m">{chords[key]["2m"].name}</option>
                    <option value="2m7">{chords[key]["2m7"].name}</option>
                    <option value="3m">{chords[key]["3m"].name}</option>
                    <option value="3m7">{chords[key]["3m7"].name}</option>
                    <option value="4">{chords[key]["4"].name}</option>
                    <option value="4maj7">{chords[key]["4maj7"].name}</option>
                    <option value="5">{chords[key]["5"].name}</option>
                    <option value="57">{chords[key]["57"].name}</option>
                    <option value="6m">{chords[key]["6m"].name}</option>
                    <option value="6m7">{chords[key]["6m7"].name}</option>
                    <option value="7m7-5">{chords[key]["7m7-5"].name}</option>
                  </select>
                  <div className="vl" style={vlStyle(subItem.id)}></div>
                </div>
              )})}
          </div>
        )}
      </div>
      <div className="sec2">
        <div>
            <h2 className="button" onClick={handleSave}>
            Save
            </h2>
        </div>
        <div>
            <h2 className="button" onClick={e => handlePlay(e)}>
            Play
            </h2>
        </div>
        <div>
            <h2 className="button" onClick={handleClear}>
            Clear
            </h2>
        </div>
        <div className="idk">
            <h2 className="button idk-text" onClick={handleIdk}>
            No Idea
            </h2>
        </div>
        <div>
            <h2 className="button" onClick={props.changeUser}>
            Change User
            </h2>
        </div>
      </div>
    </div>
  )
}

export default Sheet