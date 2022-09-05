import React from "react";
import {
  Layout,
  Avatar,
  Link,
  Paragraph,
  Container,
  Card,
  CardAction,
} from "../components";
import spacing from "../const/spacing";

const WithoutUsersOnRange = () => {
  return (
    <Container
      style={{ minHeight: "500px" }}
      justifyContent="center"
      alignItens="center"
    >
      <Avatar
        alt="Foto de perfil"
        img="https://spinoff.com.br/entrete/wp-content/uploads/2021/10/Bruna-Marquezine-nova-fotos.jpg"
        size="small"
      />
      <Container textAlign="center">
        <Paragraph style={{ margin: spacing.large }}>
          No momento não há pessoas <br />
          por perto...
        </Paragraph>
        <Link to={"/config"} variant="secondary">
          ir para as configurações
        </Link>
      </Container>
    </Container>
  );
};

export default function IndexPage() {
  const users = [
    {
      name: "Luva de Pedreiro",
      age: 20,
      description: "O melhor de todos. Receba !!!!",
      picture:
        "https://conteudo.imguol.com.br/c/esporte/cc/2022/04/07/iran-ferreira-o-cara-da-luva-de-pedreiro-em-quijingue-na-bahia-1649366672373_v2_1x1.jpg",
    },
  ];
  return (
    <Layout>
      {users.length > 0 ? (
        <>
          <Card profile={users[0]} />
          <CardAction />
        </>
      ) : (
        <WithoutUsersOnRange />
      )}
    </Layout>
  );
}
