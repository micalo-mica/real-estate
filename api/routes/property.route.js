import express from "express";
import {
  createProperty,
  deleteProperty,
  getProperty,
  getProperties,
  updateProperty,
  getAgentProperties,
  // countByCity,
  // countByType,
  // createHouse,
  // deleteHouse,
  // dislike,
  // getHouse,
  // getHouseRooms,
  // getHouses,
  // like,
  // updateHouse,
} from "../controllers/property.controller.js";
import {
  verifyAgent,
  verifyAgentGettingProperties,
  verifyAgentToUpdateProperty,
  verifyToken,
} from "../middleware/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAgent, createProperty);

//UPDATE
router.put("/:id", verifyAgentToUpdateProperty, updateProperty);

//DELETE
router.delete("/:id", verifyAgentToUpdateProperty, deleteProperty);

//GET
router.get("/find/:id", getProperty);

//GET ALL
router.get("/", getProperties);

//GET ALL
router.get(
  "/agent/agent-property",
  verifyAgentGettingProperties,
  // verifyToken,
  getAgentProperties
);

// //GET ALL
// router.get("/agent/:id", verifyAgentGettingProperties, getAgentProperties);

// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHouseRooms);

// //like an agent
// router.put("/like/:userId", verifyToken, like);

// //dislike a agent
// router.put("/dislike/:userId", verifyToken, dislike);

export default router;
