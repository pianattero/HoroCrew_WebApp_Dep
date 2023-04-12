import axios from "axios";

const options = {
  method: "POST",
  url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
  params: { sign: "aquarius", day: "today" },
  headers: {
    "X-RapidAPI-Key": "6559f51934msh7dcfedf306aad75p10c4f0jsnbf280656577f",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

export const aztroAPI = (sign) => {
  options.params.sign = sign.toLowerCase();
  return axios.request(options);
};
