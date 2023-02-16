import axios from "axios";
const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
    return await axios
        .get("https://api.coinpaprika.com/v1/coins")
        .then((res) => res.data)
        .then((res) => res.slice(0, 10));
};

export const fetchCoinInfo = (coinId: string) => {
    return axios.get(`${BASE_URL}/coins/${coinId}`).then((response) => response.data);
};

export const fetchCoinTickers = (coinId: string) => {
    return axios.get(`${BASE_URL}/tickers/${coinId}`).then((response) => response.data);
};

export const fetchCoinHistory = (coinId: string) => {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 23 * 7 * 2;
    return axios
        .get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
        .then((response) => response.data);
};
