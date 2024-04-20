import { FormEvent, ReactElement, useState } from 'react';
import './style.css';
import FormRegister from '../ControlForm';
import { ILiteryWork } from '../../../core/models/literywork.model';

interface ILiteryWorkFormProps {
  createBook: (book: ILiteryWork) => Promise<void>;
  error?: string;
}

const LiteryWorkForm = ({ createBook, error }: ILiteryWorkFormProps): ReactElement => {
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
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
    console.log('Valores enviados:', event.currentTarget);
    console.log(literyWorkType)
    console.log(price)

    const errors: { [key: string]: string } = {};
    if (!title) {
      errors.title = 'El título es obligatorio';
    }
    if (!url) {
      errors.url = 'La URL es obligatoria';
    }
    if (!price) {
      errors.price = 'El precio es obligatorio';
    }
    if (!literyWorkType) {
      console.log(errors)
      errors.literyWorkType = 'El tipo de material literario es obligatorio';
    }
    if (Object.keys(errors).length === 0) {
      createBook({ title, url, price, literyWorkType });
      setValidationErrors({});
    } else {
      setValidationErrors(errors);
    }
  };


  return (
    <section>
      <FormRegister
        title="Create Book"
        onSubmit={handleSubmit}
        inputs={literyInputs}
        validationErrors={validationErrors}
      />
      {error && <p>{error}</p>}
    </section>
  );
};

export default LiteryWorkForm;