import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { loading } = useContext(GithubContext);
  if (loading) {
    return (
      <main>
        <Navbar></Navbar>
        <Search></Search>
        <img
          className="loading-img"
          src={loadingImage}
          alt="loadingImage"
        ></img>
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
      <Repos></Repos>
    </main>
  );
};

export default Dashboard;
