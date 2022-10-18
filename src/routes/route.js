const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function (req, res) {
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName)
})

// Example 2 for path params
router.get('/student-details/:name', function (req, res) {
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;
//1st question
router.get('/movies', function (req, res) {
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
})

//2nd question
// router.get("/movies/:indexNumber", function (req, res) {
//     let arrmovies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     let obj = req.params.indexNumber
//     // let x=obj.indexNumber

//     res.send(arrmovies[obj])
// })
// 2nd and 3rd question
router.get('/movies/:indexNumber', function (req, res) {
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let obj = req.params
    let x = obj.indexNumber
    if (x < 0 || x > movies.length - 1) {
        res.send("use a valid index")
    }
    else {
        res.send(movies[x])
    }
})
//4th ques
router.get('/films', function (req, res) {
    const films = [{
        id: 1,
        name: "the shining"
    }, {
        id: 2,
        name: "incedence"
    }, {
        id: 3,
        name: "rang de basanti"

    }, {
        id: 4,
        name: "finding nemo"
    }]
    res.send(films)

});

// 5th question
router.get("/films/:filmId", function (req, res) {


    const films = [
        { id: 1, name: "The Shining" },
        { id: 2, name: "Incendies" },
        { id: 3, name: "Rang de Basanti" },
        { id: 4, name: "Finding Nemo" },
    ];

    const id = req.params;
    const idIndex = id.filmId;

    for (let i = 0; i < films.length; i++) {
        let film = films[i];
        if (film.id == idIndex) {
            return res.send(film.name);


        }
    }
    res.send("no movies exist")

    
     

});
