import { updateQtyDocument } from '../lib/firestore';

export default defineEventHandler(async (event:any) => { 
  try {
    const query : any = await getQuery(event);
    const body = await readBody(event)
    await updateQtyDocument('carts' as string, query.id, body.qty);
    return { 
      success: true,
      data: null,
      message: 'update data cart success'
    };
  } catch (error:any) {
    return { 
      success: false,
      data: null, 
      message: error.message 
    };
  } 
})