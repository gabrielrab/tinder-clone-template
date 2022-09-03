import React from "react";
import { Layout, Title, Input, Textarea, Button, Link } from "../components";

export default function SignupPage() {
  return (
    <Layout>
      <Title text="Seja bem vindo(a)" size="large" />
      <Title text="ou crie sua conta" size="medium" />

      <Input label="Nome" type="text" />
      <Input label="Email" type="email" />
      <Input label="Data de nascimento" type="date" />
      <Input label="Instagram" type="text" />

      <Textarea label="Sobre você" />
      <Button text="Criar conta" />
      <Link to="/login" variant="secondary">
        ou faça seu login
      </Link>
    </Layout>
  );
}
