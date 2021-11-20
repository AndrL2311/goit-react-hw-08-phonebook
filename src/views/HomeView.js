import React from "react";
import s from "./HomeView.module.css";

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>Welcome to the Phone Book</h1>
    <p className={s.title_text}>Please register or log into your account!</p>
  </div>
);

export default HomeView;
