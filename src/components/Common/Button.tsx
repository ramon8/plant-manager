import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

export const Button = styled.button<{ variant?: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  border: none;
  cursor: pointer;

  ${({ variant = 'ghost', theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.white};

          &:hover {
            background-color: ${theme.colors.primaryHover};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text.white};

          &:hover {
            background-color: ${theme.colors.secondaryHover};
          }
        `;
      case 'danger':
        return css`
          background-color: #dc3545;
          color: ${theme.colors.text.white};

          &:hover {
            background-color: #c82333;
          }
        `;
      case 'ghost':
      default:
        return css`
          background-color: transparent;
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.border};

          &:hover {
            background-color: ${theme.colors.border};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
