const matchdata = require(`../data/matches.json`);
const deliveriesdata = require(`../data/deliveries.json`);
//Q4 Top 10 economical bowlers in the year 2015

function problem4() {
  let match_id = [];
  let result = {};
  for (let key1 in matchdata) {
    if (matchdata[key1].season === "2015") {
      match_id.push(matchdata[key1].id);
    }
  }

  for (let key in deliveriesdata) {
    let Bye_runs = deliveriesdata[key]["bye_runs"];
    let Legbye_runs = deliveriesdata[key]["legbye_runs"];
    let Bowler_name = deliveriesdata[key]["bowler"];
    let Total_runs = deliveriesdata[key]["total_runs"];
    if (match_id.includes(deliveriesdata[key]["match_id"])) {
      if (!result[Bowler_name]) {
        result[Bowler_name] = { given_runs: 0, balls_bowled: 0 };
      }

      let spend_runs = Total_runs - (Legbye_runs + Bye_runs);
      result[Bowler_name].given_runs += spend_runs;

      let no_ball = deliveriesdata[key]["noball_runs"];
      let wide_ball = deliveriesdata[key]["wide_runs"];
      
      if (wide_ball ==="0" && no_ball === "0") {
        result[Bowler_name].balls_bowled++;
      }
    }
  }
   let economy=[];
   for(let key3 in result){
    let Conceded_runs=parseInt(result[key3].given_runs);
     let Balls_bowled=parseInt(result[key3].balls_bowled);
      
     let economyrate= (Conceded_runs/Balls_bowled)*6;
     economy.push({BowlerName:key3 , Economy:economyrate});
   }
   economy.sort((a,b)=>a.Economy-b.Economy);
  return  economy.slice(0,10);
//    return economy;
}
// problem4();
console.log(problem4());