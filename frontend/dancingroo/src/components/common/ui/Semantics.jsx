import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  *{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PinkButton = styled.input`
  height: 2rem;
  width: 4rem;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #F05475;
  border: none;
  border-radius: 0.5rem;
  padding: 0 1em;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;


export const Header = styled.header`
  width:100%;
  /* background-color: #333;
  color: white;
  padding: 1rem; */
`;

export const Main = styled.main`
  /* flex: 1;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

export const Article = styled.article`
  max-width: 37.5rem;
  /* padding: 1rem; */
`;

export const Section = styled.section`
  /* margin-bottom: 2rem; */
`;

export const H1 = styled.h1`
  font-size: 2rem;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
`;

export const P = styled.p`
  font-size: 1.3rem;
  font-weight:bold;
  letter-spacing:0.5rem;
  /* line-height: 1.5; */
`;

export const Footer = styled.footer`
  /* background-color: #333;
  color: white;
  padding: 1rem; */
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const Semantics = {
  Wrapper,
  PinkButton,
  Header,
  Main,
  Article,
  Section,
  H1,
  H2,
  P,
  Footer,
  Overlay
}

export default Semantics