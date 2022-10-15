const a=require("lodash")
function lodash(){
    let month=["january","february","march","april","may","june","july",
"august","september","october","november","december"]
console.log(a.chunk(month,4))
const oddnum=[3,5,7,9,11,13,15,17,19,21]
console.log(a.tail(oddnum,9))
const num=[2,3,4,2,4,]
console.log(a.union(num));
const keyvalue=[
               ["horror","The Shining"],
               ["drama","Titanic"],
               ['“thriller”',"Shutter Island"],
               ["fantasy" ,"Pans Labyrinth"]
]
console.log(a.fromPairs(keyvalue));



}
module.exports.lodash = lodash;
