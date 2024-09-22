const axios = require("axios");
const {TIMEOUT} = process.env;


module.exports= (baseURL) =>{
  const api = axios.create({
    baseURL: baseURL,
    timeout: TIMEOUT
  });
}