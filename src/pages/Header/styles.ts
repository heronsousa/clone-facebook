import styled, { css } from 'styled-components';
import { 
    Messenger,
    Plus,
    Notifications,
    Facebook,
    Search,
    Menu,
    ArrowDropDown,
    Home,
    Watch,
    Market,
    Group,
    Gaming
} from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;

    padding: 0 16px 0 12px;

    background: var(--secondary-background);
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.29);
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
    justify-content: center;
    align-items: center;

    width: 100%;

    svg:nth-child(n + 2){
        margin-left: 10%;
    }

    @media(max-width: 700px) {
        justify-content: flex-start;

        margin-left: 22px;

        svg:nth-child(-n+4), div{
            display: none;
        }
        svg:nth-child(5){
            margin-left: 0;
        }
    }

    @media(min-width: 1100px) {
        svg:nth-child(5){
            display: none;
        }
        svg:nth-child(6){
            display: flex;
        }
    }
`;

export const Active = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 60px;
    padding-top: 15px;
`;

export const HomeIcon = styled(Home)`
    width: 30px;
    height: 30px;

    color: var(--facebook);
`;

export const ActiveBar = styled.div`
    height: 3px;
    width: 7vw;
    background: var(--facebook);
`;

export const WatchIcon = styled(Watch)`
    width: 30px;
    height: 30px;

    color: var(--gray);
`;

export const MarketIcon = styled(Market)`
    width: 22px;
    height: 22px;

    > path {
        fill: var(--gray);
    }
`;

export const GroupIcon = styled(Group)`
    width: 31px;
    height: 31px;

    > path {
        color: var(--gray);
    }
`;

export const MenuIcon = styled(Menu)`
    width: 30px;
    height: 30px;

    color: var(--gray);
`;

export const GamingIcon = styled(Gaming)`
    display: none;
    width: 31px;
    height: 31px;

    > path {
        fill: var(--gray);
    }
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
