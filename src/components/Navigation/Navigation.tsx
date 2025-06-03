import React from 'react';
import { Home, Calendar, Plus, Settings } from 'lucide-react';
import {
    NavigationWrapper,
    NavigationContainer,
    NavLinkItem,
    StyledNavLink,
    IconContainer,
    LabelText,
} from './Navigation.styles';
import type { NavLinkItemProps, NavigationProps } from './Navigation.types';

const navItems: NavLinkItemProps[] = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/care', icon: Calendar, label: 'Calendar' },
    { to: '/add', icon: Plus, label: 'Add' },
    { to: '/settings', icon: Settings, label: 'Settings' },
];

const Navigation: React.FC<NavigationProps> = ({ className }) => {
    return (
        <NavigationWrapper className={className}>
            <NavigationContainer>
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <NavLinkItem key={item.to}>
                            <StyledNavLink
                                to={item.to}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                end={item.to === '/'}
                            >
                                <IconContainer>
                                    <IconComponent size={24} />
                                </IconContainer>
                                <LabelText>{item.label}</LabelText>
                            </StyledNavLink>
                        </NavLinkItem>
                    );
                })}
            </NavigationContainer>
        </NavigationWrapper>
    );
};

export default Navigation;
