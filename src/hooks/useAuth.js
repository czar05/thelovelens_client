import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, logout, setError } from '../features/auth/stores/authSlice';
import { selectUser, selectIsAuthenticated, selectError } from '../features/auth/stores/authSelectors';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const error = useSelector(selectError);

  const login = async (credentials) => {
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful login
      const mockUser = {
        id: 1,
        name: 'John Doe',
        email: credentials.email,
      };
      
      dispatch(setUser(mockUser));
      navigate('/dashboard');
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return {
    user,
    isAuthenticated,
    error,
    login,
    logout: handleLogout,
  };
};
