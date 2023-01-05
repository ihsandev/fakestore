import { addDocument } from '../lib/firestore';

export default defineEventHandler(async (event:any) => { 
  try {
    const body = await readBody(event);
    await addDocument('transactions' as string, body.id, body);
    return { 
      success: true,
      data: null,
      message: 'add data transaction success'
    };
  } catch (error:any) {
    return { 
      success: false,
      data: null, 
      message: error.message 
    };
  } 
})