import React from "react";
import { Layout, Title, Input, Button, Link } from "../components";

export default function LoginPage() {
  return (
    <Layout>
      <Title text="Faça o login" size="large" />
      <Title text="ou crie sua conta" size="medium" />

      <Input type="email" label="Email" />
      <Input type="password" label="Senha" />

      <Button text="Fazer login" />
      <Link to="/signup" variant="secondary">
        ou crie sua conta
      </Link>
    </Layout>
  );
}
