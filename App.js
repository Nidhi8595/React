import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const heading = React.createElement("h1", { id: "Heading" }, "Hello World from React!");

root.render(heading);


const root2 = ReactDOM.createRoot(document.querySelector("#root2"));

const parent = React.createElement(
    "div",
    { id: "parent" },

    React.createElement(
        "div",
        { id: "child" },

        [React.createElement(
            "h1",
            {},

            "A h1 tag"
        ),
        React.createElement(
            "h2",
            {},

            "A h2 tag"
        )]
    )
);

root2.render(parent);