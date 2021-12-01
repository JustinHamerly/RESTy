import '@testing-library/jest-dom/extend-expect';

import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json({}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Testing Request', async () => {
  
});