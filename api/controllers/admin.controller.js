import User from "../models/User.model.js";
import createError from "../utils/createError.js";

// update user
export const updateUser = async (req, res, next) => {
  if (req.userId !== req.params.id) {
    return next(createError(403, "You can update only your account!"));
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

// delete account
export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString() || !req.isAdmin) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};

// =============================for seller=============================

// activate seller account
export const activateSeller = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== req.params.id) {
    return next(createError(403, "You can activate only your account!"));
  }

  try {
    const activatedSeller = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(activatedSeller);
  } catch (err) {
    next(err);
  }
};

// update seller account
export const updateSeller = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if ((req.userId !== req.params.id) & !user.isSeller) {
    return next(createError(403, "You can update only your account!"));
  }

  try {
    const updatedSeller = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSeller);
  } catch (err) {
    next(err);
  }
};

// deactivate seller account
export const deactivateSeller = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if ((req.userId !== user._id.toString()) & !user.isSeller) {
    return next(createError(403, "You can deactivate only your account!"));
  }

  try {
    const deactivatedSeller = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(deactivatedSeller);
  } catch (err) {
    next(err);
  }
};

// ===========================for Admin=============================

export const getUser = async (req, res, next) => {
  if (!req.isAdmin) {
    return next(createError(403, "You do not have permission to access!"));
  }
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
};

export const getUsers = async (req, res, next) => {
  if (!req.isAdmin) {
    return next(createError(403, "You do not have permission to access!"));
  }
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// activate admin account
export const activateAdmin = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== req.params.id) {
    return next(createError(403, "You can activate only your account!"));
  }

  try {
    const activatedSeller = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(activatedSeller);
  } catch (err) {
    next(err);
  }
};

// update admin account
export const updateAdmin = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if ((req.userId !== req.params.id) & !user.isSeller) {
    return next(createError(403, "You can update only your account!"));
  }

  try {
    const updatedSeller = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSeller);
  } catch (err) {
    next(err);
  }
};

// deactivate admin account
export const deactivateAdmin = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can deactivate only your account!"));
  }

  try {
    const deactivatedSeller = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(deactivatedSeller);
  } catch (err) {
    next(err);
  }
};

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
