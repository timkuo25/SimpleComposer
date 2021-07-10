const Setting = ({Key, octave, setKey, setOctave, start}) => {
    return (
        <div className="setting">
            <div className="setting-info">
                <label>Select Key: </label>
                <select
                    value={Key}
                    onChange={e => setKey(e.target.value)}
                    className="setting-key"
                >
                    <option value="C">C</option>
                    <option value="G">G</option>
                    <option value="D">D</option>
                    <option value="A">A</option>
                    <option value="E">E</option>
                </select>
                <label>Select Octave: </label>
                <select
                    value={octave}
                    onChange={e => setOctave(e.target.value)}
                    className="setting-octave"
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                </select>
                <h2 id="start" onClick={start}>
                    Start!
                </h2>
            </div>
        </div>
    )
}
  
export default Setting