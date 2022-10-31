import request from 'supertest';

describe('API jsonplaceholder GET request', () =>
{
  it('should return the correct userId', async () =>
  {
    const res = await request('https://jsonplaceholder.typicode.com')
      .get('/posts');

    expect(res.status).toBe(200);
    expect(res.body[0].userId).toBe(1);
  });
});
