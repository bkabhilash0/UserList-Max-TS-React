import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

interface Props {
  title?: string;
  message?: string;
  onConfirm?: () => void;
}

const Backdrop: React.FC<Props> = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay: React.FC<Props> = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel: React.FC<Props> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message}/>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default ErrorModel;
