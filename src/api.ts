import axios from "axios";

export const fetchCoins = async () => {
    return await axios
        .get("https://api.coinpaprika.com/v1/coins")
        .then((res) => res.data)
        .then((res) => res.slice(0, 10));
};
