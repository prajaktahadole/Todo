const router = require("express").Router();
const DataController = require("../controllers/dataController")

router.post("/", DataController.create_Data);
router.get("/", DataController.All_Data);
router.get("/:id", DataController.single_Data);
router.put("/:id", DataController.Update_Data);
router.delete("/:id", DataController.Delete_Data);

module.exports = router;

