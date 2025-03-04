import { useState } from "react";
import "./Register.css";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos registrados:", formData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Registro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Correo" onChange={handleChange} required /><br />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required /><br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
