import React, { Component } from "react";
import "./styles/header.css";
import Navigation from "./Navigation";
const cameronPatriot = require("./styles/images/patriot.gif");
const cameronBear = require("./styles/images/bear.gif");
const cameronBold = require("./styles/images/bold.gif");
const cameronBag = require("./styles/images/paper_bag.gif");
const cameronSpirit = require("./styles/images/spiritted.gif");
const cameronTomato = require("./styles/images/toamto.gif");
const cameronWig = require("./styles/images/wig.gif");
const logo = require("./styles/images/logo_CC.png");

export default class Header extends Component {
  randomImage = () => {
    const images = [
      cameronBag,
      cameronBear,
      cameronBold,
      cameronPatriot,
      cameronSpirit,
      cameronWig
    ];
    return images[Math.floor(Math.random() * images.length)];
  };
  render() {
    return (
      <div className="body">
        <img id="cameron-logo" src={logo} alt="camLogo" />
        <img
          id="cameron-pin"
          src={this.randomImage()}
          alt="David Cameron, A Patriot"
        />
        <div>
          <p className="about-header" id="cameron-about">
            <a href="#about-us">about the project</a>
          </p>
          <Navigation main />
        </div>
      </div>
    );
  }
}
