import styled, { css } from 'styled-components';
import { Messenger, Plus, Notifications, Facebook, Search, Menu, ArrowDropDown } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;

    padding: 0 16px 0 12px;

    background: var(--secondary-background);
`;

export const WrapperLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const WrapperRight = styled.div`
    display: flex;

    div:nth-child(n + 2){
        margin-left: 8px
    }
`;

export const SearchBackground = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;

    height: 40px;
    width: 40px;

    border-radius: 20px;

    background: var(--primary-background);
`;

export const IconBackground = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;

    height: 40px;
    width: 40px;

    border-radius: 20px;

    background: var(--icon-background);
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const FacebookIcon = styled(Facebook)`
    width: 48px;
    height: 48px;

    margin-right: 5px;
`;

export const SearchIcon = styled(Search)`${iconCSS}`;

export const WrapperMenu = styled.div`
    display: flex;
    width: 100%;

    margin-left: 22px;
`;

export const MenuIcon = styled(Menu)`
    width: 30px;
    height: 30px;

    left: 15px;

    color: var(--gray);
`;
export const PlusIcon = styled(Plus)`
    ${iconCSS}

    > path {
        fill: var(--primary);
    }
`;

export const MessengerIcon = styled(Messenger)`
    ${iconCSS}

    > path {
        fill: var(--primary);
    }
`;

export const NotificationsIcon = styled(Notifications)`
    width: 15px;
    height: 15px;

    > path {
        fill: var(--primary);
    }
`;

export const ArrowDownIcon = styled(ArrowDropDown)`
    width: 40px;
    height: 40px;

    > path {
        color: var(--primary);
    }
`;
