import Container from "./Container";
import Logo from "./Logo";
import NavList from "./NavList";

export default function Header(props) {
  return (
    <header className="border-2 border-red-600">
      <Container>
        <nav className="flex justify-between align-middle">
          <Logo/>
          <NavList/>
        </nav>
      </Container>
    </header>
  );
}
