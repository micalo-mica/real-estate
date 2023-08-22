import express from "express";
import {
  createAccount,
  deactivateAgentAccount,
  deleteAgentAccount,
  filterAndGetUser,
  getUserAgent,
  updateAgent,
  // deleteUser,
  // getUser,
  // getUsers,
  // activateSeller,
  // deactivateSeller,
  // updateSeller,
  // like,
  // dislike,
  // activateAdmin,
  // updateAdmin,
  // deactivateAdmin,
} from "../controllers/agent.controller.js";
import {
  verifyAgent,
  verifyAgentDanger,
  verifyToken,
} from "../middleware/verifyToken.js";

const router = express.Router();

//Create Account
router.post("/", verifyToken, createAccount);

// UPDATE USERS
router.put("/:id", verifyAgentDanger, updateAgent);

//GET SINGLE USER
router.get("/:id", verifyAgent, getUserAgent);

// //GET ALL USERS
router.get("/", verifyAgent, filterAndGetUser);

//Deactivate Agent Account
router.put("/deactivate/:id", verifyAgentDanger, deactivateAgentAccount);

//delete Agent Account
router.delete("/:id", verifyAgentDanger, deleteAgentAccount);

// //GET USER
// router.get("/:id", verifyToken, getUser);

// //ACTIVATE SELLER ACCOUNT
// router.put("/activate-seller/:id", verifyToken, activateSeller);

// //UPDATE SELLER ACCOUNT
// router.put("/activate-seller/:id", verifyToken, updateSeller);

// //DEACTIVATE SELLER ACCOUNT
// router.put("/activate-seller/:id", verifyToken, deactivateSeller);

// //ACTIVATE ADMIN ACCOUNT
// router.put("/activate-admin/:id", verifyToken, activateAdmin);

// //UPDATE ADMIN ACCOUNT
// router.put("/activate-admin/:id", verifyToken, updateAdmin);

// //DEACTIVATE ADMIN ACCOUNT
// router.put("/activate-admin/:id", verifyToken, deactivateAdmin);

// //like an agent
// router.put("/like/:userId", verifyToken, like);

// //dislike a agent
// router.put("/dislike/:userId", verifyToken, dislike);

// //subscribe a user
// // router.put("/sub/:id", verifyToken, subscribe);

// // //unsubscribe a user
// // router.put("/unsub/:id", verifyToken, unsubscribe);

export default router;
