const matchdata = require(`../data/matches.json`);
const deliveriesdata = require(`../data/deliveries.json`);
const fs=require(`fs`);
const path=require(`path`);
//Q3 Extra runs conceded per team in the year 2016
function problem3() {
  let match_id = [];
  let result = {};

  for (let key1 in matchdata) {
    if (matchdata[key1].season === "2016") {
      match_id.push(matchdata[key1].id);
    }
  }
  for (let key2 in deliveriesdata) {
    let Bowling_Team = deliveriesdata[key2]["bowling_team"];
    let extra_runs = parseInt(deliveriesdata[key2]["extra_runs"]);

    if (match_id.includes(deliveriesdata[key2]["match_id"])) {
      if (!result[Bowling_Team]) {
        result[Bowling_Team] = 0;
      }
      result[Bowling_Team] += extra_runs;
    }
  }
  return result;
}

let Result=problem3();
fs.writeFileSync(path.join(__dirname,`../public/output/extra-runs-conced.json`),JSON.stringify(Result),"utf-8");

