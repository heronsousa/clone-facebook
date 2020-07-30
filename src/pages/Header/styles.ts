import styled, { css } from 'styled-components';
import { Messenger, Facebook, Search, Menu, ArrowDropDown } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;

    /* background:  */
`;

const iconCSS = css`
  width: 40px;
  height: 40px;
  color: var(--gray);
`;

export const FacebookIcon = styled(Facebook)`${iconCSS}`;

export const MessengerIcon = styled(Messenger)`
    ${iconCSS}

    > path {
        fill: #000
    }
`;

export const SearchIcon = styled(Search)`${iconCSS}`;
export const MenuIcon = styled(Menu)`${iconCSS}`;
export const ArrowDownIcon = styled(ArrowDropDown)`${iconCSS}`;