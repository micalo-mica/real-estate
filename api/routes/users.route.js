import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  activateAgent,
  activateAdmin,
  filterAndGetUser,
  // deactivateSeller,
  // updateSeller,
  // like,
  // dislike,
  // updateAdmin,
  // deactivateAdmin,
} from "../controllers/user.controller.js";
import { verifyToken, verifyUser } from "../middleware/verifyToken.js";

const router = express.Router();

//UPDATE USERS
router.put("/:id", verifyToken, updateUser);

//DELETE USERS
router.delete("/:id", verifyUser, deleteUser);

//GET USER
router.get("/single/:id", verifyToken, getUser);

//GET ALL USERS
router.get("/", verifyToken, getUsers);

//GET FIlTED USERS
router.get("/filter-user", verifyToken, filterAndGetUser);

//ACTIVATE Agent ACCOUNT
router.put("/activate-agent/:id", verifyToken, activateAgent);

//ACTIVATE ADMIN ACCOUNT
router.put("/activate-admin/:id", verifyToken, activateAdmin);

// //UPDATE SELLER ACCOUNT
// router.put("/activate-seller/:id", verifyToken, updateSeller);

// //DEACTIVATE SELLER ACCOUNT
// router.put("/activate-seller/:id", verifyToken, deactivateSeller);

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
