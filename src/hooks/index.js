import { AuthProvider } from './auth';
import { NotificationProvider } from './notifications';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <NotificationProvider>{children}</NotificationProvider>
  </AuthProvider>
);

export default AppProvider;
