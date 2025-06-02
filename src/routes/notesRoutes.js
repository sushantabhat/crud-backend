import express from 'express'; 
import { createnotes,deletenotes,getnotes, updatednotes ,getnotesbyid} from "../controllers/notesController.js";

const router = express.Router();

router.post("/",createnotes );
router.get("/", getnotes);
router.get("/:id", getnotesbyid); // fetch a specific note by ID
router.put("/:id",updatednotes);
router.delete("/:id",deletenotes);

export default router; // Exporting the router to use in server.js