import express from 'express'; 
import { createnotes,deletenotes,getnotes, updatednotes } from "../controllers/notesController.js";

const router = express.Router();

router.post("/",createnotes );
router.get("/", getnotes);
router.put("/:id",updatednotes);
router.delete("/:id",deletenotes);

export default router; //first m3s0bztnkFoLtwLP
//