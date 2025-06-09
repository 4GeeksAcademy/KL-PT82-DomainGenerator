import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ["the", "our", "his", "her", "their"];
  let adj = ["great", "big", "blue", "simple", "amazing"];
  let noun = ["jogger", "racoon", "sky", "city", "home"];

  function randomDomainName() {
    let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let randomAdj = adj[Math.floor(Math.random() * adj.length)];
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];

    return `${randomPronoun}${randomAdj}${randomNoun}.com`;
  }
  let result = randomDomainName();
  document.querySelector("#domain").innerText = result;
  console.log("Hello Rigo from the console!");
  function getAllDomains() {
    let AllDomains = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          let domain = `${pronoun[i]}${adj[j]}${noun[k]}.com`;
          AllDomains.push(domain);
        }
      }
    }
    return AllDomains;
  }
  let domainsResults = getAllDomains();
  document.querySelector("#allDomains").innerText = domainsResults.join("<br>");

  console.log(result);
};
