import React from 'react';

import { Container, ArrowDownIcon, MessengerIcon, FacebookIcon, SearchIcon, MenuIcon } from './styles';

const Header: React.FC = () => {
  return(
      <Container>
          <FacebookIcon />
          <MessengerIcon />
          <SearchIcon />
          <MenuIcon />
          <ArrowDownIcon />
      </Container>
  );
}

export default Header;