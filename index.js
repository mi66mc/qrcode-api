const express = require("express")
const qr = require("qr-image-color")
const app = express()

app.get("/qr", (req, res) => {
    try {
        const qrcontent = req.query.content || "https://github.com/mi66mc"
        const qrcolor = req.query.color || "black"
        const qrbackground = req.query.background
        const qrimage = qr.image(qrcontent, { type: "png", color:qrcolor, background:qrbackground })

        qrimage.pipe(res)
    } catch (e) {
        res.json({error:"An error has happened."})
    }
})

app.listen(3000)