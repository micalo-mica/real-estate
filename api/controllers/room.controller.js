import User from "../models/user.model.js";
import propertyModel from "../models/property.model.js";
import agentModel from "../models/agent.model.js";
import createError from "../middleware/createError.js";
import roomModel from "../models/room.model.js";

export const createRoom = async (req, res, next) => {
  const property = await propertyModel.findById(req.params.propertyId);
  const agent = await agentModel.findOne({ userId: req.userId });
  if (!property) {
    return next(createError(404, "You are not allow!"));
  }
  if (!agent) {
    return next(createError(404, "You are not allow!"));
  }
  const agentId = agent._id;
  const userId = req.userId;
  const propertyId = property._id;

  const { desc, price, maxPeople, roomNo } = req.body;
  const roomNos = roomNo.split(",");
  try {
    const createdRooms = [];
    for (const room of roomNos) {
      const newRoom = new roomModel({
        agentId,
        userId,
        propertyId,
        desc,
        price,
        maxPeople,
        roomNo: room,
      });
      const savedRoom = await newRoom.save();
      createdRooms.push(savedRoom);
      try {
        await propertyModel.findByIdAndUpdate(propertyId, {
          $push: { rooms: savedRoom._id },
        });
      } catch (error) {
        next(error);
      }
    }
    res.status(200).json(createdRooms);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  const room = await roomModel.findById(req.params.roomId);
  if (!room) return next(createError(404, "Room not found"));
  try {
    const updatedRoom = await roomModel.findByIdAndUpdate(
      req.params.roomId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    const room = await roomModel.findById(req.params.roomId);
    if (!room) return next(createError(404, "Room not found"));

    if (!room.available) {
      const av = await roomModel.findByIdAndUpdate(
        req.params.roomId,
        { $set: { available: true } },
        { new: true }
      );
      return res.status(200).json({ succuss: true, av });
    } else {
      const av = await roomModel.findByIdAndUpdate(
        req.params.roomId,
        { $set: { available: false } },
        { new: true }
      );
      return res.status(200).json({ succuss: true, av });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const room = await roomModel.findById(req.params.roomId);
    if (!room) {
      return next(createError(404, "Room not found"));
    }
    const property = await propertyModel.findById(room.propertyId);
    if (!property) {
      return next(createError(404, "Property not found"));
    }
    await roomModel.findByIdAndDelete(req.params.roomId);

    try {
      await propertyModel.findByIdAndUpdate(room.propertyId, {
        $pull: { rooms: req.params.roomId },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Room has been deleted.");
  } catch (error) {
    next(error);
  }
};

// get a single room
export const getRoom = async (req, res, next) => {
  try {
    const room = await roomModel.findById(req.params.roomId);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

// get properties
export const getRooms = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.agentId && { agentId: q.agentId }),
    ...(q.userId && { userId: q.userId }),
    ...(q.userId && { userId: q.userId }),
    ...(q.available && { available: true }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
  };
  try {
    const property = await propertyModel.find(filters);
    res.status(200).json({ success: true, property });
  } catch (error) {
    next(error);
  }
};

// export const getMainRooms = async (req, res, next) => {
//   try {
//     const rooms = await Room.find();
//     res.status(200).json(rooms);
//   } catch (err) {
//     next(err);
//   }
// };
