import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../display.csv";
import ChartLine from "./ChartLine";
// import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { Table } from "react-bootstrap";

function Graphs() {
    let d = [];
    let errors = {
        stall: "stl",
        "Over Temperature": "ot",
        reserved: "res",
        "Motor over-temperature": "mot",
        "Hall Galvanometer sensor error": "hge",
        "Internal volts fault": "iv",
        "Throttle error at power-up": "tpu",
        "Hall throttle is open or short-circuit": "hto",
        "Low Voltage": "lv",
        "Angle sensor error": "ase",
        "Over vlotage": "ov",
        "Identification error": "ie",
    };
    let errd = {};
    let regExp = /[a-z]/i;
    const [data1, setdata1] = useState([]);
    const [data2, setdata2] = useState([]);
    const [data3, setdata3] = useState([]);
    const [data4, setdata4] = useState([]);
    const [data5, setdata5] = useState([]);
    const [data6, setdata6] = useState([]);
    const [errs, seterrs] = useState([]);
    const [errd2, seterrd2] = useState([]);
    useEffect(() => {
        const onReld = async () => {
            const databaseRead = async () => {
                d = await d3.csv(data);
            };
            await databaseRead();
            setdata1([]);
            setdata2([]);
            setdata3([]);
            setdata4([]);
            setdata5([]);
            setdata6([]);
            seterrs([]);
            seterrd2([]);
            for (let i = d.length - 10; i < d.length; i++) {
                for (const [key, item] of Object.entries(d[i])) {
                    if (!isNaN(item)) {
                        if (key === "actual_speed_rpm") {
                            setdata1((prevval) => [
                                ...prevval,
                                { val: Number(item) },
                            ]);
                        } else if (key === "mapped_actual_motCur") {
                            setdata2((prevval) => [
                                ...prevval,
                                { val: Number(item) },
                            ]);
                        } else if (key === "mapped_actual_batVol") {
                            setdata3((prevval) => [
                                ...prevval,
                                { val: Number(item) },
                            ]);
                        } else if (key === "mapped_throttle_signal") {
                            setdata4((prevval) => [
                                ...prevval,
                                { val: Number(item) },
                            ]);
                        } else if (key === "actual_controller_temperature") {
                            setdata5((prevval) => [
                                ...prevval,
                                { val: Number(item) },
                            ]);
                        } else if (key === "actual_motor_temperature") {
                            setdata6((prevval) => [
                                ...prevval,
                                { val: Number(item) },
                            ]);
                        }
                    } else {
                        if (key === "error_list") {
                            let x = item.split('"')[0].split("'");
                            // console.log(x)
                            let y = [];
                            for (let j = 1; j < x.length; j = j + 2)
                                if (regExp.test(x[j])) y.push(x[j]);
                            seterrs((prevval) => [...prevval, y]);
                        }
                    }
                }
            }
            for (let m = 0; m < errs.length; m++) {
                for (let n = 0; n < errs[m].length; n++) {
                    if (errs[m][n] in errd) errd[errs[m][n]] += 1;
                    else errd[errs[m][n]] = 1;
                }
            }
            for (const [key, value] of Object.entries(errd)) {
                seterrd2((prevval) => [
                    ...prevval,
                    { name: errors[key], count: value },
                ]);
            }
        };
        onReld();
    }, []);
    return (
        <div
            style={{ display: "flex", flexFlow: "wrap" }}
            className="graph_display"
        >
            <ChartLine name="speed(rpm)" data={data1} />
            <ChartLine name="motor current" data={data2} />
            <ChartLine name="battery voltage" data={data3} />
            <ChartLine name="throttle signal" data={data4} />
            <ChartLine name="controller temperature" data={data5} />
            <ChartLine name="motor temperature" data={data6} />
            <div className="chartbox">
                <Table className="tableErr" bordered striped>
                    <thead>
                        <th>#</th>
                        {Object.entries(errors).map((val, ind) => (
                            <th>{val[1]}</th>
                        ))}
                    </thead>
                    <tbody>
                        {Object.entries(errs).map((val, ind) => (
                            <>
                                <tr>
                                    <td>{ind + 1}</td>
                                    {Object.entries(errors).map(
                                        (val1, ind1) => (
                                            <td>
                                                {val[1].indexOf(val1[0]) === -1
                                                    ? ""
                                                    : "Error"}
                                            </td>
                                        )
                                    )}
                                </tr>
                            </>
                        ))}
                    </tbody>
                </Table>
                {/* <BarChart
                    width={500}
                    height={300}
                    data={errd2}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis
                        label={{
                            value: "error count",
                            angle: -90,
                            position: "insideBottomLeft",
                            offset: 0,
                        }}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d0" />
                </BarChart> */}
                <div className="box">
                    <p>
                        {Object.entries(errors).map((val, ind) => (
                            <>
                                <text key={ind}>
                                    {val[1]} - {val[0]}
                                </text>

                                <br />
                            </>
                        ))}
                    </p>
                </div>
            </div>

            {/* <LineChart
                width={500}
                height={300}
                data={data1}
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
                        value: "speed(rpm)",
                        angle: -90,
                        position: "insideBottomLeft",
                        offset: 0,
                    }}
                />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="val" stroke="#82ca9d" />
            </LineChart>

            <LineChart
                width={500}
                height={300}
                data={data2}
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
                        value: "mapped_actual_motCur",
                        angle: -90,
                        position: "insideBottomLeft",
                        offset: 0,
                    }}
                />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="val" stroke="#82ca9d" />
            </LineChart>
            <LineChart
                width={500}
                height={300}
                data={data3}
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
                        value: "mapped_actual_batVol",
                        angle: -90,
                        position: "insideBottomLeft",
                        offset: 0,
                    }}
                />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="val" stroke="#82ca9d" />
            </LineChart>
            <LineChart
                width={500}
                height={300}
                data={data4}
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
                        value: "throttle_signal",
                        angle: -90,
                        position: "insideBottomLeft",
                        offset: 0,
                    }}
                />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="val" stroke="#82ca9d" />
            </LineChart>
            <LineChart
                width={500}
                height={300}
                data={data5}
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
                        value: "actual_controller_temperature",
                        angle: -90,
                        position: "insideBottomLeft",
                        offset: 0,
                    }}
                />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="val" stroke="#82ca9d" />
            </LineChart>
            <LineChart
                width={500}
                height={300}
                data={data6}
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
                        value: "actual_motor_temperature",
                        angle: -90,
                        position: "insideBottomLeft",
                        offset: 0,
                    }}
                />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="val" stroke="#82ca9d" />
            </LineChart> */}
        </div>
    );
}

export default Graphs;
