/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Chart, ChartSeries, ChartSeriesItem } from "@progress/kendo-react-charts";

export const KendoChart = qwikify$(() => {
    const data = [1, 2, 3, 5, 8, 13];
    return (
        <div>
            <Chart>
                <ChartSeries>
                    <ChartSeriesItem data={data} name="Fibonacci" />
                </ChartSeries>
            </Chart>
        </div>
    );
});