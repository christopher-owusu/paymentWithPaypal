const express = require("express")

const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', {
        paypalClientId:
        "AbV15f4j2e8b_bTwsAYYA5s6KAThzvkIes6GT8Herr7u7uG7IWDbQM9VIcRiokgKF0jbzWFaHIbuQPM5",
    })
})

app.listen(3000)