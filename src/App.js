import React from "react";
import logo from "./logo.svg";
import "./index";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-semibold">DatingApp</h1>
      </header>

      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Features</h2>
        <p>Discover new people in your city.</p>
        <p>Safe and secure platform.</p>
        <p>Find matches based on hobbies and passions.</p>
      </section>

      <section className="bg-blue-50 p-4">
        <h2 className="text-xl font-bold mb-4">Join us now!</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </section>
    </div>
  );
}

export default App;
