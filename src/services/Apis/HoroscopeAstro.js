import axios from "axios";

//SIGN INFO
const options1 = {
  method: "GET",
  url: "https://horoscope-astrology.p.rapidapi.com/sign",
  params: { s: "libra" },
  headers: {
    "X-RapidAPI-Key": "6559f51934msh7dcfedf306aad75p10c4f0jsnbf280656577f",
    "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
  },
};

export const horoscopeAstroInfo = (sign) => {
  options1.params.s = sign;
  return axios.request(options1);
};

//COMPATIBILITY BETWEEN SIGNS
const options2 = {
  method: "GET",
  url: "https://horoscope-astrology.p.rapidapi.com/affinity",
  params: { sign1: "Virgo", sign2: "Aries" },
  headers: {
    "X-RapidAPI-Key": "6559f51934msh7dcfedf306aad75p10c4f0jsnbf280656577f",
    "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
  },
};

export const horoscopeAstroCompatibility = (sign1, sign2) => {
  options2.params.sign1 = sign1;
  options2.params.sign2 = sign2;
  return axios.request(options2);
};

//GET 3 TAROT CARDS

const options3 = {
  method: "GET",
  url: "https://horoscope-astrology.p.rapidapi.com/threetarotcards",
  headers: {
    "X-RapidAPI-Key": "6559f51934msh7dcfedf306aad75p10c4f0jsnbf280656577f",
    "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
  },
};

export const horoscopeAstroTarot = () => {
  return axios.request(options3);
};
