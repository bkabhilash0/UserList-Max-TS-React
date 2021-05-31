import React, {
  FormEventHandler,
  useState,
  useRef
} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModal";
import styles from "./Adduser.module.css";

interface Props {
  onAddUser: (uname: string, age: number | string) => void;
}

type ErrorState = { title: string; message: string } | undefined;

const Adduser: React.FC<Props> = (props) => {
  const [error, setError] = useState<ErrorState>();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const addUserHandler: FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    const enteredName = nameInputRef.current!.value;
    const enteredAge = ageInputRef.current!.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (Non-Empty Values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current!.value = "";
    ageInputRef.current!.value = "";
  };

  // const usernameChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setUsername(e.target.value);
  // };

  // const ageChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <>
      {error && <ErrorModel {...error} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default Adduser;
