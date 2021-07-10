import axios from 'axios'

const save = async (saveData) => {
  const result = await axios({
    url: 'http://localhost:4000/api',
    method: 'post',
    data: saveData
  })
  .then( (res) => {
      return res.data
  })
  .catch( (error) => {
      return error
  })
  return result
}

const send = async (sendData) => {
  const res = await axios.get('http://localhost:4000/api', { params: { user: sendData } })
  .then((result) => { 
    return result.data 
  })
  .catch((err) => { 
    console.error(err)
    return "error"
  })

  return res
}

export { save, send }