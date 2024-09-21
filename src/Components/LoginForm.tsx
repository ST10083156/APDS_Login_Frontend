import React, { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`User Email: ${formData.email} succesffully logged in`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
      ></input>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        required
      ></input>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
