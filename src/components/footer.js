import React from "react";
import { Link } from "react-router-dom";
import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center flex-column flex-md-row pb-2 ${Styles.footer}`}
    >
      {/* <h2 className="ml-0 ml-md-3 mb-4 mb-sm-2">IAM Shop</h2>*/}
      <div className={`${Styles.footer} col-12 text-center p-5`}>
        <h5>About us</h5>
        <div class="nav justify-content-center">
                  
                    <Link to={{ pathname:"https://www.linkedin.com/in/astrid-medina/"}} target="blank" ><i className="fab fa-linkedin mr-1 ml-2 "></i></Link>
                    <Link to={{ pathname:"https://www.twitter.com/astridadriiana/"}} target="blank"><i className="fab fa-twitter mr-1 ml-2 "></i></Link>
                    <Link to={{ pathname:"https://www.instagram.com/iam.swimwear/"}} target="blank" ><i className="fab fa-instagram mr-1 ml-2 "></i></Link>
                    <Link to={{ pathname:"https://www.github.com/Sifrisky/"}} target="blank" ><i className="fab fa-github mr-1 ml-2 "></i></Link>
                </div>
        We are IAM SHOP and this page was designed with a lot of{" "}
        <i className="fas fa-heart"></i> | © 2020. All right reserved
      </div>
    </div>
  );
};

export default Footer;

