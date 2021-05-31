import React, { useState } from "react";
import Adduser from "./components/Users/Adduser";
import UserList from "./components/Users/UserList";

type User = { name: string; age: number | string }[];

const App: React.FC = () => {
  const [usersList, setUsersList] = useState<User>([]);

  const addUserHandler = (uName: string, age: string | number) => {
    setUsersList((prev) => [...prev, { name: uName, age: age }]);
  };

  return (
    <>
      <Adduser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList users={usersList} />}
    </>
  );
};

export default App;
