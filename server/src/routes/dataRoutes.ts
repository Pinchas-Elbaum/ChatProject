import { Router } from "express";
import { getAllUsers } from "../controllers/dataController";


const dataRoutes = Router()

dataRoutes.get("/users", getAllUsers)

export default dataRoutes