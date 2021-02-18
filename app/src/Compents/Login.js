import React, { useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Login.css";
import { useHistory } from "react-router-dom";

function sendUser(user, pass) {
  return new Promise((resolve, reject) => {
    fetch("/user/check-user", {
      method: "POST",
      body: JSON.stringify({ username: user, password: pass }),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.index === 1) resolve("perfect");
        else {
          reject("not good");
        }
      });
  });
}
function Login() {
  let history = useHistory();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [progress, setProgrss] = useState(false);
  const [validition, setValid] = useState(false);
  const submit_handler = async (e) => {
    e.preventDefault();
    setProgrss(true);

    await sendUser(user, pass)
      .then((data) => {
        setProgrss(false);
        history.push("/meems");
        console.log(data);
      })
      .catch((data) => {
        setProgrss(false);
        setValid(true);
        setTimeout(() => {
          setValid(false);
        }, 3000);
        console.log(data);
      });
  };
  return (
    <div className="login">
      {validition && (
        <Alert className="loginvalid" variant="filled" severity="error">
          You have to insert right valid
        </Alert>
      )}
      <form className="flex">
        <TextField
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          autoComplete="off"
          id="outlined-basic"
          label="useName"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          autoComplete="off"
          id="outlined-basic"
          label="password"
          variant="outlined"
          type="password"
        />
        <br />
        <br />

        {progress ? (
          <CircularProgress />
        ) : (
          <Button
            disabled={!user || !pass}
            onClick={submit_handler}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Login
          </Button>
        )}
      </form>
    </div>
  );
}

export default Login;
