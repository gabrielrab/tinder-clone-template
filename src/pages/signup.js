import React from "react";
import {
  Layout,
  Title,
  Input,
  Button,
  Textarea,
  Link,
  Select,
} from "../components";

export default function Signup() {
  return (
    <Layout>
      <Title text="Seja bem vindo(a)" size="large" />
      <Title text="ou crie sua conta " size="medium" />

      <Input type="text" label="Nome" />
      <Input type="email" label="Email" />
      <Input type="date" label="Data de nascimento" />
      <Input type="text" label="Instagram" />

      <Select
        label="Preferência"
        options={[
          {
            label: "Homem",
            value: "MALE",
          },
          {
            label: "Mulher",
            value: "FEMALE",
          },
          {
            label: "Todos",
            value: "ALL",
          },
        ]}
      />

      <Textarea label="Sobre você" />

      <Button text="Criar conta" />
      <Link to="/login" variant="secondary">
        ou faça o login
      </Link>
    </Layout>
  );
}
