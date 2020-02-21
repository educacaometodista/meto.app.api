import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to login', async () => {
    const response = await request(app)
      .post('/session')
      .send({
        email: 'leo@webid.net.br',
        password: 123456,
      });

    expect(response.body).toHaveProperty('token');
  });
});
