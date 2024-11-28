// Have router here and export it here once done

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import revData from '../data/majorRevsData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(revData)
})

router.get('/:majorRevId', (req, res) => {
    res.status(200).send(path.resolve(__dirname, '../../client/public/majorRev.html'))
})

export default router