import axios from "axios";

const options = {
  method: "GET",
  url: "https://horostory.p.rapidapi.com/horoscope",
  params: {
    sign: "virgo",
    date: "today",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "6559f51934msh7dcfedf306aad75p10c4f0jsnbf280656577f",
    "X-RapidAPI-Host": "horostory.p.rapidapi.com",
  },
};

export const dailyHoro = (sign) => {
  options.params.sign = sign;
  return axios.request(options);
};
