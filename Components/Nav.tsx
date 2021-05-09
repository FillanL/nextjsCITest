import styled from "styled-components";
import Link from "next/link";
const Nav = ():JSX.Element => {
  return (
    <NavContainer>
      <NavUList>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/dash">Dash</Link>
        </NavItem>
        <NavItem>
          <Link href="/faq">FAQ</Link>
        </NavItem>
      </NavUList>
    </NavContainer>
  );
};

export default Nav;
const NavContainer = styled.nav`
  width: 100vw;
  background-color: blue;
  height: 50px;
  overflow: hidden;
`;
const NavUList = styled.ul`
  list-style: none;
  padding: 0px 30px;
  text-align: right;
`;
const NavItem = styled.li`
  display: inline;
  margin: 25px;
`;
