import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme';

export const NavigationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${theme.colors.background};
  border-top: 1px solid ${theme.colors.border};
  box-shadow: 0 -2px 8px ${theme.colors.shadow};
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${theme.spacing.sm} 0;
  max-width: 100%;
  margin: 0 auto;
`;

export const NavLinkItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${theme.colors.text.light};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  transition: all ${theme.transitions.fast};
  min-height: 48px;
  min-width: 48px;

  &:hover {
    color: ${theme.colors.primary};
  }

  &.active {
    color: ${theme.colors.primary};
    font-weight: ${theme.fontWeight.semibold};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.xs};
  line-height: 1;
  height: 24px;
  width: 24px;
`;

export const LabelText = styled.span`
  font-size: ${theme.fontSize.sm};
  font-weight: inherit;
  text-align: center;
  line-height: 1;
`;
