import axios from 'axios';

export const ApiCallPost = async (url, parameters, headers) => {
  try {
    const response = await axios.post(url, parameters, {headers: headers});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ApiCallGet = async (url, headers) => {
  try {
    const response = await axios.get(url, {headers: headers});
    return response.data;
  } catch (error) {
    return error;
  }
};


