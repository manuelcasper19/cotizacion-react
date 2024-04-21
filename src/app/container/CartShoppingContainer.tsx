import  { ReactElement, useState } from 'react'
import { useShoppingCart } from '../core/hooks/useShoppingCart';
import { Header } from '../ui/components/Header';
import ModalLiteryWork from '../ui/components/Modal';
import ShoppingCart from '../ui/components/ShoppingCart';

export  const CartShoppingContainer = (): ReactElement => {
    const { addToCart, getTotalItems } = useShoppingCart();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedBookId, setSelectedBookId] = useState<number | null>(null);

    const handleAddToCart = (bookId: number) => {
        setSelectedBookId(bookId);
        setShowModal(true);
      };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBookId(null);
    };
    

    return (
        <div>
          <Header />
          {/* <BookLis onAddToCart={handleAddToCart} /> */}
          <ModalLiteryWork
            isOpen={showModal}
            onClose={handleCloseModal}
            onAddToCart={addToCart}
            bookId={selectedBookId ?? 0}
          />
          <ShoppingCart />
        </div>
      );
    };
}
