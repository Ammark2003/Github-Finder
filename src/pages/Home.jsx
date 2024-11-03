import React from "react";
import UserResults from "../components/users/UserResults";
import { useEffect } from "react";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
