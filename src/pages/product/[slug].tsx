import Head from "next/head";
import { Product } from "@/components/views/Product";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import he from "he";
import { useRouter } from "next/router";
// export const getStaticPaths = (async () => {
//   const res = await fetch("https://adm.bss-tv.com/equipment/");
//   const data = await res.json();
//   //@ts-ignore
//   let total = [];
//   Object.values(data).forEach((product: any) => {
//     product.CHILD &&
//       Object.values(product.CHILD).forEach((child) => {
//         //@ts-ignore
//         // if (child.CHILD) {
//         //   //@ts-ignore
//         //   Object.values(child.CHILD).forEach((item) => {
//         //     //@ts-ignore
//         //     total = [...total, ...Object.values(item.ITM)];
//         //   });
//         // }
//         //@ts-ignore
//         if (!child.ITM) {
//           return;
//         }
//         //@ts-ignore
//         if (child.ITM === Array) {
//           //@ts-ignore
//           total = [...total, ...child.ITM];
//           //@ts-ignore
//         } else {
//           //@ts-ignore
//           total = [...total, ...Object.values(child.ITM)];
//         }
//       });

//     //@ts-ignore
//     const filter = total.filter((obj2: any) => {
//       return (
//         //@ts-ignore
//         obj2.CONTENT["Заголовок"].split(" ").join("-").toLowerCase()
//       );
//     });
//   });
//   //@ts-ignore
//   const uniqueArray = total.filter(
//     (obj, index, self) =>
//       index ===
//       self.findIndex((o) => o.CONTENT["Заголовок"] === obj.CONTENT["Заголовок"])
//   );

//   //@ts-ignore
//   const paths = uniqueArray.map((item: any) => ({
//     params: {
//       slug: item.CONTENT["Заголовок"].split(" ").join("-").toLowerCase(),
//     },
//   }));
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }) satisfies GetStaticPaths;

// export const getStaticProps = (async (context) => {
//   const res = await fetch("https://adm.bss-tv.com/equipment/");
//   const data = await res.json();

//   //@ts-ignore
//   let total = [];
//   //@ts-ignore
//   let item = [];

//   Object.values(data).forEach((product: any) => {
//     //@ts-ignore
//     product.CHILD &&
//       Object.values(product.CHILD).forEach((child) => {
//         //@ts-ignore
//         // if (child.CHILD) {
//         //   //@ts-ignore
//         //   Object.values(child.CHILD).filter((item) => {
//         //     //@ts-ignore
//         //     total = [...total, ...Object.values(item.ITM)];
//         //   });
//         // }
//         //@ts-ignore
//         if (!child.ITM) {
//           return;
//         }
//         //@ts-ignore
//         if (child.ITM === Array) {
//           //@ts-ignore
//           total = [...total, ...child.ITM];
//           //@ts-ignore
//         } else {
//           //@ts-ignore
//           total = [...total, ...Object.values(child.ITM)];
//         }
//       });
//     //@ts-ignore
//     const uniqueArray = total.filter(
//       (obj, index, self) =>
//         index ===
//         self.findIndex(
//           (o) => o.CONTENT["Заголовок"] === obj.CONTENT["Заголовок"]
//         )
//     );
//     //@ts-ignore
//     const filter = uniqueArray.filter((itm) => {
//       return (
//         itm.CONTENT["Заголовок"].split(" ").join("-").toLowerCase() ===
//         //@ts-ignore
//         context.params.slug.split(" ").join("-").toLowerCase()
//       );
//     });

//     if (filter.length !== 0) {
//       item.push(filter[0]);
//     }
//   });

//   //@ts-ignore
//   if (!item || item.length === 0) {
//     console.log("empty");
//     return {
//       notFound: true,
//     };
//   }

//   //@ts-ignore
//   return { props: { item }, revalidate: 60 };
// }) satisfies GetStaticProps<{
//   item: any;
// }>;

export const getServerSideProps = (async (context) => {
  const res = await fetch("https://adm.bss-tv.com/equipment/");
  const data = await res.json();

  //@ts-ignore
  let total = [];
  //@ts-ignore
  let item = [];

  Object.values(data.ROOT.CHILD).forEach((product: any) => {
    //@ts-ignore
    product.CHILD &&
      Object.values(product.CHILD).forEach((child) => {
        //@ts-ignore
        // if (child.CHILD) {
        //   //@ts-ignore
        //   Object.values(child.CHILD).filter((item) => {
        //     //@ts-ignore
        //     total = [...total, ...Object.values(item.ITM)];
        //   });
        // }
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
    const uniqueArray = total.filter(
      (obj, index, self) =>
        index ===
        self.findIndex(
          (o) => o.CONTENT["Заголовок"] === obj.CONTENT["Заголовок"]
        )
    );
    //@ts-ignore
    const filter = uniqueArray.filter((itm) => {
      return (
        itm.CONTENT["Заголовок"].split(" ").join("-").toLowerCase() ===
        //@ts-ignore
        context.params.slug.split(" ").join("-").toLowerCase()
      );
    });

    if (filter.length !== 0) {
      item.push(filter[0]);
    }
  });

  //@ts-ignore
  if (!item || item.length === 0) {
    return {
      notFound: true,
    };
  }

  //@ts-ignore
  return { props: { item } };
}) satisfies GetServerSideProps<{
  item: any;
}>;

const ProductPage = ({
  item,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const ProductPage = ({
  //   item,
  // }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Big Screen Show - {item && item[0].CONTENT["Заголовок"]}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Product product={item[0]} />
    </>
  );
};

export default ProductPage;
