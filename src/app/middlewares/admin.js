import User from '../models/User';

export default async (req, res, next) => {
  const userExists = await User.findByPk(req.userId);

  if (!userExists) {
    return res.status(400).json({ error: 'User does not exists' });
  }

  //const [provider] = userExists;
  if (!userExists.provider) {
    return res.status(401).json({ error: 'You do not have permission' });
  }

  return next();
};
