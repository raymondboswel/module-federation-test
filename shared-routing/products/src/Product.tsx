import { useParams } from '@solidjs/router';

function Product() {
  const params = useParams();
  return (
    <>
      <section class="border flex flex-col rounded p-4">{params.id}</section>
    </>
  );
}

export default Product;
