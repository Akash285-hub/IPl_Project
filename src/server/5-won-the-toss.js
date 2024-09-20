const matchdata = require(`../data/matches.json`);
const deliveriesdata = require(`../data/deliveries.json`);

//Q4 Find the number of times each team won the toss and also won the match

function tosswon() {
  let result = {};
  for (let key in matchdata) {
    let Toss_won = matchdata[key]["toss_winner"];
    let Match_winner = matchdata[key]["winner"];

    if (Toss_won === Match_winner) {
      if (!result[Toss_won]) {
        result[Toss_won] = 1;
      } else {
        result[Toss_won]++;
      }
    }
  }
  return result;
}
console.log(tosswon());
