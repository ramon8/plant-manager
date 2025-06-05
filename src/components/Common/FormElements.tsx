import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.base};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.base};
  min-height: 100px;
  resize: vertical;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled(AntSelect)`
  width: 100%;

  .ant-select-selector {
    height: 48px !important;
    border-radius: ${({ theme }) => theme.borderRadius.md} !important;
    border-color: ${({ theme }) => theme.colors.border} !important;
    background: ${({ theme }) => theme.colors.surface} !important;
    color: ${({ theme }) => theme.colors.text.primary} !important;

    .ant-select-selection-item {
      line-height: 46px !important;
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    .ant-select-selection-placeholder {
      line-height: 46px !important;
      color: ${({ theme }) => theme.colors.text.light};
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  &.ant-select-focused .ant-select-selector {
    border-color: ${({ theme }) => theme.colors.primary} !important;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33 !important;
  }
`;
