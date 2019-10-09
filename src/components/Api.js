import axios from 'axios';

export const getData = () => {
  let URL = 'myallies-breaking-news-v1.p.rapidapi.com';
  return axios.get(URL).then(({ data }) => {
    console.log(data);
    return data;
  });
};
