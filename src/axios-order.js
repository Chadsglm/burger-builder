import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-buildr.firebaseio.com/'
})


export default instance;