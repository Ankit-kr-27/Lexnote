import express from "express"
import { pdfDownload } from "../controllers/pdf.controller.js"
import isAuth from "../middleware/isAuth.js"

const pdfRouter = express.Router()
pdfRouter.post("/generate-pdf", isAuth, pdfDownload)

export default pdfRouter