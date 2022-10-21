const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 router.post('/person',function(req,res){
    const votingAge=req.query.votingAge
    const updatedperson=[]
    persons.forEach((person)=>{
       if(person.age > votingAge){
       person.votingStatus=true
       updatedperson.push(person)
       }
   })
     res.send({updatedperson:updatedperson})
 })
 

module.exports = router;
// adding this comment for no reason