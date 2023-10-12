import React, { useState } from "react";
import { graphcms } from "../graphql/query";
import { gql } from "graphql-request";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit() {
    graphcms
      .request(
        gql`
          query user{
            nextUsers(where:{email:"${email}"}){ 
            id
            email
            password
            }
          }
            `
      )
      .then((res) => {
        if (res?.nextUsers.length > 0) {
          let user = res.nextUsers.at(0);
          if (password == user.password) {
            alert("Welcome " + email);
            navigate('/planmeal')
          }
        } else alert("Incorrect username or password.");
        console.log(email);
      });
  }

  return (
    <div>
      <div
        className="bg-cover bg-fixed relative h-screen"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url("https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")`,
        }}
      >
        <div className="w-full flex flex-col justify-center mx-auto">
          <div className="w-10/12 mx-auto">
            <div className="w-96 h-[550px] mx-auto items-center border-blue-950 border rounded-lg bg-black/50 mt-32">
              <div className="flex flex-col items-center gap-6">
                <div className="mt-32">
                  <input
                    value={email || ""}
                    name="email"
                    onChange={handleEmail}
                    className="px-12 py-3 bg-black/70 text-white"
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <input
                    value={password || ""}
                    name="password"
                    onChange={handlePassword}
                    className="px-12 py-3 bg-black/70 text-white"
                    type="password"
                    placeholder="password"
                  />
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="py-4 px-32 mt-24 bg-[var(--primary-light)] text-white"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <a className="text-white" href="">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

