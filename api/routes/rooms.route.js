import express from "express";
import {
  verifyAgentCreatingRoom,
  verifyAgentDeleteRoom,
  verifyAgentUpdateRoom,
} from "../middleware/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.controller.js";

const router = express.Router();
//CREATE
router.post("/:propertyId", verifyAgentCreatingRoom, createRoom);

//UPDATE
router.put("/:roomId", verifyAgentUpdateRoom, updateRoom);

// update room availability
router.put(
  "/availability/:roomId",
  verifyAgentUpdateRoom,
  updateRoomAvailability
);

//DELETE
router.delete("/:roomId", verifyAgentDeleteRoom, deleteRoom);

//GET
router.get("/:roomId", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;
