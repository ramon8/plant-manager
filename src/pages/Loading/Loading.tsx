import { Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, IconWrapper, Spinner, Title, LoadingText } from './Loading.styles';

const Loading = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <IconWrapper>
        <Sprout />
      </IconWrapper>
      <Title>{t('AppName')}</Title>
      <Spinner />
      <LoadingText>{t('Loading')}</LoadingText>
    </Container>
  );
};

export default Loading;
