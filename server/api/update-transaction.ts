import { updateDocument } from '../lib/firestore';

export default defineEventHandler(async (event:any) => { 
  try {
    const query : any = await getQuery(event);
    const body = await readBody(event)
    await updateDocument('transactions' as string, query.id, body);
    return { 
      success: true,
      data: null,
      message: 'update data transaction success'
    };
  } catch (error:any) {
    return { 
      success: false,
      data: null, 
      message: error.message 
    };
  } 
})