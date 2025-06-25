import { products } from '@/constants';
import { supabase } from './supabase';

export const seedDB = async () => {
  try {
    for (const product of products) {
      const { data, error } = await supabase.from('products').insert(product);
      if (error) {
        console.log('seed/error: ', error);
      } else {
        console.log('seed/data: ', data);
      }
    }
  } catch (error) {
    console.log('seed/err: ', error);
  }
};
