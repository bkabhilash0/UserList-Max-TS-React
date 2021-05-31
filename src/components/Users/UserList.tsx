import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

interface Props {
  users: { name: string; age: number | string }[];
}

const UserList: React.FC<Props> = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
