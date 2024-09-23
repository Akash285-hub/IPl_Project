const matchdata = require(`../data/matches.json`);
const deliveriesdata = require(`../data/deliveries.json`);
const fs=require(`fs`);
const path=require(`path`);
//Q8 Find the highest number of times one player has been dismissed by another player

function problem8() {
  let result = {};
  for (let key1 in deliveriesdata) {
    let Player_out = deliveriesdata[key1]["player_dismissed"];
    let Bowler_name = deliveriesdata[key1]["bowler"];

    if (Player_out) {
      if (!result[Player_out]) {
        result[Player_out] = {};
      }
      if (!result[Player_out][Bowler_name]) {
        result[Player_out][Bowler_name] = 1;
      } else {
        result[Player_out][Bowler_name]++;
      }
    }
  }
  let max = 0;
  let batsman_name = "";
  let bowler_name = "";
  for (let batsman in result) {
    for (let bowler in result[batsman]) {
      if (result[batsman][bowler] > max) {
        max = result[batsman][bowler];
        batsman_name = batsman;
        bowler_name = bowler;
      }
    }
  }
  
  return   `The higest number of dissmisals is ${max} when ${bowler_name} dismissed ${batsman_name}`;
  
}
let Result=problem8();
fs.writeFileSync(path.join(__dirname,`../public/output/player-dismissed.json`),JSON.stringify(Result),"utf-8");

