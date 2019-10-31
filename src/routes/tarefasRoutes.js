const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasControllers")

router.get("/", controller.get)
router.get("/:id", controller.getById)

router.get("/colaborador/:nomeColaborador", controller.getByName)
module.exports = router
