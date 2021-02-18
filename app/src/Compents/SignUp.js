import React, { useState, useEffect } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./SignUp.css";
function SignUp() {
  const [validition, setValid] = useState(false);
  const [typeValid, setTypeValid] = useState("success");

  const [error, setError] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfrim] = useState("");
  const [progress, setProg] = useState(false);

  const submmit_handler = async () => {
    setProg(true);
    //   add to the db
    await fetch("/user/add-user", {
      method: "POST",
      body: JSON.stringify({ username: user, password: pass }),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.index === 1) {
          setTypeValid("success");
        } else {
          setTypeValid("error");
        }
      });
    // close the snipper
    setProg(false);
    setValid(true);
    setTimeout(() => {
      setValid(false);
    }, 3000);
  };
  return (
    <div className="mainpage">
      {validition && (
        <Alert className="valadition" variant="filled" severity={typeValid}>
          {typeValid === "success"
            ? "Signup success full"
            : "You have to insert right valid"}
        </Alert>
      )}
      <div className="signup">
        <TextField
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          id="outlined-basic"
          label="User Name"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          value={pass}
          onChange={(e) => {
            if (e.target.value !== confirm) {
              setError(true);
            } else {
              setError(false);
            }
            setPass(e.target.value);
          }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <br />
        <br />
        <TextField
          error={error}
          value={confirm}
          onChange={(e) => {
            if (e.target.value !== pass) {
              setError(true);
            } else {
              setError(false);
            }
            setConfrim(e.target.value);
          }}
          id="outlined-basic"
          label="Confirm password"
          variant="outlined"
          type="password"
        />
        <br />
        <br />

        {progress ? (
          <CircularProgress />
        ) : (
          <Button
            disabled={!user || !pass || error}
            variant="outlined"
            color="primary"
            onClick={submmit_handler}
          >
            SignUp
          </Button>
        )}
      </div>
      <h5>
        if you have been sign up <span>Login</span>
      </h5>
    </div>
  );
}

export default SignUp;
