import authService from '../services/authService.js';

export default class AuthController {
  async register(req, res) {
    try {
        const user = await authService.registerUser(req.body);
        res.send('User registered successfully');
      } catch (error) {
        if (error.message === 'User already registered with this email') {
          res.status(409).send(error.message); // 409 Conflict
        } else {
          res.status(400).send(error.message);
        }
      }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await authService.loginUser(email, password);
      res.send('User logged in successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}