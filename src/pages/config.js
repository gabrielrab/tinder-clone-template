import React from "react";
import {
  Layout,
  Avatar,
  Divider,
  Button,
  Title,
  Paragraph,
  Range,
} from "../components";
import spacing from "../const/spacing";

export default function ConfigPage() {
  return (
    <Layout>
      <Avatar
        alt="Foto de perfil"
        img="https://spinoff.com.br/entrete/wp-content/uploads/2021/10/Bruna-Marquezine-nova-fotos.jpg"
        size="small"
      />
      <Title
        text="Bruna Marquezine"
        size="large"
        style={{ margin: `${spacing.medium}` }}
      />
      <Divider />
      <div div style={{ width: "100%" }}>
        <Title
          text="Sobre"
          size="medium"
          style={{ margin: `${spacing.medium} 0px` }}
        />
        <Paragraph>
          Simplesmente, ex do cara que vai trazer o hexa para o Brasil. Nas
          horas vagas sou atriz.
        </Paragraph>
        <Title
          text="Idade"
          size="medium"
          style={{ margin: `${spacing.medium} 0px` }}
        />
        <Paragraph>25 anos</Paragraph>
        <Title
          text="Instagram"
          size="medium"
          style={{ margin: `${spacing.medium} 0px` }}
        />
        <Paragraph>@bruna_marquezine</Paragraph>
      </div>
      <Divider />
      <Title text="Buscar pessoas até" />
      {/* <Range /> */}
      <Button text="Editar perfil" />
    </Layout>
  );
}
