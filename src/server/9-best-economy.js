const matchdata = require(`../data/matches.json`);
const deliveriesdata = require(`../data/deliveries.json`);

// Q9 Find the bowler with the best economy in super overs

function problem9() {
  let result = {};
  for (let key in deliveriesdata) {
    let Super_Over = deliveriesdata[key]["is_super_over"];
    let Bowler_name = deliveriesdata[key]["bowler"];
    let runs = parseInt(deliveriesdata[key]["total_runs"]);
    if (Super_Over === "1") {
      if (!result[Bowler_name]) {
        result[Bowler_name] = { runs_given: 0, balls_bowled: 0 };
      }
      result[Bowler_name].runs_given += runs;
      result[Bowler_name].balls_bowled++;
    }
  }
  let best_bowler = null;
  let best_economy = Infinity;
  for (let bowler in result) {
    let data = result[bowler];
    let economy = (data.runs_given / data.balls_bowled) * 6;
    if (economy < best_economy) {
      best_economy = economy;
      best_bowler = bowler;
    }
  }
  console.log(
    `The best economy is ${best_economy} The bowler name is ${best_bowler}`
  );
}
problem9();
