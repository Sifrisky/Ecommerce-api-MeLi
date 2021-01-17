import React from "react";
import { Link } from "react-router-dom";

import Styles from "./footer.module.css";

const Footer = () => {
  return (
    
    
   <div className={`d-flex justify-content-between-lg align-items-center flex-column flex-md-row pb-2 ${Styles.footer}`}>
        <h2 className={`${Styles.footer} ml-0 ml-md-3 mb-4 mb-sm-2`}>IAM Shop</h2>
        <div className={`${Styles.footer} col-12 text-center p-5`}> 
        About us</div>
        <div className="d-flex mt-3 mt-md-0">
        <ul className="nav justify-content-center">
        <Link to={{ pathname:"https://www.twitter.com/astridadriiana/"}} target="_blank"><li className="nav-item mr-2"><i className="fab fa-linkedin mr-1 ml-2 "></i></li></Link>
        <Link to={{ pathname:"https://www.linkedin.com/in/astrid-medina/"}} target="_blank"><li className="nav-item mr-2"><i className="fab fa-linkedin mr-1 ml-2 "></i></li></Link>
        <Link to={{ pathname:"https://www.instagram.com/iam.swimwear/"}} target="_blank"><li className="nav-item mr-2"><i className="fab fa-linkedin mr-1 ml-2 "></i></li></Link>
        </ul>
        </div>
        </div>
  );
};

export default Footer; 



  {/* <Link to="/about">
           About us
          </Link>
   
     
      <div className="d-flex justify-content-center align-items-center justify-content-md-between flex-column flex-md-row mx-3 mt-4">
        <div className="d-flex"><p className={`mb-0 small ${style.textFooter}`}>© 2020. All right reserved .</p></div>

        <div className="d-flex mt-3 mt-md-0">
        <ul className="nav justify-content-center">
        <Link to={{ pathname:"https://www.twitter.com/astridadriiana/"}} target="_blank"><li className="nav-item mr-2"><i className="fab fa-linkedin mr-1 ml-2 "></i></li></Link>
        <Link to={{ pathname:"https://www.linkedin.com/in/astrid-medina/"}} target="_blank"><li className="nav-item mr-2"><i className="fab fa-linkedin mr-1 ml-2 "></i></li></Link>
        <Link to={{ pathname:"https://www.instagram.com/iam.swimwear/"}} target="_blank"><li className="nav-item mr-2"><i className="fab fa-linkedin mr-1 ml-2 "></i></li></Link>
        </ul>
        </div>
      </div>
    </div>
  </>*/}