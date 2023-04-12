import axios from "axios";

let defaultPeriod = "today";
let defaultSign = "aquarius";
let defaultType = "general";

const options = {
  method: "GET",
  params: {
    period: { defaultPeriod },
    sign: { defaultSign },
    type: { defaultType },
  },
  url: `https://horoscopes-ai.p.rapidapi.com/get_horoscope/${defaultSign}/${defaultPeriod}/${defaultType}/en`,
  headers: {
    "X-RapidAPI-Key": "6559f51934msh7dcfedf306aad75p10c4f0jsnbf280656577f",
    "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
  },
};

export const horoscopeAI = (sign, period, type) => {
  options.params.sign = sign;
  options.params.period = period;
  options.params.type = type;

  if (sign && period && type) {
    options.params.url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope/${sign}/${period}/${type}/en`;
  }
  return axios.request(options);
};
