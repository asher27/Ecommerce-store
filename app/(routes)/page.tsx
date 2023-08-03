import Container from '@/components/ui/container';
import Billboard from '@/components/Billboard';
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

// ####################################################################
export const dynamic = 'force-dynamic';
// ####################################################################

const HomePage = async () => {
  const billboard = await getBillboard('f71640b0-d6bb-4b03-bc0d-c3312acb65f2');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className={'space-y-10 pb-10'}>
        <Billboard data={billboard} />

        <div className={'flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'}>
          <ProductList title={'Featured Product'} items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
