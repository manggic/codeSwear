import React from 'react'
import { useRouter } from "next/router";

const Mugs = () => {

  const router = useRouter();

  const handleTshirt = (e) => {
    e.preventDefault();
    router.push("/product/wear-the-code");
  };
  return (
    <div>  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {[...Array(16).keys()].map((item) => {
          return (
            <div
              key={item}
              style={{ cursor: "pointer" }}
              onClick={handleTshirt}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh]"
                  src="https://m.media-amazon.com/images/I/41UFaecbUWL._SX679_.jpg"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  MUGS
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section></div>
  )
}

export default Mugs