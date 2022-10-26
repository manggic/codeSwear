import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
const NavBar = ({ addToCart, removeFromCart, total, clearCart, cart, buyNowProduct }) => {
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
    <div className="flex sticky top-0 z-[10] flex-col md:flex-row md:justify-start justify-center items-center py-4 bg-slate-50">
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
        <ul className="flex space-x-3 font-bold text-md ">
          <Link href="/tshirts">
            <a>
              {" "}
              <li className="hover:text-indigo-500">Tshirt</li>
            </a>
          </Link>
          <Link href="/hoodies">
            <a>
              {" "}
              <li className="hover:text-indigo-500">Hoodies</li>
            </a>
          </Link>
          <Link href="/stickers">
            <a>
              {" "}
              <li className="hover:text-indigo-500">Stickers</li>
            </a>
          </Link>
          <Link href="/mugs">
            <a>
              {" "}
              <li className="hover:text-indigo-500">Mugs</li>
            </a>
          </Link>
        </ul>
      </div>

      <div className="cart absolute mr-3 right-2 text-2xl cursor-pointer flex">
        <Link href="/login">
          <MdAccountCircle className="mr-4 cursor-pointer" />
        </Link>
        <AiOutlineShoppingCart onClick={handleCart} />
      </div>

      <div
        ref={ref}
        className={`absolute top-0 right-0 px-5 py-4 w-80 h-[100vh]  z-[100] bg-indigo-100 translate-x-full transform transition-transform `}
      >
        <h1 className="text-center text-xl text-indigo-700 font-bold  ">
          Cart
        </h1>
        <span
          className="top-2 right-4 text-xl absolute cursor-pointer"
          onClick={() => handleCart()}
        >
          <GrFormClose />
        </span>
        {Object.keys(cart)?.length
          ? Object.keys(cart).map((item) => {
              return (
                <div className="flex py-2" key={item}>
                  <img className="h-20" src={cart[item].image} />
                  <div className="text-base ml-4">
                    <p>{cart[item].name} </p>
                    <p className="flex justify-center items-center">
                      {" "}
                      <div className="mr-2">Quantity</div>{" "}
                      <AiOutlineMinusCircle
                        onClick={() =>
                          removeFromCart({ qty: 1, itemCode: item })
                        }
                        className="cursor-pointer"
                      />{" "}
                      <div className="mx-2">{cart[item].qty}</div>{" "}
                      <AiOutlinePlusCircle
                        onClick={() =>
                          addToCart({
                            qty: 1,
                            itemCode: item,
                            name: "tea-Shirt",
                            variant: "pink",
                            size: "L",
                          })
                        }
                        className="cursor-pointer"
                      />
                    </p>
                  </div>
                </div>
              );
            })
          : ""}

        {Object.keys(cart)?.length ? (
          <div className="mt-2">
            <div className="flex">
              <Link  href={"/checkout"}>
                <a onClick={()=>  buyNowProduct(0)} >
                  <button className="pt-2 mr-2   text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded">
                    Checkout
                  </button>
                </a>
              </Link>

              <button
                onClick={clearCart}
                className="pt-2 mr-2   text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded"
              >
                Clear Cart
              </button>
            </div>

            <div className="mt-4 font-bold text-xl">Total Price : {total}</div>
          </div>
        ) : (
          <div className="text-center pt-12">Ohh no! Cart is empty</div>
        )}
      </div>
      {/* <div className='absolute right-2'>
        <button>logIn</button>
      </div> */}
    </div>
  );
};

export default NavBar;
