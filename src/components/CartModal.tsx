import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const CartModal = ({ closeCart }: { closeCart: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-end z-10" >
      <div className="fixed inset-0 bg-black opacity-50 z-0" onClick={closeCart}></div>
      <div className="relative bg-black p-8 z-10 min-h-screen w-[390px]">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">My Cart</h2>
          <button className="mt-4px-3 py-1" onClick={closeCart}>
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <XMarkIcon
                className={clsx(
                  "h-6 transition-all ease-in-out hover:scale-110 "
                )}
              />
            </div>
          </button>
        </div>
        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
          <ShoppingCartIcon className="h-16" />
          <p className="mt-6 text-center text-2xl font-bold">
            Your cart is empty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
