import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

.fullCard {
    min-width: 500px !important;
    min-height: 80% !important;
    width: 50% !important;
    position: absolute !important;
    margin-bottom: 50px;
    top: 10% !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    padding: 20px;
    border-radius: 5px;
  }


  .form-title {
    width: 100%;
    text-align: center;
    font-size: 25px;
    color: black;
    border: none;
    background: transparent;
  }
  .form-title:focus {
    color: black;
    background: transparent;
  }


  .card-question{
    margin: 5px 0px !important;
    padding: 5px 15px;
  }

  .question { /* titre de la question */
    display: inline-block;
    width: 80%;
    padding: 5px 0px;
    font-weight: 549;
    font-size: 18px;
    color: black;
    border: 2px solid blue;
    background: transparent;
  }
  .question:focus {
    color: black;
    background: transparent;
  }

  .type-select {
    right: 0;
    display: inline-block;
    width: 130px;
    border: 2px solid red;
  }




.delete-question {
}


.card-bottom {
  position: absolute;
  width: 33%;
  bottom: 15px;;
  left: 50%;
  transform: translateX(-50%);
}
.SaveFormButton {
  width: 100%;
  color: white; 
}


  /* ON MOBILE */

@media screen and (max-width: 600px) {

  .fullCard {
    min-width: 300px !important;
    width: 95% !important;
    top: 90px !important;
    transform: translate(-50%, 0) !important;
    margin-bottom: 15px;
    padding: 10px
  }

    
`;
