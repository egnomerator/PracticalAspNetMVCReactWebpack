import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navBar";
import Demo from "./components/demo";
import LongLoadDemo from "./components/longLoadDemo";

ReactDOM.render(
    <NavBar />,
    document.getElementById("navbarRct")
);

ReactDOM.render(
    <Demo />,
    document.getElementById("demoRct")
);

ReactDOM.render(
    <LongLoadDemo />,
    document.getElementById("longLoadDemoRct")
);
