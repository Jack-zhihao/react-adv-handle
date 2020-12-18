import axios from '../utils/Http'

export async function getData(params) {
  return (await axios.post('/v1/data/list', params)).data
}
