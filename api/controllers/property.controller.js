import User from "../models/user.model.js";
import createError from "../middleware/createError.js";
import Agent from "../models/agent.model.js";
import Property from "../models/property.model.js";

// create a property
export const createProperty = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const agent = await Agent.findOne(req.agentId);

  if (!user.isAgent)
    return next(createError(403, "Only sellers can create a house!"));

  const userId = user._id.toString();
  const agentId = agent._id.toString();

  const newProperty = new Property({
    userId,
    agentId,
    ...req.body,
  });
  try {
    const savedProperty = await newProperty.save();
    res.status(200).json(savedProperty);
  } catch (error) {
    next(error);
  }
};

// update property
export const updateProperty = async (req, res, next) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ success: true, updatedProperty });
  } catch (error) {
    next(error);
  }
};

// delete property
export const deleteProperty = async (req, res, next) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

// get a property
export const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) next(createError(404, "Property not found!"));
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

// get properties
export const getProperties = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const property = await Property.find(filters);
    res.status(200).json({ success: true, property });
  } catch (error) {
    next(error);
  }
};

// get agent properties
export const getAgentProperties = async (req, res, next) => {
  try {
    const agent = await Agent.findOne({ userId: req.userId });
    if (!agent) next(createError(404, "Agent not found!"));

    const property = await Property.find(
      { userId: req.userId } && { agentId: agent._id.toString() }
    );

    res.status(200).json({ success: true, property });
  } catch (error) {
    next(error);
  }
};

// i will work on like and dislike
export const like = async (req, res, next) => {
  const id = req.userId;
  const userId = req.params.userId;
  try {
    await Property.findByIdAndUpdate(userId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
      $inc: { likeNo: 1 },
    });
    res.status(200).json({ success: true, msg: " liked" });
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
  const id = req.userId;
  const userId = req.params.userId;
  try {
    await Property.findByIdAndUpdate(userId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
      $inc: { likeNo: -1 },
    });
    res.status(200).json({ success: true, msg: " disliked" });
  } catch (err) {
    next(err);
  }
};

// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return House.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (error) {
//     next(error);
//   }
// };

// export const countByType = async (req, res, next) => {
//   try {
//     const hotelCount = await House.countDocuments({ type: "hotel" });
//     const apartmentCount = await House.countDocuments({ type: "apartment" });
//     const resortCount = await House.countDocuments({ type: "resort" });
//     const villaCount = await House.countDocuments({ type: "villa" });
//     const cabinCount = await House.countDocuments({ type: "cabin" });

//     res.status(200).json([
//       { type: "hotel", count: hotelCount },
//       { type: "apartments", count: apartmentCount },
//       { type: "resorts", count: resortCount },
//       { type: "villas", count: villaCount },
//       { type: "cabins", count: cabinCount },
//     ]);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getHouseRooms = async (req, res, next) => {
//   try {
//     const hotel = await House.findById(req.params.id);
//     const list = await Promise.all(
//       hotel.rooms.map((room) => {
//         return MainRoom.findById(room);
//       })
//     );
//     res.status(200).json(list);
//   } catch (error) {
//     next(error);
//   }
// };
