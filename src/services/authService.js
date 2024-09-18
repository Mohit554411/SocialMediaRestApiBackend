import userRepository from '../repositories/userRepository.js';
import DeviceDetector from 'device-detector-js';
const registerUser = async (userData) => {
    const existingUser = await userRepository.getUserByEmail(userData.email);
    if (existingUser) {
      throw new Error('User already registered with this email');
    }
    return await userRepository.createUser(userData);
};

const loginUser = async (email, password,ipAddress,userAgentString) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }
  const deviceDetector = new DeviceDetector();
  const device = deviceDetector.parse(userAgentString);
  console.log(device);
  const deviceInfo = {
    deviceType:device.device.type || 'Unknown',
    brand:device.device.brand || 'Unknown',
    model:device.device.model || 'Unknown',
    platform:device.os.name || 'Unknown',
    osVersion:device.os.version || 'Unknown',
    browser:device.client.name || 'Unknown',
    browserVersion:device.client.version || 'Unknown',
    ipAddress
  };
  userRepository.updateUser(user.id,{deviceInfo});
  return user;
};

export default {
  registerUser,
  loginUser,
};