import { Router } from 'express';
import Recipient from './app/models/recipient';

const routes = new Router();

routes.get('/', async (req, res) => {
  const recipient = await Recipient.create({
    nome: 'Vinicius',
    rua: 'São Domingos da Calçada',
    numero: 277,
    estado: 'RJ',
    cidade: 'Resende',
    cep: '27535020',
  });

  return res.json(recipient);
});

export default routes;
