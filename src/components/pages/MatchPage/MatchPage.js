import React, { useState, useEffect } from "react";
import { Header } from "../../UI/Header";
import { Footer } from "../../UI/Footer";
import { Pcard } from "./Pcard";

export const MatchPage = () => {
  const [matchedData, setMatchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:3001/api/potential_match/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMatchedData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // console.log(matchedData);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20 py-10 bg-base-200">
        {matchedData.map((data) => (
          <Pcard key={data._id} data={data} />
        ))}
      </main>
      <Footer />
    </>
  );
};
