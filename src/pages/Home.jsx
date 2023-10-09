import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Requests from "../Config/Requests";
const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Up Comming" fetchURL={Requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={Requests.requestPopular} />
      <Row rowID="3" title="Horror" fetchURL={Requests.requestHorror} />
      <Row rowID="4" title="Top Rated" fetchURL={Requests.requestTopRated} />
      <Row rowID="5" title="Trending" fetchURL={Requests.requestTrending} />
    </>
  );
};

export default Home;
