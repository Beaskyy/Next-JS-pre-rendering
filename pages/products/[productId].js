import { useRouter } from "next/router";
import React from "react";

const productId = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
    </>
  );
};

export default productId;

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(`Regenerating product ${params.productId}`)
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
    revalidate: 10
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
    fallback: true,
  };
};
