import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import AppRoutes from './router.jsx';
import MainLayout from './layouts/MainLayout/index.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;
