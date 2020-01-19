import axios from 'axios';

export default {
  houses: {
    getHouses: () => axios.get('/api/houses'),
    newHouse: (data) => axios.post('/api/houses/new', data),
    removeHouse: (id) => axios.delete(`/remove/${id}`)
  }
}
