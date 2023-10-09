import React from "react";
import Friends from "../../component/Friends/Friends";
import Feed from "../../component/Feed/Feed";
import { Helmet } from "react-helmet";
import Icons from "../../component/Icons/Icons";

const Home = () => {
  return (
    <div className="md:flex pt-5 gap-10">
      <Helmet>
        <title>Facebook</title>
      </Helmet>
      <Icons></Icons>
      <Feed></Feed>
      <Friends></Friends>
    </div>
  );
};

export default Home;
