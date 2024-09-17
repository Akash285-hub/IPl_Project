
import csvtojson from 'csvtojson'
import fs from 'fs';

const matchesCSVFile=`/Users/ak/Desktop/IPL_Project_Akash/IPl_Project/src/data/matches.csv`;
const deliveriesCSVFile=`/Users/ak/Desktop/IPL_Project_Akash/IPl_Project/src/data/deliveries.csv`;

csvtojson().fromFile(matchesCSVFile).then((jsonData)=>{
    try{
        fs.writeFileSync("/Users/ak/Desktop/IPL_Project_Akash/IPl_Project/src/data/matches.json",JSON.stringify(jsonData));
        console.log("matches.json file written successfully");
    }
    catch(err){
        console.log("Error writing matches.json file",err);
    }
});

csvtojson().fromFile(deliveriesCSVFile).then((jsonData)=>{
try{
    fs.writeFileSync("/Users/ak/Desktop/IPL_Project_Akash/IPl_Project/src/data/deliveries.json",JSON.stringify(jsonData));
    console.log("deliveris.json file written successfully");
}
catch(err){
    console.log("Error writing matches.json file ",err);
}
});