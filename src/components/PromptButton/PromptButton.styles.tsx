import styled from 'styled-components';

export const ButtonContainer = styled.button`
  position: fixed;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  z-index: 1200;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const PromptOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
`;

export const PromptModal = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 90%;
  max-width: 400px;
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }

  textarea {
    min-height: 80px;
    resize: vertical;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSize.base};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  input[type='file'] {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  button[type='submit'] {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.white};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto ${({ theme }) => theme.spacing.sm};
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  object-fit: cover;
  display: block;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #dc3545;
  color: ${({ theme }) => theme.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
