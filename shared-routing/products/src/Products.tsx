import { A } from '@solidjs/router';

function Products() {
  return (
    <>
      <section class="border flex flex-col rounded p-4">
        <A
          href="/1"
          class="my-2 border rounded border-grey-100 cursor-pointer p-2 active:bg-blue-800"
        >
          Product 1
        </A>
        <A
          href="/2"
          class="my-2 border rounded border-grey-100 cursor-pointer p-2 active:bg-blue-800"
        >
          Product 2
        </A>
        <A
          href="/3"
          class="my-2 border rounded border-grey-100 cursor-pointer p-2 active:bg-blue-800"
        >
          Product 3
        </A>
      </section>
    </>
  );
}

export default Products;
