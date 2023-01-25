//  Configure an express Server KYU 7
/* 
    preloaded: process.env object 
    process.env = {
        PORT: 3000,
        HOST: "0.0.0.0",
    };*/
const solution = () => {
  const express = require("express");
  const app = express();

  app.listen(process.env.PORT, process.env.HOST, () => {});
};

//  Object Oriented Piracy  KYU 8
//  crew member +=1.5 units to draft
//  draft >  20 w/0 crwe, is it
// add method isWorthIt --> returns boolean

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;

  this.isWorthIt = function () {
    return draft - crew * 1.5 > 20;
  };
}

//YOUR CODE HERE...
