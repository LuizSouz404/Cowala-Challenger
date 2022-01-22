import axios from 'axios';

const APIConversionCurrency = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/last/"
});

export { APIConversionCurrency }
