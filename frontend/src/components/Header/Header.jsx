import logo from "../../images/logo.png";
import { Button, ImageLogo, InputWrapper, InputField, Nav } from "./HeaderStyled";

export default function Header() {
  return (
    <>
      <Nav>
        <InputWrapper>
          <i className="bi bi-search"></i>
          <InputField type="text" placeholder="Pesquise por um título" />
        </InputWrapper>

        <ImageLogo src={logo} alt="Logo do Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
);
}

