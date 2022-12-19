import {
  BrowserRouter, Navigate, Routes, Route,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import NotFound from '../pages/NotFound';
import AuthProvider from '../hooks/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
