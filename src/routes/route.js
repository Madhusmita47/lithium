const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { application } = require('express');

const router = express.Router();


router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of
    //numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
     let sumofArray=0;
    for(let i=0; i<arr.length; i++){
        sumofArray=sumofArray+arr[i]
    }
    let n=arr.length+1
    let realsum=(n*(n+1)/2)
    let missingNumber=realsum-sumofArray
     res.send( { data: missingNumber } );

});
    
   module.exports = router;

   router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
    //numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38,39]
    let sumofArray=0
    let first=arr[0]
      let last=arr[arr.length-1]
    for(let i=0; i<arr.length;i++){
        sumofArray+=arr[i]
    }
    let n=arr.length+1
    let realsum=[n* (first + last)/2]
    let missingNumber=realsum-sumofArray
    ///LOGIC WILL GO HERE
    res.send( { data: missingNumber } );
    })

    module.exports = router;

  
 




