import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Dashboard from './pages/Home/index.jsx';
import Login from './pages/Login/index.jsx';
import Register from './pages/Register/index.jsx';
import PublicRoute from './components/common/PublicRoute/index.jsx';
import PhotographerDetailsUI from './pages/PhotographerProfile/index.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PublicRoute>
            <Dashboard />
          </PublicRoute>
        }
      />
      <Route
        path="/photographers/:id"
        element={
          <PublicRoute>
            <PhotographerDetailsUI />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes; 