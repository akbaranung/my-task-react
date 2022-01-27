import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";
const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1/";

const Auth = ({ variant }) => {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pageRegister = () => {
    setLogin(false);
  };
  const pageLogin = () => {
    setLogin(true);
  };

  const userLogin = async () => {
    setIsLoading(true);
    const user = {
      email,
      password,
    };
    try {
      const res = await axios.post(`${baseUrl}user/signin`, user);
      console.log(res);
      setIsLoading(false);
      localStorage.setItem("token", res.data.token);
      setName("");
      setEmail("");
      setPassword("");
      history.push("/task");
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      setError(err.response.data.errors);
      setTimeout(() => {
        setIsError(false);
        setName("");
        setEmail("");
        setPassword("");
      }, 3000);
    }
  };

  const userRegister = () => {
    console.log("ok");
  };
  return (
    <div style={box}>
      {isError && (
        <div>
          {error &&
            error.map((item, index) => (
              <Alert key={index} variant="danger">
                {item.msg}
              </Alert>
            ))}
        </div>
      )}
      <h3 style={head}>{login ? "Login" : "Register"}</h3>
      <div>
        {login === false && (
          <Input
            type="text"
            placeholder="name"
            change={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          placeholder="email"
          change={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          change={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={btn}>
        <Button
          variant="primary"
          text={login ? "Login" : "Daftar"}
          load={isLoading}
          action={login ? userLogin : userRegister}
        />
      </div>
      {login ? (
        <div style={paragraph}>
          <p>
            Belum punya akun? silahkan{" "}
            <span onClick={pageRegister} style={textBtn}>
              {" "}
              register!
            </span>
          </p>
        </div>
      ) : (
        <div style={paragraph}>
          <p>
            Sudah punya akun? silahkan{" "}
            <span onClick={pageLogin} style={textBtn}>
              login!
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

const box = {
  background: "#fff",
  width: "25%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0.7rem",
};

const head = {
  textAlign: "center",
  marginBottom: "0.4rem",
};

const btn = {
  textAlign: "center",
  marginTop: "0.5rem",
};

const paragraph = {
  textAlign: "center",
  marginTop: "0.5rem",
  fontSize: "14px",
};

const textBtn = {
  color: "#57ae4f",
  fontSize: "15px",
  cursor: "pointer",
};

export default Auth;
