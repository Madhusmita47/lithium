const getInfo ={
    name:"lithium",
    week:"W3D3",
    topic:" todays node js topic"
};
function getBatchInfo(){
    console.log("batch name=" + " " +(getInfo.name) +" " +"week="  +(getInfo.week) + " " + "topic=" + (getInfo.topic));
    const today=new Date();
    const day=today.getDate();
    const month=today.getMonth();
    const year=today.getFullYear();
    //console.log("todays date:" +today);
    console.log("date is:",day);
    console.log("month is:",month);
    console.log("year is:",year);
}
module.exports.getBatchInfo=getBatchInfo
