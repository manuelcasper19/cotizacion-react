import  { ReactElement, useState } from 'react';
import { ILiteryWork } from '../../../core/models/literywork.model';
import './style.css';
import { ImageLiteryWork } from '../../elements/Image';
import { ButtonLiterywork } from '../../elements/Buttons';
import { useShoppingCart } from '../../../core/hooks/useShoppingCart';
import ModalLiteryWork from '../Modal';



export const CardLiteryWork = ( { title, url, incrasePrice, id} : ILiteryWork) : ReactElement => {
  const { addToCart } = useShoppingCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleAddToCart = (bookId, quantity) => {
    addToCart(bookId, quantity);
    
  };

  return (
    <article className="literywork__detail">
      <div className="literywork__card">
        <div className="literywork__card2">
          <ImageLiteryWork url={url} title={title} />
          <footer className="literywork__header">
            <h2 className="literywork-card__price">{"$ " + incrasePrice}</h2>
            <ButtonLiterywork title="Add" onClick={openModal} />
          </footer>
        </div>
      </div>
      <ModalLiteryWork
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddToCart={handleAddToCart}
        bookId={id}
      />
    </article>
  );
};
