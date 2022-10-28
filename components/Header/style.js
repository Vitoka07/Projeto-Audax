import styled from 'styled-components';

//rodapé 
export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  
  justify-content: center;
  
`;

//div do rodapé
export const Content = styled.div`
  width: 86.3%;
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

//DATANOW
export const Title = styled.div`
  font-size: 35px;
  -webkit-text-stroke: 3px white;

`;

//Início, Conheça...
export const NavLinks = styled.nav`
  display: flex;
  gap: 45px;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

//Tamanho da fonte Início, Conheça...
export const Ancora = styled.a`
  font-size: 14px;
  height: 50px;
  background-color: #0F123F  ;
  transition: 0.3s;
  

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

//Responsividade
export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  background-color: #0F123F  ;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

//Responsividade
export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: left;
`;

export const SubTitle = styled.span``;
