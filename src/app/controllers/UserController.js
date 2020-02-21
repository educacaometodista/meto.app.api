import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      cpf: Yup.number().required(),
      password: Yup.string()
        .min(6)
        .required(),
      phone: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { email, cpf, phone } = req.body;

    const emailExists = await User.findOne({
      where: {
        email,
      },
    });

    if (emailExists) {
      return res
        .status(400)
        .json({ error: 'An user with this email already exists.' });
    }

    const cpfExists = await User.findOne({
      where: {
        cpf,
      },
    });

    if (cpfExists) {
      return res
        .status(400)
        .json({ error: 'An user with this CPF already exists.' });
    }

    const phoneExists = await User.findOne({
      where: {
        phone,
      },
    });

    if (phoneExists) {
      return res
        .status(400)
        .json({ error: 'An user with this phone already exists.' });
    }

    const { id, name } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      cpf,
      phone,
    });
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }
}

export default new UserController();
