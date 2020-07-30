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
    GamingIcon,
    Active,
    ButtonBackground
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
                
                <ButtonBackground>
                    <WatchIcon />
                </ButtonBackground>

                <ButtonBackground>
                    <MarketIcon />
                </ButtonBackground>

                <ButtonBackground>
                    <GroupIcon />
                </ButtonBackground>

                <ButtonBackground>
                    <GamingIcon />
                </ButtonBackground>

                <ButtonBackground>
                    <MenuIcon />
                </ButtonBackground>
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