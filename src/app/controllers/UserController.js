import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const { id, nome, email, provider } = await User.create(req.body);
    return res.json({
      id,
      nome,
      email,
      provider,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
