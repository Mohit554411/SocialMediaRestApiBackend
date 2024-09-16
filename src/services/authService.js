import userRepository from '../repositories/userRepository.js';

const registerUser = async (userData) => {
    const existingUser = await userRepository.getUserByEmail(userData.email);
    if (existingUser) {
      throw new Error('User already registered with this email');
    }
    return await userRepository.createUser(userData);
};

const loginUser = async (email, password) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }
  return user;
};

export default {
  registerUser,
  loginUser,
};