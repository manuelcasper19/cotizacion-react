import  { ReactElement, useState } from 'react';
import { ILiteryWork } from '../../../core/models/literywork.model';
import './style.css';
import { ImageLiteryWork } from '../../elements/Image';
import { ButtonLiterywork } from '../../elements/Buttons';
import { useShoppingCart } from '../../../core/hooks/useShoppingCart';
// import ModalLiteryWork from '../Modal';
import Modal from '../Modal2';



export const CardLiteryWork = ({ title, url, incrasePrice, id }: ILiteryWork): ReactElement => {
  const { addToCart } = useShoppingCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddToCart = () => {
    addToCart(id, quantity);
    closeModal();
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
      <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleAddToCart} onCancel={closeModal} confirmText="Agregar al carrito" cancelText="Cancelar">
        <div>
          <h2>Cantidad de libros a agregar</h2>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
      </Modal>
    </article>
  );
};