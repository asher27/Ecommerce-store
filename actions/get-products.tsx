import {Product} from '@/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
const getCategories = async (query: Query): Promise<Product[]> => {

  const queryUrl = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured
    }
  });

  const res = await fetch(queryUrl);

  return res.json();
};

export default getCategories;
