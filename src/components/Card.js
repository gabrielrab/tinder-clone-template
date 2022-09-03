import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import spacing from "../const/spacing";

export default function Card({ profile }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url("${profile.picture}")`,
      }}
    >
      <div className="card-content">
        <Title
          text={`${profile.name}, ${profile.age}`}
          size="large"
          color="secondary"
        />
        <Paragraph style={{ marginTop: spacing.small, color: "white" }}>
          {profile.description}
        </Paragraph>
        <Paragraph style={{ marginTop: spacing.small, color: "white" }}>
          25km de distancia
        </Paragraph>
      </div>
    </div>
  );
}
