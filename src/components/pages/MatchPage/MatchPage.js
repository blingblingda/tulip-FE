import React from "react";
import { Header } from "../../UI/Header";
import { Footer } from "../../UI/Footer";
import { Pcard } from "./Pcard";

export const MatchPage = () => {
  const dummyData = [
    {
      _id: "652f561724502e55e283970c",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      city: "New York",
      gender: "Male",
      age: 28,
      url: "https://www.hepper.com/wp-content/uploads/2021/07/Ragdoll-cat_madeinitaly4k_Shutterstock.webp",
      show_me: "Female",
      passion: ["Photography", "Traveling"],
      createdAt: "2023-10-18T03:50:47.353Z",
      updatedAt: "2023-10-18T03:50:47.353Z",
      __v: 0,
    },
    {
      _id: "652f572e8e21b9fd8eb0e5c3",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "mypassword",
      city: "Los Angeles",
      mobile: "987-654-3210",
      gender: "Female",
      age: 25,
      url: "https://www.hepper.com/wp-content/uploads/2021/07/Ragdoll-cat_madeinitaly4k_Shutterstock.webp",
      show_me: "Male",
      passion: ["Cooking", "Reading", "Hiking"],
      createdAt: "2023-10-18T03:55:26.167Z",
      updatedAt: "2023-10-18T03:55:26.167Z",
      __v: 0,
    },
    {
      _id: "652f57408e21b9fd8eb0e5c5",
      name: "Susan Brown",
      email: "susan.brown@example.com",
      password: "susanpassword",
      city: "Chicago",
      mobile: "555-444-3333",
      gender: "Female",
      age: 30,
      url: "https://www.hepper.com/wp-content/uploads/2021/07/Ragdoll-cat_madeinitaly4k_Shutterstock.webp",
      show_me: "Both",
      passion: ["Dancing", "Blogging"],
      createdAt: "2023-10-18T03:55:44.730Z",
      updatedAt: "2023-10-18T03:55:44.730Z",
      __v: 0,
    },
    {
      _id: "652f574d8e21b9fd8eb0e5c7",
      name: "Michael Jones",
      email: "michael.jones@example.com",
      password: "michaeljonespass",
      city: "Miami",
      mobile: "222-111-0000",
      gender: "Male",
      age: 32,
      url: "https://www.hepper.com/wp-content/uploads/2021/07/Ragdoll-cat_madeinitaly4k_Shutterstock.webp",
      show_me: "Female",
      passion: ["Gaming", "Music", "Traveling"],
      createdAt: "2023-10-18T03:55:57.075Z",
      updatedAt: "2023-10-18T03:55:57.075Z",
      __v: 0,
    },
    {
      _id: "6530ce7ac963d39314d8624c",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "p@ssw0rd",
      city: "Los Angeles",
      mobile: "555-123-4567",
      gender: "Female",
      age: 28,
      url: "https://www.hepper.com/wp-content/uploads/2021/07/Ragdoll-cat_madeinitaly4k_Shutterstock.webp",
      show_me: "Women",
      passion: ["Reading", "Singing", "Gardening"],
      createdAt: "2023-10-19T06:36:42.329Z",
      updatedAt: "2023-10-19T06:36:42.329Z",
      __v: 0,
    },
  ];

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20 py-10 bg-base-200">
        {dummyData.map((data) => (
          <Pcard key={data._id} {...data} />
        ))}
      </main>
      <Footer />
    </>
  );
};
