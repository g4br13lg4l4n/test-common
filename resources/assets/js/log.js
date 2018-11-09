import Axios from 'axios'


const log = ( url, data) => {
  Axios.post(url, data)
  .then(resp  => { })
}

export default log