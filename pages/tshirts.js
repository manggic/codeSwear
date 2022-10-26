import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const Tshirts = ({ data }) => {
  const router = useRouter();

  const handleTshirt = (e, slug) => {
    e.preventDefault();
    router.push(`/product/${slug}`);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((item) => {
              return (
                <div
                  key={item}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleTshirt(e, item.slug)}
                  className="shadow-lg mx-4 my-4 p-4 w-64"
                >
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto h-[30vh]"
                      src={item.img}
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      TSHIRT
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.desc}
                    </h2>
                    <p className="mt-1">Rs {item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http:localhost:3000/api/getproducts");
  data = await data.json();

  return {
    props: { data: data.data }, // will be passed to the page component as props
  };
}

export default Tshirts;
