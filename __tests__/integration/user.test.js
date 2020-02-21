import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('Should be able to register', async () => {
    const response = await request(app)
      .post('/session')
      .send({
        name: 'Léu Almeida',
        email: 'leo@webid.net.br',
        cpf: 56754842059,
        ra: 274881,
        password_hash: '123456',
        gratuade: false,
        phone: 11940028922,
      });

    expect(response.body).toHaveProperty('id');
  });
});
