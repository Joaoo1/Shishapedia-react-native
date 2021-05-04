import { AuthProvider } from './auth';
import { NotificationProvider } from './notifications';
import { ThemeProvider } from './theme';

const AppProvider = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default AppProvider;
