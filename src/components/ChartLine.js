import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
function ChartLine({ data, name }) {
    return (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
                label={{
                    value: name,
                    angle: -90,
                    position: "insideBottomLeft",
                    offset: 0,
                }}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="val" stroke="#82ca9d" />
        </LineChart>
    );
}

export default ChartLine;
