import React from "react";
import styles from "./Button.module.css";

type Btn = "button" | "submit" | "reset" | undefined;

interface Props{
  type?: Btn;
  onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} type={props.type || "button"} onClick={props.onClick}>
        {props.children}
    </button>
  );
};

export default Button;
