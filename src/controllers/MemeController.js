let axios = require("axios")


const getMeme= async function (req, res) {
    try {
        let Id = req.query.template_id
        let text0= req.query.text0
        let text1= req.query.text1
        let username= req.query.username
        let password= req.query.password
        
        // let date = req.query.date
        // console.log(`query params are: ${Id} ${date}`)
        var options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?text0=${text0}|text1=${text1}&username=${username}&password=${password}&template_id=${Id}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getMeme=getMeme