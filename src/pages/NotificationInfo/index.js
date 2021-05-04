import { useEffect } from 'react';

import PageHeader from '../../components/DrawerPageHeader';
import { useNotifications } from '../../hooks/notifications';
import { useTheme } from '../../hooks/theme';
import api from '../../services/api';

import {
  Container,
  HeadContainer,
  NotificationDate,
  NotificationMessage,
  NotificationTitle,
} from './styles';

const Notifications = ({ route }) => {
  const { notification } = route.params;
  const { setRead } = useNotifications();
  const { colors } = useTheme();

  useEffect(() => {
    if (!notification.read) {
      api.put('/notifications', { id: notification.id, read: true });
      setRead();
    }
  }, []);

  return (
    <>
      <PageHeader notifications={false} backButton title="Notificações" />
      <Container>
        <HeadContainer>
          <NotificationTitle color={colors.text}>
            {notification.title}
          </NotificationTitle>
          <NotificationDate color={colors.text}>
            {notification.date}
          </NotificationDate>
        </HeadContainer>
        <NotificationMessage color={colors.text}>
          {notification.message}
        </NotificationMessage>
      </Container>
    </>
  );
};

export default Notifications;
