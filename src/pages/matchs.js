import React, { useState } from "react";
import { Layout, Card } from "../components";

export default function MatchPage() {
  const [index, setIndex] = useState(0);

  const Tabs = () => {
    const handleTab = (tab) => {
      setIndex(tab);
    };
    return (
      <div className="tab-switcher">
        <a
          href="#top"
          className={`${index === 0 ? "tab-active" : ""}`}
          onClick={() => handleTab(0)}
        >
          Suas curtidas
        </a>
        <a
          href="#top"
          className={`${index === 1 ? "tab-active" : ""}`}
          onClick={() => handleTab(1)}
        >
          Seus matchs
        </a>
      </div>
    );
  };

  const likes = [];
  const matches = [];

  const TabPanel = ({ children, index: selfIndex }) => {
    return selfIndex === index ? (
      <div className="tab-content">{children}</div>
    ) : (
      <></>
    );
  };

  return (
    <Layout>
      <Tabs />
      <TabPanel index={0}>
        <ul>
          {likes.map((record, key) => (
            <Card profile={record} key={key} variant="small" />
          ))}
        </ul>
      </TabPanel>
      <TabPanel index={1}>
        <ul>
          {matches.map((record, key) => (
            <Card profile={record} key={key} variant="small" />
          ))}
        </ul>
      </TabPanel>
    </Layout>
  );
}
