import { resolve } from 'path';

import request from 'supertest';
import app from '../../src/app';

describe('File', () => {
  it('should be able to upload a image', async () => {
    const filePath = resolve(
      __dirname,
      '..',
      '..',
      'tmp',
      'uploads',
      '29baf00a7eae8200fffaf0b80312fd0b.png'
    );

    const response = await request(app)
      .post('/files')
      .attach('file', filePath);

    expect(response.body).toHaveProperty('id');
  });
});
