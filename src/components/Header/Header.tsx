import React from 'react';
import { HeaderContainer, HeaderTitle } from './Header.styles';
import type { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ title, subtitle, className }) => {
    return (
        <HeaderContainer className={className}>
            <HeaderTitle>{title}</HeaderTitle>
            {subtitle && <p>{subtitle}</p>}
        </HeaderContainer>
    );
};

export default Header;
