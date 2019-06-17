import axios from 'axios';

export default {
  houses: {
    getHouses: () => axios.get('/api/houses')
  }
}