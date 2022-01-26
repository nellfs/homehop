import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS_DUMMY = [
    {
      id: "u1",
      name: "Regina Melo",
      image: "https://kottke.org/plus/misc/images/ai-faces-01.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "null-user",
      // image: "https://kottke.org/plus/misc/images/ai-faces-01.jpg",
      places: 0,
    },
  ];

  return <UsersList items={USERS_DUMMY} />;
};

export default Users;