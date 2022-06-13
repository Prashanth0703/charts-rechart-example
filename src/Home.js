import React from "react";
import Graphs from "./components/graphs";
import { auth } from "./firebase";
import Login from "./Login";

function Home() {
    console.log(auth);
    return localStorage.getItem("user") ? <Graphs /> : <Login />;
}

export default Home;
