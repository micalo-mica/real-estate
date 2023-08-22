import createError from "../middleware/createError.js";
import Agent from "../models/agent.model.js";
import User from "../models/user.model.js";

// create account
export const createAccount = async (req, res, next) => {
  const {
    Name,
    gender,
    bankName,
    accountName,
    accountNumber,
    stateOfOrigin,
    LGA,
    profileImg,
  } = req.body;
  try {
    // check for the user in userModel
    const user = await User.findById(req.userId);
    const isCreated = await Agent.findById(req.userId);
    if (!user) {
      return next(createError(401, "User not found"));
    }
    if (!isCreated) {
      return next(createError(401, "You have already created account"));
    }
    // check fields
    if (
      !Name ||
      !gender ||
      !bankName ||
      !accountName ||
      !accountNumber ||
      !stateOfOrigin ||
      !LGA ||
      !profileImg
    )
      return next(createError(400, "Please fill in all fields."));

    // arrange inputs
    const newAgent = new Agent({
      userId: req.userId,
      Name,
      email: user.email,
      gender,
      bankName,
      accountName,
      accountNumber,
      stateOfOrigin,
      LGA,
      profileImg,
    });
    try {
      const saveAgent = await newAgent.save();
      await User.findByIdAndUpdate(req.userId, { $set: { isAgent: true } });
      res.status(200).json({ success: true, saveAgent });
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

// update user
export const updateAgent = async (req, res, next) => {
  const agent = await Agent.findById(req.params.id);
  if (!agent) {
    return next(createError(401, "User not found"));
  }

  try {
    const updatedAgent = await Agent.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedAgent);
  } catch (error) {
    next(error);
  }
};

// get a single user
export const getUserAgent = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(createError(403, "User not found!"));
    }

    res.status(200).send({ success: true, user });
  } catch (error) {
    next(createError(403, "Something went wrong!"));
  }
};

// filter user
export const filterAndGetUser = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.phoneNumber && { phoneNumber: q.phoneNumber }),
    ...(q.email && { email: q.email }),
    ...(q.name && { name: { $regex: q.name, $options: "i" } }),
  };
  try {
    const user = await User.find(filters);
    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

// deactivate Agent Account
export const deactivateAgentAccount = async (req, res, next) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent) {
      return next(createError(401, "User not found"));
    }
    await Agent.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(
      req.params.id,
      { $set: { isAgent: false } },
      { new: true }
    );
    res.status(200).send("deactivated.");
  } catch (error) {}
};

// delete Agent Account
export const deleteAgentAccount = async (req, res, next) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent) {
      return next(createError(401, "User not found"));
    }
    await Agent.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(
      req.params.id,
      { $set: { isAgent: false } },
      { new: true }
    );
    res.status(200).send("deleted.");
  } catch (error) {}
};

// =============================to be moved to the user controllers=============================

export const likeAgent = async (req, res, next) => {
  const id = req.userId;
  const userId = req.params.userId;
  try {
    await User.findByIdAndUpdate(userId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
      $inc: { "seller.likeNo": 1 },
    });
    res.status(200).json("The user has been liked.");
  } catch (err) {
    next(err);
  }
};

export const dislikeSeller = async (req, res, next) => {
  const id = req.userId;
  const userId = req.params.userId;
  try {
    await User.findByIdAndUpdate(userId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
      $inc: { "seller.likeNo": -1 },
    });
    res.status(200).json("The video has been disliked.");
  } catch (err) {
    next(err);
  }
};

// // we subscribe to another person channel
// export const subscribe = async (req, res, next) => {
//   const id = req.userId;
//   const userId = req.params.userId;
//   try {
//     await User.findByIdAndUpdate(userId, {
//       $push: { subscribedUsers: id },
//     });
//     await User.findByIdAndUpdate(req.params.id, {
//       $inc: { subscribers: 1 },
//     });
//     res.status(200).json("Subscription successfull.");
//   } catch (err) {
//     next(err);
//   }
// };

// // we unsubscribe to another person channel
// export const unsubscribe = async (req, res, next) => {
//   const id = req.userId;
//   const userId = req.params.userId;
//   try {
//     try {
//       await User.findByIdAndUpdate(req.user.id, {
//         $pull: { subscribedUsers: req.params.id },
//       });
//       await User.findByIdAndUpdate(req.params.id, {
//         $inc: { subscribers: -1 },
//       });
//       res.status(200).json("Unsubscription successfull.");
//     } catch (err) {
//       next(err);
//     }
//   } catch (err) {
//     next(err);
//   }
// };
