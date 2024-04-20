import { FormEvent, ReactElement } from 'react';
import './style.css';
import { useCreateBook } from '../../../core/hooks/useLiteryWork';
import FormRegister from '../ControlForm';



const LiteryWorkForm = (): ReactElement => {
  const { createBook, error } = useCreateBook();
  const literyInputs = [
    { type: 'text', name: 'title', placeholder: 'Titulo' },
    { type: 'text', name: 'url', placeholder: 'URL' },
    { type: 'number', name: 'price', placeholder: 'Precio' },
    { type: 'number', name: 'literyWorkType', placeholder: 'Tipo de material literario' },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const url = formData.get('url') as string;
    const price = Number(formData.get('price'));
    const literyWorkType = Number(formData.get('literyWorkType'));
    createBook({ title, url, price, literyWorkType });
  };

  return (
    <section>
      <FormRegister
        title="Create Book"
        onSubmit={handleSubmit}
        inputs={literyInputs}
      />
      {error && <p>{error}</p>}
    </section>
  );
};

export default LiteryWorkForm;