import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GithubData() {
  const userData = useLoaderData();

  //   const [userData, setUserData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/poshak-kumar")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setUserData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-6 bg-gray-500 text-white p-6 text-6xl">
      Github ID: {userData.id}
      <img
        src={userData.avatar_url}
        alt="GitHub Profile Pic."
        width={200}
      ></img>
    </div>
  );
}

export default GithubData;

export const githubDataLoader = async () => {
  const res = await fetch("https://api.github.com/users/poshak-kumar");
  return res.json();
};
