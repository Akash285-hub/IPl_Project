//Q1 Number of matches played per year for all the years in IPL.

const matchesdata=require(`../data/matches.json`)

function problem1(){
    let result={};
   for(let key in matchesdata){
       let seasons=parseInt(matchesdata[key].season);

       if(!result[seasons]){
        result[seasons]=1;
       }
       else{
        result[seasons]++;
       }
   }
   return result;
}
console.log(problem1());