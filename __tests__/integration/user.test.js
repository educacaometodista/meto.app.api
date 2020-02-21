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
        password: '123456',
        phone: 11940028922,
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should not pass at validation', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Leonardo Almeida',
      });

    expect(response.body).toMatchObject({ error: 'Validation fails.' });
  });

  it('try to register a existent mail', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Leonardo Almeida',
        email: 'leo@webid.net.br',
        cpf: 15549529050,
        ra: 274881,
        password: '123456',
        phone: 11940028922,
      });

    expect(response.body).toMatchObject({
      error: 'An user with this email already exists.',
    });
  });

  it('try to register a existent cpf', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Leonardo Almeida',
        email: 'leo2@webid.net.br',
        cpf: 15549529050,
        ra: 274881,
        password: '123456',
        phone: 11940028922,
      });

    expect(response.body).toMatchObject({
      error: 'An user with this CPF already exists.',
    });
  });

  it('try to register a existent phone', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Leonardo Almeida',
        email: 'leo2@webid.net.br',
        cpf: 15549629050,
        ra: 274881,
        password: '123456',
        phone: 11940028922,
      });

    expect(response.body).toMatchObject({
      error: 'An user with this phone already exists.',
    });
  });

  it('should be able to list users', async () => {
    const response = await request(app).get('/users');

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'leo@webid.net.br',
        }),
      ])
    );
  });
});

describe('Session', () => {
  it('should be able to login', async () => {
    const response = await request(app)
      .post('/session')
      .send({
        email: 'leo@webid.net.br',
        password: '123456',
      });

    expect(response.body).toHaveProperty('token');
  });

  it('password should not match', async () => {
    const response = await request(app)
      .post('/session')
      .send({
        email: 'leo@webid.net.br',
        password: '1234567',
      });

    expect(response.body).toMatchObject({ error: 'Password does not match.' });
  });

  it('user will not be found', async () => {
    const response = await request(app)
      .post('/session')
      .send({
        email: 'leo2@webid.net.br',
        password: '1234567',
      });

    expect(response.body).toMatchObject({ error: 'User does not found.' });
  });
});
