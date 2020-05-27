import axios from 'axios'

export default axios.create({
  baseURL: 'https://justtwitt-a5e19.firebaseio.com/'
})