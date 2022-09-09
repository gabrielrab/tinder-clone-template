import React, { useState, useEffect } from "react";
import { Layout, Navbar, Card } from "../components";
import api from "../services/api";

export default function MatchPage() {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [likes, setLikes] = useState([]);

  // useEffect(() => {
  //   async function getInteractions() {
  //     const [likesRequest, matchesRequest] = await Promise.all([
  //       api.get("/interactions/liked"),
  //       api.get("/interactions/matches"),
  //     ]);

  //     if (matchesRequest.status === 200) {
  //       setMatches(matchesRequest.data.data);
  //     }

  //     if (likesRequest.status === 200) {
  //       setLikes(likesRequest.data.data);
  //     }
  //   }
  //   getInteractions();
  // }, [setMatches, setLikes]);

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
