import { getByCollection } from '../lib/firestore';

export default defineEventHandler(async (event:any) => { 
  try {
    const docs = await getByCollection('carts' as string);
    return { 
      success: true,
      data: docs,
      message: 'get data carts success'
    };
  } catch (error:any) {
    return { 
      success: false,
      data: [], 
      message: error.message 
    };
  } 
})