import styled from 'styled-components';
import {
  BackButton as BaseBackButton,
  PageTitle as BasePageTitle,
  Input as BaseInput,
  Textarea as BaseTextarea,
  Button,
  PageHeader,
} from '../../components/Common';

export const AddContainer = styled.div`
  max-width: 100%;
  padding-bottom: 100px; // Bottom navigation space
`;

export const HeaderContainer = styled(PageHeader)`
  padding: ${({ theme }) => theme.spacing.md} 0;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const BackButton = styled(BaseBackButton)`
  margin-left: -${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const PageTitle = styled(BasePageTitle)`
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export const FormSection = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const PhotoSection = styled(FormSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const PhotoPlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PhotoActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const PhotoButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Input = styled(BaseInput)``;

export const Select = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Textarea = styled(BaseTextarea)`
  font-family: inherit;
`;

export const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  ${FormGroup} {
    flex: 1;
  }
`;

export const WateringScheduleIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ToggleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const ToggleSlider = styled.span<{ checked?: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked, theme }) => checked ? theme.colors.primary : theme.colors.border};
  transition: .4s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    transform: ${({ checked }) => checked ? 'translateX(20px)' : 'translateX(0)'};
  }
`;

export const SaveButton = styled(Button).attrs({ variant: 'primary' })`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export const ScanOverlay = styled.div`
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

export const ScanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScanMessage = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SourceOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(2px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1200;
`;

export const SourceModal = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.md};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const SourceActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
