import axios from 'axios';

  axios.defaults.baseURL = 'https://pixabay.com/api';
const setting = '&image_type=photo&orientation=horizontal&per_page=12'
const API_KEY = '29791445-a3e2bb5b00c4bcebfee57452f';

export const fetchApi = async (keyWord, page) => {
const response = await axios.get(
  `/?q=${keyWord}&key=${API_KEY}&page=${page}${setting}`
  )
return  response.data.hits;
}

export default fetchApi;
