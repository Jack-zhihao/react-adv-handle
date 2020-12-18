import axios from 'axios'
import { isObject } from 'lodash';

axios.interceptors.request.use(config => config, error => {
  Promise.reject(error);
});
/* eslint consistent-return: off */

// respone拦截器

axios.interceptors.response.use(

  response => {
    if (!isObject(response.data)) {
      window.location.href = `xxx?redirectUrl=${encodeURIComponent('xxx')}`;
    } else {
      return response;
    }
  },
  error => Promise.reject(error)
);

export default axios;


// // 封装axios的post请求
// export default function fetch(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params)
//       .then(response => {
//         resolve(response.data);
//       })
//       .catch((error) => {
//         reject(error);
//       })
//   })
// }
