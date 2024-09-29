import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)

})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)

/*
userDB: eduardo
senha: LONHHnC9q2dD41x8

*/