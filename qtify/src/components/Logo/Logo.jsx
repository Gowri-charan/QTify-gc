import React from "react";
import styles from "./Logo.module.css";
import LogoImg from "../../assets/logo.png";
// import LogoImg from "../../assets/logo"
// import LogoImg from "../../assets/logo.svg"

const Logo=()=>{

return(
    <div className={styles.logoDiv}>
        <img src={LogoImg} width={67} alt="logo"/>
    </div>
)
};

export default Logo;