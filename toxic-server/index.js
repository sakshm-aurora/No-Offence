const express = require("express");
const app = express();
const Perspective = require('perspective-api-client');
const perspective = new Perspective({apiKey: "<INSERT API KEY>"});
app.use(express.static('public'))
app.get("/check", async (req,res) => {
    const text = req.query.text;
    if(!text){
        res.send({
            success: false, message: "Text missing"
        })
    } else {
        const response = await perspective.analyze(text);
        const percentage = response.attributeScores.TOXICITY.spanScores[0].score.value * 100
        res.send({
            success: true, percentage
        })
    }
})
app.get("*", (req,res) => {
    res.sendFile('/public/index.html');
})
app.listen(process.env.PORT || 8080);
