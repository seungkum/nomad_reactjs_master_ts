import React from "react";
import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

export default function Chart() {
    interface coinInterface {
        coinId?: any;
    }
    interface IHistorical {
        time_open: string;
        time_close: string;
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
        market_cap: number;
    }

    const { coinId } = useOutletContext<coinInterface>();
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
        fetchCoinHistory(coinId)
    );
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <div>
            {isLoading ? (
                "loadingChart"
            ) : (
                <>
                    <div>hi</div>

                    <ApexCharts
                        type='line'
                        series={[
                            {
                                name: "hello2",
                                data: data?.map((price) => Number(price.close)) as number[],
                            },
                        ]}
                        height={350}
                        options={{
                            theme: {
                                mode: isDark ? "dark" : "light",
                            },
                            chart: {
                                height: 300,
                                width: 500,
                                toolbar: {
                                    show: false,
                                },
                                background: "transparent",
                            },
                            grid: { show: false },
                            stroke: {
                                curve: "smooth",
                                width: 4,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                                labels: { show: false },
                                type: "datetime",
                                categories: data?.map((price) =>
                                    new Date(+price.time_close * 1000).toUTCString()
                                ),
                            },
                            fill: {
                                type: "gradient",
                                gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                            },
                            colors: ["#0fbcf9"],
                            tooltip: {
                                y: {
                                    formatter: (value) => `$${value.toFixed(2)}`,
                                },
                            },
                        }}
                    />
                </>
            )}

            <div>Chart : {coinId}</div>
        </div>
    );
}
