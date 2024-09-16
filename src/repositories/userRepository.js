import User from '../models/userModel.js';

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const getUserById = async (userId) => {
  return await User.findById(userId);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

const addTokenToUser = async (userId, token) => {
  const user = await User.findById(userId);
  if (user) {
    user.tokens.push(token);
    await user.save();
  }
  return user;
};

const removeTokenFromUser = async (userId, token) => {
  const user = await User.findById(userId);
  if (user) {
    user.tokens = user.tokens.filter(t => t !== token);
    await user.save();
  }
  return user;
};

const removeAllTokensFromUser = async (userId) => {
  const user = await User.findById(userId);
  if (user) {
    user.tokens = [];
    await user.save();
  }
  return user;
};

export default {
  createUser,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
  addTokenToUser,
  removeTokenFromUser,
  removeAllTokensFromUser,
};