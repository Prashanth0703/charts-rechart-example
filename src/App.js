// import React, { useEffect, useState } from "react";
// import * as d3 from "d3";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import data from "./display.csv";
import { Navbar, Container, Nav } from "react-bootstrap";
import Graphs from "./components/graphs";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
// } from "recharts";

function App() {
    // let d = [];

    // const [data1, setdata1] = useState([]);
    // const [data2, setdata2] = useState([]);
    // const [data3, setdata3] = useState([]);
    // const [data4, setdata4] = useState([]);
    // const [data5, setdata5] = useState([]);
    // const [data6, setdata6] = useState([]);
    // const [errs, seterrs] = useState([]);
    // useEffect(() => {
    //     const onReld = async () => {
    //         const databaseRead = async () => {
    //             d = await d3.csv(data);
    //             // console.log(d);
    //         };
    //         await databaseRead();
    //         setdata1([]);
    //         setdata2([]);
    //         setdata3([]);
    //         setdata4([]);
    //         setdata5([]);
    //         setdata6([]);
    //         seterrs([]);
    //         for (let i in d) {
    //             for (const [key, item] of Object.entries(d[i])) {
    //                 if (!isNaN(item)) {
    //                     if (key === "actual_speed_rpm") {
    //                         setdata1((prevval) => [
    //                             ...prevval,
    //                             { val: Number(item) },
    //                         ]);
    //                     } else if (key === "mapped_actual_motCur") {
    //                         setdata2((prevval) => [
    //                             ...prevval,
    //                             { val: Number(item) },
    //                         ]);
    //                     } else if (key === "mapped_actual_batVol") {
    //                         setdata3((prevval) => [
    //                             ...prevval,
    //                             { val: Number(item) },
    //                         ]);
    //                     } else if (key === "mapped_throttle_signal") {
    //                         setdata4((prevval) => [
    //                             ...prevval,
    //                             { val: Number(item) },
    //                         ]);
    //                     } else if (key === "actual_controller_temperature") {
    //                         setdata5((prevval) => [
    //                             ...prevval,
    //                             { val: Number(item) },
    //                         ]);
    //                     } else if (key === "actual_motor_temperature") {
    //                         setdata6((prevval) => [
    //                             ...prevval,
    //                             { val: Number(item) },
    //                         ]);
    //                     }
    //                 } else {
    //                     if (key === "error_list") {
    //                         seterrs((prevval) => [...prevval, item]);
    //                     }
    //                 }
    //             }
    //         }
    //     };

    //     onReld();
    //     console.log(errs);
    // }, []);
    return (
        <div className="App">
            <Navbar style={{ width: "100%" }} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Vehicle Monitoring</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Graphs />
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

export default App;
