import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  activateSeller,
  deactivateSeller,
  updateSeller,
  like,
  dislike,
  activateAdmin,
  updateAdmin,
  deactivateAdmin,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE USERS
router.put("/:id", verifyToken, updateUser);

//DELETE USERS
router.delete("/:id", verifyToken, deleteUser);

//GET USER
router.get("/:id", verifyToken, getUser);

//GET ALL USERS
router.get("/", verifyToken, getUsers);

//ACTIVATE SELLER ACCOUNT
router.put("/activate-seller/:id", verifyToken, activateSeller);

//UPDATE SELLER ACCOUNT
router.put("/activate-seller/:id", verifyToken, updateSeller);

//DEACTIVATE SELLER ACCOUNT
router.put("/activate-seller/:id", verifyToken, deactivateSeller);

//ACTIVATE ADMIN ACCOUNT
router.put("/activate-admin/:id", verifyToken, activateAdmin);

//UPDATE ADMIN ACCOUNT
router.put("/activate-admin/:id", verifyToken, updateAdmin);

//DEACTIVATE ADMIN ACCOUNT
router.put("/activate-admin/:id", verifyToken, deactivateAdmin);

//like an agent
router.put("/like/:userId", verifyToken, like);

//dislike a agent
router.put("/dislike/:userId", verifyToken, dislike);

//subscribe a user
// router.put("/sub/:id", verifyToken, subscribe);

// //unsubscribe a user
// router.put("/unsub/:id", verifyToken, unsubscribe);

export default router;
