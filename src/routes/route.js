const express = require('express');
const router = express.Router();


let players=
       [
           {
               "name": "manish",
               "dob": "1/1/1995",
               "gender": "male",
    
              " city": "jalandhar",
               "sports": [
                   "swimming"
               ]
           },
           {
               "name": "gopal",
               "dob": "1/09/1995",
               "gender": "male",
               "city": "delhi",
               "sports": [
                   "soccer"
               ],
           },
           {
               "name": "lokesh",
               "dob": "1/1/1990",
               "gender": "male",
               "city": "mumbai",
               "sports": [
                   "soccer"
               ],
           },
       ]
     
       router.post('/players', function (req, res) {
             let newplayers=req.body.name
            let i=0,n=players.length;
            while(n>0){
                if(newplayers==players[i].name){
                  return res.send("player details present")
                    

                }
                if(newplayers!=players[i].name && n==1){
                    players.push(req.body);
                }
                 n--;
                 i++;
            }       
                
            res.send(players)
               
             

        })
    
 module.exports = router;

//------------------------------------------------------------------------------


   























