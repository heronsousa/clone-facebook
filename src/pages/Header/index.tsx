import React from 'react';

import { 
    Container,
    WrapperLeft,
    WrapperRight,
    WrapperMenu,
    SearchBackground,
    IconBackground,
    PlusIcon,
    NotificationsIcon,
    ArrowDownIcon,
    MessengerIcon,
    FacebookIcon,
    SearchIcon,
    MenuIcon,
    HomeIcon,
    WatchIcon,
    MarketIcon,
    GroupIcon,
    ActiveBar,
    Active,
    GamingIcon
} from './styles';

const Header: React.FC = () => {
    return(
        <Container>
            <WrapperLeft>
                <FacebookIcon />

                <SearchBackground>
                    <SearchIcon />
                </SearchBackground>
            </WrapperLeft>
                
            <WrapperMenu>
                <Active>
                    <HomeIcon />
                    <ActiveBar />
                </Active>
                <WatchIcon />
                <MarketIcon />
                <GroupIcon />
                <MenuIcon />
                <GamingIcon />
            </WrapperMenu>

            <WrapperRight>
                <IconBackground>
                    <PlusIcon />
                </IconBackground>

                <IconBackground>
                    <MessengerIcon />
                </IconBackground>

                <IconBackground>
                    <NotificationsIcon />
                </IconBackground>

                <IconBackground>
                    <ArrowDownIcon />
                </IconBackground>
            </WrapperRight>
        </Container>
    );
}

export default Header;