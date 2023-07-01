import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const NavBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px ;
`;

export const StyledLink = styled(NavLink)`
color: #cbeaed;
text-decoration: none;
padding: 10px;

transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    color: #fff;
  }
`;