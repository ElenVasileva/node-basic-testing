import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios')
const relativePath = 'todos'

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    (axios.create as jest.Mock).mockReturnValueOnce({
      get: async () => { return { data: 'data' } },
    });
    await throttledGetDataFromApi(relativePath)
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    })
  });

  test('should perform request to correct provided url', async () => {
    const getFn = jest.fn();

    (axios.create as jest.Mock).mockReturnValue({
      get: getFn,
    });
    await throttledGetDataFromApi(relativePath)
    //expect(getFn).toHaveBeenCalledWith(relativePath)
  });

  test('should return response data', async () => {
    // Write your test here
  });
});
