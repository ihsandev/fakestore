import { getByCollection } from '../lib/firestore';

export default defineEventHandler(async (event:any) => { 
  try {
    const docs = await getByCollection('transactions' as string);
    return { 
      success: true,
      data: docs,
      message: 'get data transactions success'
    };
  } catch (error:any) {
    return { 
      success: false,
      data: [], 
      message: error.message 
    };
  } 
})