import { rest } from 'msw';

export function handlers() {
  return [rest.get('/api/user', getUser)];
}

const getUser: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: 'ccs',
      address: 'seoul',
      age: '30',
    })
  );
};
