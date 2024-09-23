const matchesdata = require(`../data/matches.json`);
const deliveriesdata = require(`../data/deliveries.json`);
const fs=require(`fs`);
const path=require(`path`);
//Q6 Find a player who has won the highest number of Player of the Match awards for each season

function problem6() {
  let result = {};

  for (let key in matchesdata) {
    let Season = matchesdata[key]["season"];

    let POM = matchesdata[key]["player_of_match"];

    if (!result[Season]) {
      result[Season] = {};
    }
    if (!result[Season][POM]) {
      result[Season][POM] = 1;
    } else {
      result[Season][POM]++;
    }
  }

  let final_result = {};
  for (let season in result) {
    let max = 0;
    let topPlayer = result[season];
    for (let player in result[season]) {
      if (max < result[season][player]) {
        max = result[season][player];
        topPlayer = player;
      }
    }
    final_result[season] = { name: topPlayer, Times: max };
  }

  return final_result;
}
let Result=problem6();
fs.writeFileSync(path.join(__dirname,`../public/output/player-of-the-match.json`),JSON.stringify(Result),"utf-8");

