import React, { useState } from "react";
import { Button, Form, Modal, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../logoKab.png";

const MyVerticallyCenteredModal = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    props.onHide();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", "token");
      navigate("home");
      return;
    }
    props.onAlert();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User/Admin Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
            />
            <Form.Text className="text-muted">
              We'll never share your username with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleLogin}>Login</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Landing = () => {
  const [isLoginPopupShow, setIsLoginPopupShow] = useState(false);
  const [isAlert, setAlert] = useState(false);

  return (
    <div className="bg-slate-100 w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="gap-y-8 flex flex-col justify-center items-center">
        <div className="flex items-center gap-x-4">
          <img src={logo} className="w-28" alt="logo" />

          <div>
            <div className="font-semibold text-2xl">RSUD Kab. Aceh Tamiang</div>
            <p className="font-semibold text-xl">Insiden Keselamatan Pasien</p>
          </div>
        </div>
        <Button
          onClick={() => setIsLoginPopupShow(true)}
          className="w-full text-white"
          size="sm"
          variant="info"
        >
          Mulai
        </Button>
      </div>
      <MyVerticallyCenteredModal
        show={isLoginPopupShow}
        onHide={() => setIsLoginPopupShow(false)}
        onAlert={() => setAlert(true)}
      />
      <Toast
        bg="danger"
        className="top-4 absolute right-3 text-white"
        autohide={true}
        show={isAlert}
        onClose={() => setAlert(false)}
      >
        <Toast.Header>
          <strong className="me-auto">Warning</strong>
        </Toast.Header>
        <Toast.Body>Username or Password incorrect!</Toast.Body>
      </Toast>
    </div>
  );
};

export default Landing;
