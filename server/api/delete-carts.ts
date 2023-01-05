import { deleteByUserDocument } from '../lib/firestore';

export default defineEventHandler(async (event:any) => { 
  try {
    const query : any = await getQuery(event);
    await deleteByUserDocument('carts' as string, query.userId);
    return { 
      success: true,
      data: null,
      message: 'delete data carts by user success'
    };
  } catch (error:any) {
    return { 
      success: false,
      data: null, 
      message: error.message 
    };
  } 
})