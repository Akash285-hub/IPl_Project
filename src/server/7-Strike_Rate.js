const matchdata = require(`../data/matches.json`);
const deliveriesdata = require(`../data/deliveries.json`);
const fs=require(`fs`);
const path=require(`path`);

//Q7 Find the strike rate of a batsman for each season

function Strike_Rate() {
  let result = {};
  for (let key1 in deliveriesdata) {
    let Batsman_name = deliveriesdata[key1]["batsman"];
    let match_id = deliveriesdata[key1]["match_id"];
    let total_run = parseInt(deliveriesdata[key1]["total_runs"]);

    for (let key2 in matchdata) {
      let Season = matchdata[key2]["season"];
      if (matchdata[key2].id === match_id) {
        if (!result[Season]) {
          result[Season] = {};
        }
        if (!result[Season][Batsman_name]) {
          result[Season][Batsman_name] = {
            Total_made_runs: 0,
            Total_Played_Balls: 0,
          };
        }
        if (result[Season][Batsman_name]) {
          result[Season][Batsman_name].Total_made_runs += total_run;
          result[Season][Batsman_name].Total_Played_Balls++;
        }
      }
    }
  }
  let ansobj = {};
  for (let season in result) {
    ansobj[season] = {};
    for (let batsman in result[season]) {
      let Scored_runs = result[season][batsman]["Total_made_runs"];
      let played_balls = result[season][batsman]["Total_Played_Balls"];
      let StrikeRate = (Scored_runs / played_balls) * 100;
      ansobj[season][batsman] = StrikeRate;
    }
  }
  return ansobj;
}
let Result=Strike_Rate();
fs.writeFileSync(path.join(__dirname,`../public/output/Strike_Rate.json`),JSON.stringify(Result),"utf-8");

