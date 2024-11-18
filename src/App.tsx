import { Provider } from 'react-redux';
import { AppRoutes } from './AppRoutes';
import { NotificationProvider } from './redux/notification/NotificationProvider';
import { store } from './redux/store';
import './i18n';

function App() {
  return (
    <Provider store={store}>
      <NotificationProvider />
      <AppRoutes />
    </Provider>
  );
}

export default App;
