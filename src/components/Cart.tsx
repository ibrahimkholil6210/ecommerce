"use client";

import { useState } from "react";
import OpenCart from "./OpenCart";
import CartModal from "./CartModal";

const Cart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleCart = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <button aria-label="Open cart" onClick={toggleCart}>
        <OpenCart quantity={3} />
      </button>
      {modalOpen && <CartModal closeCart={() => setModalOpen(false)} />}
    </>
  );
};

export default Cart;
