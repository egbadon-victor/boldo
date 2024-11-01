import Container from "./Container";
import Logo from "./Logo";
import NavList from "./NavList";

export default function Header(props) {
  return (
    <div className="my-14">
      <Container>
        <nav className="flex justify-between align-middle">
          <Logo />
          <NavList />
        </nav>
      </Container>
    </div>
  );
}
