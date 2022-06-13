// import React, { useEffect, useState } from "react";
// import * as d3 from "d3";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import Login from "./Login";
import NavbarComp from "./NavbarComp";
import Home from "./Home";
// import data from "./display.csv";

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
    console.log(auth);
    return (
        <>
            <NavbarComp />
            <Router>
                <div className="App">
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
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

    // console.log(auth);
}

export default App;
