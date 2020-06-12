import { createGlobalStyle } from "styled-components";
import backgroundImage from "../../assets/img/backgrounds/background-stars.jpg";

export const GlobalStyle = createGlobalStyle`
html, body{ height: 100%;}
body{
  background-image:url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  }

  .whiteDiv {
    position: absolute;
    width: 100%;
    height: 600px;
    top: -400px;
    background: rgba(255,255,255,0);
    z-index: -100;
  }
  
  .whiteDiv:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: top right;
    transform: skewY(-8deg);
    background: rgba(255,255,255,0.3);
  }
  
  .boxText {
    position: absolute;
    width : 40%;
    right: 3%;
    top : 50%;
    transform: translateY(-50%);
    color: white;
    text-align: center;
    font-size: 20px;
  }
  
  .boxTextTitre {
    font-size:64px;
  }

  .boxTextFormList {
    position: absolute;
    width : 100%;
    top : 10px;
    height: 75px;
    left: 0;
    color: white;
    text-align: center;
    font-size: 32px;
  }
  
  .boxTextTitreFormList {
    font-size: 32px;
  }

  .div-buttons {
    position: relative;
    margin-top: 25px;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    transform: translateY(0.5px);
  }



  .btn {
    font-size: 1.25rem;
    padding: 0.8rem 1.5rem;
    border-color: white;
    color: white;
  }
  .btn:hover {
    background-color: rgba(0,0,0,0);
    border-color: white;
    color: white;
  }
  .btn:active {
    background-color: rgba(0,0,0,0) !important;
    border-color: white !important;
    color: white !important;
  }  

  .btn-inscription {
  }








  /* SCROLL */


  .pave-scroll {
    position: absolute;
    top: 120%;
  }


`;
