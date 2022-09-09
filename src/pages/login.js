import React from "react";
import { Layout, Title, Input, Button, Link } from "../components";
import useForm from "../hooks/useForm";
import api from "../services/api";

export default function LoginPage() {
  const [{ values }, handleChange, handleSubmit] = useForm();

  const handleLogin = async () => {
    const { data: request } = await api.post("/login", {
      email: values.email,
      password: values.password,
    });

    window.localStorage.setItem(request.data.token);
  };

  return (
    <Layout>
      <Title text="Realize o login" size="medium" />
      <Title text="ou crie uma nova conta" size="small" />
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          label="Email"
          type="email"
          name="teste"
          required
          onChange={handleChange}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <Button text="Entrar" type="submit" />
      </form>

      <Link to="/signup" variant="secondary">
        criar uma nova conta
      </Link>
    </Layout>
  );
}
