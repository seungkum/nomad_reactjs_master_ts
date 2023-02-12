import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
    coinId: string;
}

const Title = styled.h1`
    color: ${(props) => props.theme.btnColor};
`;
export default function Coins() {
    const { coinId } = useParams();

    return <Title>Coins {coinId}</Title>;
}
