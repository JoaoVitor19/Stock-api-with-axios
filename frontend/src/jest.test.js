import typeproduct from '../src/api'
import axios from 'axios'

jest.mock('axios');

describe('test typeproduct create', () => {
    it('typeproduct create successfully', async () => {
        const typeProduct = {
            data: {
                typeProduct: [
                    {
                        id: 1,
                        type: 'Embalagem',
                    },
                ]
            }
        }
         axios.get.mockImplementationOnce(() => Promise.resolve(typeProduct));
    });
})