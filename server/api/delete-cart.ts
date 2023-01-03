import { deleteCart } from '../lib/firestore';

export default defineEventHandler(async (event:any) => { 
  try {
    const query : any = await getQuery(event);
    await deleteCart('carts' as string, query.id);
    return { 
      success: true,
      data: null,
      message: 'delete data cart success'
    };
  } catch (error:any) {
    return { 
      success: false,
      data: null, 
      message: error.message 
    };
  } 
})