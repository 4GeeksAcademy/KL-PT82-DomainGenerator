window.onload = function () {
  let pronoun = ["the", "our", "his", "her", "their"];
  let adj = ["great", "big", "blue", "simple", "amazing"];
  let noun = ["jogger", "racoon", "sky", "city", "home"];
  let extensions = [".com", ".net", ".org", ".io"]; // Add more extensions here

  function randomDomainName() {
    let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let randomAdj = adj[Math.floor(Math.random() * adj.length)];
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    let randomExt = extensions[Math.floor(Math.random() * extensions.length)];

    return `${randomPronoun}${randomAdj}${randomNoun}${randomExt}`;
  }

  let result = randomDomainName();
  document.querySelector("#domain").innerText = result;

  function getAllDomains() {
    let AllDomains = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < extensions.length; l++) {
            let domain = `${pronoun[i]}${adj[j]}${noun[k]}${extensions[l]}`;
            AllDomains.push(domain);
          }
        }
      }
    }
    return AllDomains;
  }

  let domainsResults = getAllDomains();
  document.querySelector("#allDomains").innerHTML = domainsResults.join("<br>");
};
