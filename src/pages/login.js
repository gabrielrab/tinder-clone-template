import React from "react";
import { Layout, Title, Input, Button, Link } from "../components";

export default function LoginPage() {
  return (
    <Layout>
      <Title text="Realize o login" size="medium" />
      <Title text="ou crie uma nova conta" size="small" />
      <Input label="Email" type="email" name="email" />
      <Input label="Senha" type="password" name="password" />
      <Button text="Entrar" />
      <Link to="/signup" variant="secondary">
        criar uma nova conta
      </Link>
    </Layout>
  );
}
