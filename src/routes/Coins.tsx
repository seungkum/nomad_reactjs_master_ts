import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: ${(props) => props.theme.cardBgColor};
    color: ${(props) => props.theme.textColor};
    border-radius: 15px;
    margin-bottom: 10px;
    border: 1px solid white;
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
interface ICoinsProps {
    toggleDark: () => void;
    // 이 코드는 우리가 toggleDark라는 함수를 받고자 한다고 말하는거 아무 argument도 받지 않고, void를 반환 void는 아무것도없다는뜻
}

function Coins() {
    /*
    react-query 사용전
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    // const asy = () => {
    //     axios.get("https://api.coinpaprika.com/v1/coins").then((res: any) => res.data);
    // };
    
        const query = useQuery({ queryKey: ["todos"], queryFn: response });
        (async () => {
            const response = await axios
                .get("https://api.coinpaprika.com/v1/coins")
                .then((res) => res.data);

            setCoins(response.slice(0, 100));
            setLoading(false);
        })(); // 즉시실행함수 ()()
        */

    const { isLoading, data: coins, error } = useQuery<CoinInterface[]>(["allCoins"], fetchCoins);
    console.log(coins);
    const { toggleDark } = useOutletContext<ICoinsProps>();
    console.log(toggleDark);
    return (
        <Container>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleDark}> toggleDarkMode</button>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinsList>
                    {coins?.map((coin: any) => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                                <Img
                                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                    alt=''
                                />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}
export default Coins;
