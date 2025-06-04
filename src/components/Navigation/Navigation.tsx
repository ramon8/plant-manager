import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home, Calendar, Plus, Settings } from 'lucide-react';
import {
    NavigationWrapper,
    NavigationContainer,
    NavLinkItem,
    StyledNavLink,
    IconContainer,
    LabelText,
} from './Navigation.styles';
import type { NavigationProps } from './Navigation.types';

const navItems = [
    { to: '/', icon: Home, labelKey: 'Dashboard' },
    { to: '/care', icon: Calendar, labelKey: 'Calendar' },
    { to: '/add', icon: Plus, labelKey: 'Add' },
    { to: '/settings', icon: Settings, labelKey: 'Settings' },
] as const;

const Navigation: React.FC<NavigationProps> = ({ className }) => {
    const { t } = useTranslation();
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
                                <LabelText>{t(item.labelKey)}</LabelText>
                            </StyledNavLink>
                        </NavLinkItem>
                    );
                })}
            </NavigationContainer>
        </NavigationWrapper>
    );
};

export default Navigation;
