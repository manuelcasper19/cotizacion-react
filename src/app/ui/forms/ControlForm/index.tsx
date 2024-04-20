import Input from '../ControlInpunt';



const FormRegister = ({ title, onSubmit, inputs }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="chk" aria-hidden="true">{title}</label>
      {inputs.map((input, index) => (
        <Input
          key={index}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
        />
      ))}
      <button type="submit">{title}</button>
    </form>
  );
};

export default FormRegister;