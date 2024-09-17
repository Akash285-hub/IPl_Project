const matchesdata = require(`../data/matches.json`);

//Q2 Number of matches won per team per year in IPL.
function problem2() {
  let result = {};

  for (let key in matchesdata) {
    let Winner = matchesdata[key]["winner"];
    let Season = matchesdata[key]["season"];

    if (!result[Season]) {
      result[Season] = {};
      if (!result[Season][Winner]) {
        result[Season][Winner] = 1;
      }
    } else {
      if (result[Season][Winner]) {
        result[Season][Winner]++;
      } else {
        result[Season][Winner] = 1;
      }
    }
  }
  return result;
}
console.log(problem2());
// problem2()
