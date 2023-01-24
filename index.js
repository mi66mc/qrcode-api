const express = require("express")
const qr = require("qr-image")
const app = express()

app.get("/qr", (req, res) => {
    const qrcontent = req.query.content || "https://github.com/mi66mc"
    const qrimage = qr.image(qrcontent, { type: "png" })

    qrimage.pipe(res)
})

app.listen(3000)