import Recipient from '../models/recipient';

class RecipientController {
  async store(req, res) {
    const { id } = await Recipient.create(req.body);
    return res.json({ id });
  }
}

export default new RecipientController();
