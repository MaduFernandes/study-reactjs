import React, { Component } from "react";
import Navbar from "./Header/Navbar";
import Forms from "./Forms/Forms";
import "./css/App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Forms />
      </>
    );
  }
}
