import React from "react";
import s from "./HomePage.module.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1>Welcome to Phonebook!</h1>
        Our platform is the perfect place to store and manage your contacts.
        Whether you need to track business connections, keep in touch with
        friends, or organize client information, we've made the process simple
        and convenient. <div>Our Key Features:</div>
        <ul>
          <li>
            Easy Contact Addition and Editing: A user-friendly interface for
            quick data management.
          </li>
          <li>
            Search and Filter: Find the contacts you need in just seconds.
          </li>
          <li>Synchronization: Automatic data syncing across devices.</li>
          <li>Security: Your data is protected at the highest level.</li>
        </ul>
        Join us and simplify contact management today!
      </div>
    </div>
  );
};

export default HomePage;
