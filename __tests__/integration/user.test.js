import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to create an user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Leonardo Almeida',
        email: 'leo@webid.net.br',
        cpf: 15549529050,
        ra: 274881,
        password: 123456,
        phone: 11940028922,
      });

    expect(response.body).toHaveProperty('id');
  });
});
