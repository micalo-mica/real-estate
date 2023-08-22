import jwt from "jsonwebtoken";
import createError from "./createError.js";
import userModel from "../models/user.model.js";
import agentModel from "../models/agent.model.js";
import roomModel from "../models/room.model.js";
import propertyModel from "../models/property.model.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.userId = payload.id;
    // req.isSeller = payload.isSeller;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await userModel.findById(req.userId).select("-password");
    if (req.userId === user._id.toString()) {
      next();
    } else {
      return next(createError(403, "You are not authorized to access this!"));
    }
  });
};

// =======================================for agent======================================

// for checking before deleting account and ...
export const verifyAgentDanger = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await userModel.findById(req.userId).select("-password");
    const agent = await agentModel.findById(req.params.id);
    if (!user) {
      return next(createError(401, "User not found"));
    }
    if (!user.isAgent) {
      return next(createError(401, "You are not an agent"));
    }
    if (!agent) {
      return next(createError(401, "Agent not found"));
    }
    if (req.userId !== agent.userId) {
      return next(createError(403, "You are not authorized to access this!"));
    } else {
      next();
    }
  });
};

// for checking before getting users account and ...
export const verifyAgent = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await userModel.findById(req.userId).select("-password");
    const agent = await agentModel.findOne({ userId: req.userId });
    if (!user) {
      return next(createError(401, "User not found"));
    }
    if (!user.isAgent) {
      return next(createError(401, "You are not an agent"));
    }
    if (!agent) {
      return next(createError(401, "Agent not found"));
    }
    if (req.userId !== agent.userId) {
      return next(createError(403, "You are not authorized to access this!"));
    } else {
      next();
    }
  });
};

// for checking before updating a property and ...
export const verifyAgentToUpdateProperty = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await userModel.findById(req.userId).select("-password");
    const agent = await agentModel.findOne({ userId: req.userId });
    const property = await propertyModel.findById(req.params.id);
    if (!user) {
      return next(createError(401, "User not found"));
    }
    if (!user.isAgent) {
      return next(createError(401, "You are not an agent"));
    }
    if (!agent) {
      return next(createError(401, "Agent not found"));
    }
    if (!property) {
      return next(createError(401, "You can not update this property!"));
    }
    if (req.userId !== agent.userId) {
      return next(createError(403, "You are not authorized to access this!"));
    }
    if (req.userId !== property.userId) {
      return next(createError(403, "You are not authorized to access this!"));
    }
    if (agent._id.toString() !== property.agentId) {
      return next(createError(403, "You are not authorized to access this!!"));
    } else {
      next();
    }
  });
};

// for checking before getting properties and ...
export const verifyAgentGettingProperties = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await userModel.findById(req.userId).select("-password");
    const agent = await agentModel.findOne({ userId: req.userId });
    // or
    // const property = await Property.find({ userId: req.params.id });

    if (!user) {
      return next(createError(401, "User not found"));
    }
    if (!user.isAgent) {
      return next(createError(401, "You are not an agent"));
    }
    if (!agent) {
      return next(createError(401, "Agent not found"));
    }
    if (req.userId !== agent.userId) {
      return next(createError(403, "You are not authorized to access this!"));
    } else {
      next();
    }
  });
};

// for checking before creating room and ...
export const verifyAgentCreatingRoom = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await userModel.findById(req.userId).select("-password");
    const agent = await agentModel.findOne({ userId: req.userId });
    const property = await propertyModel.findById(req.params.propertyId);

    if (!user) {
      return next(createError(401, "User not found"));
    }
    if (!user.isAgent) {
      return next(createError(401, "You are not an agent"));
    }
    if (!agent) {
      return next(createError(401, "Agent not found"));
    }
    if (!property) {
      return next(createError(401, "Property not found"));
    }
    if (req.userId !== agent.userId) {
      return next(createError(403, "You are not authorized to access this!"));
    }
    if (
      req.userId !== property.userId &&
      agent._id.toString() !== property.agentId
    ) {
      return next(createError(403, "You are not authorized to access this!"));
    } else {
      next();
    }
  });
};

// for checking before update room and ...
export const verifyAgentUpdateRoom = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await userModel.findById(req.userId).select("-password");
    const agent = await agentModel.findOne({ userId: req.userId });
    const property = await propertyModel.findOne({ userId: req.userId });
    const room = await roomModel.findById(req.params.roomId);

    if (!user) {
      return next(createError(401, "User not found"));
    }
    if (!user.isAgent) {
      return next(createError(401, "You are not an agent"));
    }
    if (!agent) {
      return next(createError(401, "Agent not found"));
    }
    if (!property) {
      return next(createError(401, "Property not found"));
    }
    if (!room) {
      return next(createError(401, "Room not found"));
    }
    if (req.userId !== agent.userId) {
      return next(createError(403, "You are not authorized to access this!"));
    }
    if (
      req.userId !== property.userId &&
      agent._id.toString() !== property.agentId &&
      req.userId !== room.userId &&
      agent._id.toString() !== room.agentId &&
      property._id.toString() !== room.propertyId
    ) {
      return next(createError(403, "You are not authorized to access this!"));
    } else {
      next();
    }
  });
};
// for checking before delete room and ...
export const verifyAgentDeleteRoom = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await userModel.findById(req.userId).select("-password");
    const agent = await agentModel.findOne({ userId: req.userId });
    const room = await roomModel.findById(req.params.roomId);
    const property = await propertyModel.findById(room.propertyId);
    if (!user) {
      return next(createError(401, "User not found"));
    }
    if (!user.isAgent) {
      return next(createError(401, "You are not an agent"));
    }
    if (!agent) {
      return next(createError(401, "Agent not found"));
    }
    if (!property) {
      return next(createError(401, "Property not found"));
    }
    if (!room) {
      return next(createError(401, "Room not found"));
    }
    if (req.userId !== agent.userId) {
      return next(createError(403, "You are not authorized to access this!"));
    }
    if (
      req.userId !== property.userId &&
      agent._id.toString() !== property.agentId &&
      req.userId !== room.userId &&
      agent._id.toString() !== room.agentId &&
      property._id.toString() !== room.propertyId
    ) {
      return next(createError(403, "You are not authorized to access this!"));
    } else {
      next();
    }
  });
};

// =============================for admin==============================
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized to access this!"));
    }
  });
};
