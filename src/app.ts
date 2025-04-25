// const express = require('express')
import express, { Application, Request, Response } from "express"
import cors from "cors"
const app:Application = express()
const port = 3000

//parser
app.use(express.json())
app.use(express.cors())
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

console.log("current work directory is :" + process.cwd())

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

export default app;