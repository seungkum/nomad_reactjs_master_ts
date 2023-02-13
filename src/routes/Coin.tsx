import axios from "axios";
import { info } from "console";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import { Outlet } from "react-router";

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.btnColor};
`;
const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
`;
const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const Loader = styled.span`
    text-align: center;
    display: block;
`;

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

interface RouteParams {
    coinId?: string;
}
interface RouteState {
    state: { name: string };
}
interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

function Coin() {
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams() as RouteParams;
    const { state } = useLocation() as RouteState;
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState<PriceData>();
    console.log(coinId);
    useEffect(() => {
        (async () => {
            const infoData = await axios
                .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
                .then((res) => res.data);
            const priceData = await axios
                .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
                .then((res) => res.data);
            setLoading(false);
            setInfo(infoData);
            setPriceInfo(priceData);
            console.log(infoData);
            console.log(priceData);
        })(); // 즉시실행함수 ()()
    }, [coinId]);
    return (
        <Container>
            <Header>
                <Title> {state?.name ? state.name : loading ? "Loading..." : info?.name}</Title>
                {/* state가 존재하면 name을 가져오고 아니면 Loading */}
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{info?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${info?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Open Source:</span>
                            <span>{info?.open_source ? "Yes" : "No"}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{info?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{priceInfo?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{priceInfo?.max_supply}</span>
                        </OverviewItem>
                    </Overview>
                    <Outlet />
                </>
            )}
        </Container>
    );
}
export default Coin;

//
/**
 * 타입스크립트 네임가져오는법
 * console.log(data)<- 해서 콘솔에서나온거 우클릭해서 전역 변수로 object 저장 클릭
 * Object.keys(temp1).join() 하면 단위단으로 다 끊어나옴
 * Object.values(temp1).map(v=>typeof v).join() 벨류값만나오는거
 */
