import { ReactElement, useContext, useState } from 'react';
import { ILiteryWork } from '../../../core/models/literywork.model';
import './style.css';
import { ImageLiteryWork } from '../../elements/Image';
import { ButtonLiterywork } from '../../elements/Buttons';
import { useShoppingCart } from '../../../core/hooks/useShoppingCart';
import Modal from '../Modal';
import { AppContext } from '../../../core/states/Appcontext';
import { useNavigate } from 'react-router-dom';

export const CardLiteryWork = ({ title, url, incrasePrice, id }: ILiteryWork): ReactElement => {
  const { addToCart } = useShoppingCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { state } = useContext(AppContext);
  const navigate = useNavigate();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddToCart = () => {
    console.log(state.isUserLogged)
    if (!state.isUserLogged) {
      navigate('/auth');
    }
    addToCart(id!, quantity);
    closeModal();
  };
  const roundToThreeDecimals = (value: number): number => {
    return Number(parseFloat(value.toFixed(3)));
  };

  return (
    <article className="literywork__detail">
      <div className="literywork__card">
        <div className="literywork__card2">
          <ImageLiteryWork url={url} title={title} />
          <footer className="literywork__header">
            <h2 className="literywork-card__price">{"$ " + roundToThreeDecimals(incrasePrice!)}</h2>
            <ButtonLiterywork title="Agregar" onClick={openModal} />
          </footer>
        </div>
      </div>
      <Modal isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleAddToCart}
        onCancel={closeModal}
        confirmText="Agregar al carrito"
        cancelText="Cancelar">
        <div>
          <h2>Cantidad de libros a agregar</h2>
          <input className="modal__input"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
      </Modal>
    </article>
  );
};