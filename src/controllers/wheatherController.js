const axios = require("axios")
let getCitiesByTemp = async function (req, res) {
    try {
        let citiesOFArray = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let emptyArr = []
        for (let i = 0; i < citiesOFArray.length; i++) {
            let city = { city: citiesOFArray[i] }
            // }
            // let q = req.query.q
            // console.log(`query params are: ${q}`)
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${citiesOFArray[i]}&appid=f38a2a95b863a7bfe7836e5f0e254c52`
            }
            //http://api.openweathermap.org/data/2.5/weather?q=${citiesOFArray[city]}&appid=f38a2a95b863a7bfe7836e5f0e254c52
            //http://api.openweathermap.org/data/2.5/weather?q=${citiesOFArray[city]}&appid=6b31c9805cd7bce4d56e091e11f75837
            let result = await axios(options)
            console.log(result.data.main.temp)
            city.temp = result.data.main.temp
            emptyArr.push(city)

        }
        let sort = emptyArr.sort((a, b) => a.temp - b.temp)
        res.status(200).send({ msg: sort })
    }


    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getCitiesByTemp = getCitiesByTemp