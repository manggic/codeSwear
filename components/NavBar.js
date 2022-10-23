import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
const NavBar = () => {
  const ref = useRef();
  const handleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-4 bg-slate-50">
      <Link href="/">
        <a>
          <div
            className="logo mx-4"
            style={{ color: "blue", fontWeight: "bold" }}
          >
            CodeSwear.com
          </div>
        </a>
      </Link>
      <div className="nav">
        <ul className="flex space-x-3 font-bold text-md">
          <Link href="/tshirts">
            <a>
              {" "}
              <li>Tshirt</li>
            </a>
          </Link>
          <Link href="/hoodies">
            <a>
              {" "}
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href="/stickers">
            <a>
              {" "}
              <li>Stickers</li>
            </a>
          </Link>
          <Link href="/mugs">
            <a>
              {" "}
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>

      <div
        className="cart absolute mx-10 right-5 text-2xl cursor-pointer"
        onClick={handleCart}
      >
        <AiOutlineShoppingCart />
      </div>

      <div
        ref={ref}
        className={`absolute top-0 right-0 px-5 py-4 w-80 h-full  z-[100] bg-indigo-100 translate-x-full transform transition-transform `}
      >
        <h1 className="text-center text-xl text-indigo-700 font-bold  ">Cart</h1>
        <span
          className="top-2 right-4  text-xl absolute cursor-pointer"
          onClick={() => handleCart()}
        >
          <GrFormClose />
        </span>
        {[...Array(4).keys()].map((item) => {
          return (
            <div className="flex py-2" key={item}>
              <img
                className="h-20"
                src="https://m.media-amazon.com/images/I/61r0PYFOONL._UX679_.jpg"
              />
              <div className="text-base ml-4">
                <p>kervin brand </p>
                <p className="flex justify-center items-center">
                  {" "}
                  <div className="mr-2">Quantity</div>{" "}
                  <AiOutlineMinusCircle className="cursor-pointer" />{" "}
                  <div className="mx-2">{2}</div>{" "}
                  <AiOutlinePlusCircle className="cursor-pointer" />
                </p>
              </div>
            </div>
          );
        })}

        <div className="flex mt-2">
          <button className="pt-2 mr-2   text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded">
            Checkout
          </button>
          <button className="pt-2 mr-2   text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded">
            Clear Cart
          </button>
        </div>
      </div>
      {/* <div className='absolute right-2'>
        <button>logIn</button>
      </div> */}

      <style jsx global>
        {`
          // .showCart {
          //   visibility: visible;
          // }
          // .hideCart {
          //   visibility: hidden;
          // }
        `}
      </style>
    </div>
  );
};

export default NavBar;
