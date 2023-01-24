const express = require("express")
const qr = require("qr-image-color")
const app = express()

app.get("/qr", async (req, res) => {
    try {
        const qrcontent = req.query.content || "https://github.com/mi66mc"
        const qrcolor = req.query.color || "black"
        const qrbackground = req.query.background || "white"
        var qrsizeq = req.query.size || 5
        const qrsize = parseInt(qrsizeq)
        if (!Number.isInteger(qrsize)) {
            return res.status(400).send({error:"Invalid number."})
        }
        const qrimage = await qr.image(qrcontent, { type: "png", color:qrcolor, background:qrbackground, size:qrsize })

        qrimage.pipe(res)
    } catch (e) {
        console.log(e)
        res.status(500).send({error:"An error has happened."})
    }
})

app.listen(3000)