import React from "react";
import { Input, Layout, Title, Textarea, Select, Button } from "../components";

export default function SignUpPage() {
  return (
    <Layout>
      <Title text="Seja bem vindo(a), " size="medium" />
      <Title text="crie agora sua conta" size="small" />
      <Input label="Nome" type="text" name="name" />
      <Input label="Email" type="email" name="email" />
      <Input label="Senha" type="password" name="password" />
      <Input label="Data de nascimento" type="date" name="birth_date" />
      <Input label="Instagram" type="text" name="instagram" />
      <Textarea label="Sobre você" rows="6" name="about" />
      <Select
        label="Preferência"
        name="sex_preference"
        options={[
          { label: "Mulheres", value: "FEMALE" },
          { label: "Homens", value: "MALE" },
          { label: "Outros", value: "ALL" },
        ]}
      />
      <Button text="Criar conta" onClick={() => alert("Teste")} />
    </Layout>
  );
}
