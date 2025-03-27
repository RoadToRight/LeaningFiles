import express from "express";
import app from "../../app.js";
import { CreateDynamicApi, deleteCollection, fieldDelete, fieldEdit, sendDataToFrontEnd, TokenApplication, UpdateActions } from "../Controller/CreateApiController.js";

const router = express.Router();

router.post("/create/dynamic/api",CreateDynamicApi);
router.post("/fieldEdit",fieldEdit);
router.post("/fieldDelete",fieldDelete);
router.post("/UpdateActions",UpdateActions);
router.get("/dataToFront",sendDataToFrontEnd);
router.delete("/deleteCollection",deleteCollection);
router.get("/adsa",TokenApplication);

export default router;