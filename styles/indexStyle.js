import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Container1 = styled.div`
  display: flex;
  align-items: center;
  width: 78%;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  width: 1280px;
  justify-content: space-around;
  display: flex;
  
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;
//config da DIV 
export const Infos = styled.div`
  text-align: start;
  width: 42%;
  padding-top:30px;
  display: grid;

  @media (max-width: 760px) {
    width: 90%;

  }
`;

//Esse texto é uma headline...
export const Titulo= styled.span`
  font-size: 40px;
  font-weight: 550;
  text-align: left;
  line-height: 1.2;

  @media (max-width: 760px) {
    font-size: 25px;
  }
  
`;


//E esse texto aqui acompanha o título...
export const Intro = styled.span`
  color: lightgray;
  text-align: justify;
  font-weight: 300;
  margin-top:10px;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

//botão CTA
export const BotaoCTA = styled.button`
  width: 15rem;
  height: 2,5rem;
  padding: 10px;
  display: flex;
  border-radius: 25px;
  justify-content: center;
  margin-top: 10px;
  background-color: green;
  color:white;
  margin-top:15px;

`;

//Elemento 1
export const Elemento1 = styled.div`
  width: 50.8%;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.5s;

  img {
    width: 130%;
    height: 130%;
  }


  @media (max-width: 600px) {

    img {
      width: 18rem;
      height: 18rem;
      padding-left: 22px
      margin-top:15px;
    }
  }
`;

/////////////////////////////////

export const Titulo1= styled.span`
  width: 100%;
  font-size: 40px;

  
`;

export const Elemento3 = styled.div`
  width: 55%;
  display: flex;
  align-items: left;
  justify-content: left;
  padding-left: 150px;

  img {
    width: 130%;
    height: 130%;
  }

  @media (max-width: 760px) {
    width: 80%;
  }

  @media (max-width: 600px) {

    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Titulo2= styled.span`
  width: 100%;
  margin-top: 40px;
  font-size: 19px;
  text-align: center;

`;

export const Titulo3= styled.span`
  width: 100%;
  margin-top: 45px;
  font-size: 20px;
  text-align: center;

`;

export const Intro1= styled.span`
text-align: center;
width: 70%;
margin-top: 20px;
font-size: 19.5px;
`;

export const Intro2 = styled.span`
  color: #0F123F;
  text-align: center;
  color: #0F123F;
  margin-top: 20px;
  font-size: 15px;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const Infos1 = styled.div`
  text-align: center;
  color: #0F123F;
  margin-top:25px;
  border-radius: 20px;
  background-color: white;
  width: 42%;
  display: grid;

  @media (max-width: 760px) {
    width: 110%;
  }
`;

export const Infos2 = styled.div`
  text-align: center;
  color: #0F123F;
  margin-top: 29px;
  border-radius: 20px;
  background-color: white;
  width: 42%;
  display: grid;

  @media (max-width: 760px) {
    width: 110%;
  }
`;


export const Elemento2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  img {
    width: auto;
    height: auto;
    align-items: center;
  }

  @media (max-width: 760px) {

  }

  @media (max-width: 600px) {

    img {
      width: 17rem;
      height: 17rem;
      padding-right: 10px
    }
  }
`;

export const Titulo4= styled.span`
  width: 90%;
  -webkit-text-stroke: 2px ;
  margin-top: 40px;
  font-size: 45px;
  text-align: left;
  padding-left: 130px;


  @media (max-width: 600px) {
    margin-top: 40px;
    font-size: 28px;
    text-align: center;
    padding-left: 30px;
  }
`;

export const Intro4 = styled.span`
  color: #0F123F;
  padding-left: 130px;
  text-align: left;
  color: #8794BA;
  font-weight: 300;
  margin-top: 20px;
  font-size: 17px;

  @media (max-width: 600px) {
    font-size: 15px;
    text-align: justify;
    padding-left: 1px;
  }
`;

export const Titulo5= styled.span`
width: 90%;
-webkit-text-stroke: 2px ;
margin-top: 40px;
font-size: 45px;
text-align: left;
padding-left: 130px;


@media (max-width: 600px) {
  margin-top: 40px;
  font-size: 28px;
  text-align: center;
  padding-left: 20px;
}
`;

export const Intro5 = styled.span`
color: #0F123F;
padding-left: 130px;
text-align: left;
padding-bottom:20px;
color: #8794BA;
font-weight: 300;
margin-top: 20px;
font-size: 17px;

@media (max-width: 600px) {
  font-size: 15px;
  text-align: justify;
  padding-left: 1px;
}
`;

export const Infos3 = styled.div`
  text-align: start;
  width: 45%;
  display: grid;
  paddin

  @media (max-width: 769px) {
    width: 90%;
  }
`;

export const Elemento4 = styled.div`
  width: 55%;
  display: flex;
  align-items: left;
  justify-content: left;
  padding-left: 160px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 760px) {
    width: 80%;
  }

  @media (max-width: 600px) {

    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Content3 = styled.div`
  width: 1350px;
  
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding-right: 255px;
  

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Content2 = styled.div`
  width: 1350px;

  justify-content: space-around;
  display: flex;
  align-items: center;
  padding-right: 90px;
  margin-top: 120px;
  


  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Content4 = styled.div`
  width: 1350px;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding-right: 255px;
  


  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Content5 = styled.div`
  width: 1350px;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding-right: 90px;


  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Linha = styled.div`
width: auto;
height: auto;

`;

export const Form = styled.div`

background-color: white;
margin-top: 120px;
text-align: center;


`;

export const Form1 = styled.div`
background-color: white;
width: 100%;
margin-top: -10px;
`;


export const Tituloform = styled.span`
  margin-top:20px;
  -webkit-text-stroke: 1.1px #0F123F;
  font-size: 30px;
  color: #0F123F;
  text-align: center;

  @media (max-width: 600px) {
    width: 32%;
    
  }

`;


export const Formulario1 = styled.span`
  font-size: 20px;
  margin-top: 10px;
  display:flex;
  color: #0F123F;

`;

export const Captcha = styled.span`
width: 100%;
height: 100%;
padding-top:30px;
`;


export const Botao = styled.button`
  width: 15rem;
  height: 2,5rem;
  padding: 10px;
  align-items: left;
  justify-content: center;
  display: flex;
  border-radius: 25px;
  border-color:  #02F988;
  justify-content: center;
  background-color: #02F988;
  color:white;
  margin-left:200px;

  @media (max-width: 600px) {
    padding: 5px;
    margin:20px;
    text-align: center;

  }

  @media (max-width: 1100px) {
    padding:10px;
    text-align: center;

  }

`;


//////////////////////////////////////////////////////////


//Início, Conheça...
export const NavLinksfim = styled.nav`
  display: flex;
  background-color: white;
  padding-top:30px;
  padding: 0px 200px;

  @media (max-width: 600px) {
  background-color: white;
  padding-top:30px;
  padding: 0px 0px;
  }
`;

export const NavLinksfim1 = styled.nav`
  display: flex;
  width: 13000px;
  padding-top:10px;
  margin-top: 25px;
  background-color: white;
  align-items: center;
  border-top: 2px solid #2A407C;


  @media (max-width: 310px) {
    flex-direction: column;
    background-color: white;
    position: fixed;
    height: 100%;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

//Tamanho da fonte Início, Conheça...
export const Ancorafim = styled.a`
  font-size: 15px;
  background-color: white;
  color: #0F123F;
  margin-top: 25px;
  border-top: 2px solid #2A407C;
  transition: 0.3s;


  @media (min-width: 310px) {
    align-items: center;
    font-size: 10px;
    display: flex;
    padding: 0px 3.6px;
  }
`;
//1
export const Ancorafim1 = styled.a`
  font-size: 20px;
  height: 50px;
  background-color: white;
  color: #0F123F;
  transition: 0.3s;
  

  @media (min-width: 320px) {
    align-items: center;
    font-size: 15px;
    display: flex;
    padding: 0px 10px;
  }
`;













export const Img = styled.img``