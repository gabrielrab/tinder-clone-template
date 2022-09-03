import React from "react";
import { Layout, Container, Avatar, Paragraph, Link } from "../components";
import spacing from "../const/spacing";

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <Avatar
          img="https://spinoff.com.br/entrete/wp-content/uploads/2021/10/Bruna-Marquezine-nova-fotos.jpg"
          size="small"
        />
        <Paragraph
          style={{
            margin: spacing.medium,
          }}
        >
          No momento não há pessoas por perto
        </Paragraph>
        <Link to="/config" variant="secondary">
          ir para as configurações
        </Link>
      </Container>
    </Layout>
  );
}
