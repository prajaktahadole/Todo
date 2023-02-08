const router = require("express").Router();
const DataController = require("../controllers/dataController")

router.post("/api/todo/", DataController.create_Data);
router.get("/api/todo/", DataController.All_Data);
router.get("/api/todo/:id", DataController.single_Data);
router.put("/api/todo/:id", DataController.Update_Data);
router.delete("/api/todo/:id", DataController.Delete_Data);

module.exports = router;

