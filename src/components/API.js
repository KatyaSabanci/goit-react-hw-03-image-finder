import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (target, page = 1) => {
  const options = {
    key: '40075115-79ef778397691afa6e085785d',
    q: target,
    page: page,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
  };

  const params = new URLSearchParams(options);

  const res = await axios.get(`?${params}`);
  return res.data;
};
