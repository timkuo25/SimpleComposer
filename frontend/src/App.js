import './App.css'
import User from './components/User'
import Setting from './components/Setting'
import Sheet from './components/Sheet'
import { send } from './utilities/axios'
import { xiaoban } from './data/sheet'
import { useState } from 'react'

const App = () => {
  const [sent, setSent] = useState(false)
  const [set, setSet] = useState(false)
  const [key, setKey] = useState("C")
  const [octave, setOctave] = useState("2")
  const [user, setUser] = useState("")

  const [preload, setPreload] = useState(null)

  const handleSend = async () => {
    const response = await send(user)

    if (response !== "error"){
      if (response !== "User not found"){
        setPreload( {
          key: response.key,
          octave: response.octave,
          sheet: response.sheet
        })
      }
      setSent(true)
    }
  }

  const handleChangeUser = () => {
    setSet(false)
    setSent(false)
    setPreload(null)
  }

  if (!sent) return <User setUser={setUser} send={handleSend}/>

  if (preload !== null) return( 
    <Sheet 
      Key={preload.key}
      octave={preload.octave}
      changeUser={handleChangeUser}
      user={user}
      sheet={preload.sheet}
    />
  ) 

  return (
    <>
      {set
      ? <Sheet 
          Key={key}
          octave={octave}
          changeUser={handleChangeUser}
          user={user}
          sheet={xiaoban}
        /> 
      : <Setting Key={key} octave={octave} setKey={setKey} setOctave={setOctave} start={() => {setSet(true)}}/>}
    </>
  )
}

export default App