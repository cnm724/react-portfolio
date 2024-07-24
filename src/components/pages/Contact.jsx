import { useState } from 'react';
import "./pages.css";

import { validateEmail } from '../../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('please finish filling out the form!');
      return;
    }
    alert(`Thank you for the message ${name}!`)

    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Contact Me</h1>
      <div>
        <form className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "500px",
            width: "100%",
            margin: "0 auto"
          }} 
          onSubmit={handleFormSubmit}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            className="input form-control"
          />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            className="input form-control"
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            className="input form-control"
          />
          <button className="submit" type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text alert alert-danger" role="alert">{errorMessage}</p>
          </div>
        )}

      </div>
    </>
  );
}

export default Form;
