//Libraries
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #282c34;
display: flex;
height: 50px;
justify-content: space-between;
padding: 0.2rem calc((100vw - 10000px) / 2);
z-index: 12;
`; //Colors of the actual navbar

export const NavLink = styled(Link)`
align-items: center;
cursor: pointer;
color: #ffffff;
display: flex;
height: 100%;
padding: 0 1rem;
text-decoration: none;
&.active {
	color: #4d4dff;
}
`; //Color of the navbar text

export const NavMenu = styled.div`
align-items: center;
display: flex;
`; //Alignment of navbar links

