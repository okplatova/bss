import Head from "next/head";
import { Product } from "@/components/views/Product";
import {
  GetServerSideProps,
  GetStaticPaths,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import he from "he";
import { useRouter } from "next/router";
export const getStaticPaths = (async () => {
  const res = await fetch("https://dev9.paradigma-digital.ru/equipment/");
  const data = await res.json();
  console.log("data", data);
  //@ts-ignore
  let total = [];
  //@ts-ignore
  let item = [];
  const product = Object.values(data).map((product: any) => {
    const filteredProduct =
      product.CHILD &&
      Object.values(product.CHILD).forEach((child) => {
        //@ts-ignore
        if (!child.ITM) {
          return;
        }
        //@ts-ignore
        if (child.ITM === Array) {
          //@ts-ignore
          total = [...total, ...child.ITM];
          //@ts-ignore
        } else {
          //@ts-ignore
          total = [...total, ...Object.values(child.ITM)];
        }
      });

    //@ts-ignore
    console.log("total", total);
    console.log("filteredProduct", filteredProduct);
    //@ts-ignore
    const filter = total.filter((obj2: any) => {
      return (
        //@ts-ignore
        obj2.CONTENT["Заголовок"].split(" ").join("-").toLowerCase()
      );
    });
    // console.log("filter", filter);

    if (filter.length !== 0) {
      item.push(filter[0]);
    }
    //@ts-ignore
    return item[0];
  });
  //@ts-ignore
  console.log("product", product);
  //@ts-ignore
  console.log("item", item);
  //@ts-ignore
  const uniqueArray = total.filter(
    (obj, index, self) =>
      index ===
      self.findIndex((o) => o.CONTENT["Заголовок"] === obj.CONTENT["Заголовок"])
  );
  console.log("uniqueArray", uniqueArray);

  //@ts-ignore
  const paths = uniqueArray.map((item: any) => ({
    params: {
      slug: item.CONTENT["Заголовок"].split(" ").join("-").toLowerCase(),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const res = await fetch("https://dev9.paradigma-digital.ru/equipment/");
  const data = await res.json();

  const product = Object.values(data).map((product: any) => {
    //@ts-ignore
    let item = [];
    const filteredProduct =
      product.CHILD &&
      Object.values(product.CHILD).map((child) => {
        //@ts-ignore
        if (!child.ITM) {
          return [];
        }
        //@ts-ignore
        if (child.ITM === Array) {
          //@ts-ignore
          return child.ITM;
          //@ts-ignore
        } else {
          //@ts-ignore
          return Object.values(child.ITM);
        }
      });

    filteredProduct?.forEach((obj: any) => {
      const filter = obj.filter((obj2: any) => {
        return (
          //@ts-ignore
          obj2.CONTENT["Заголовок"].split(" ").join("-").toLowerCase() ===
          context.params?.slug
        );
      });

      if (filter.length !== 0) {
        item.push(filter[0]);
      }
    });
    //@ts-ignore
    return item[0];
  });

  const result = product.filter((item) => {
    return item !== undefined;
  });
  console.log("result", result);

  if (!result || result.length === 0) {
    return {
      notFound: true,
    };
  }
  console.log("result", result);

  //@ts-ignore
  return { props: { result } };
}) satisfies GetServerSideProps<{
  result: any;
}>;

// export const getServerSideProps = (async (context) => {
//   const res = await fetch("https://dev9.paradigma-digital.ru/equipment/");
//   const data = await res.json();

//   const product = Object.values(data).map((product: any) => {
//     //@ts-ignore
//     let item = [];
//     const filteredProduct =
//       product.CHILD &&
//       Object.values(product.CHILD).map((child) => {
//         //@ts-ignore
//         if (!child.ITM) {
//           return [];
//         }
//         //@ts-ignore
//         if (child.ITM === Array) {
//           //@ts-ignore
//           return child.ITM;
//           //@ts-ignore
//         } else {
//           //@ts-ignore
//           return Object.values(child.ITM);
//         }
//       });

//     filteredProduct?.forEach((obj: any) => {
//       const filter = obj.filter((obj2: any) => {
//         return (
//           //@ts-ignore
//           obj2.CONTENT["Заголовок"].split(" ").join("-").toLowerCase() ===
//           context.params?.slug
//         );
//       });

//       if (filter.length !== 0) {
//         item.push(filter[0]);
//       }
//     });
//     //@ts-ignore
//     return item[0];
//   });

//   const result = product.filter((item) => {
//     return item !== undefined;
//   });

//   if (!result || result.length === 0) {
//     return {
//       notFound: true,
//     };
//   }
//   //@ts-ignore
//   return { props: { result } };
// }) satisfies GetServerSideProps<{
//   result: any;
// }>;

const ProductPage = ({
  result,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>
          Big Screen Show - {result && result[0].CONTENT["Заголовок"]}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Product product={result[0]} />
    </>
  );
};

export default ProductPage;
