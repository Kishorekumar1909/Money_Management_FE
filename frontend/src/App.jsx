import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Summary from './pages/Summary';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import ProtectedRoute from './utils/ProtectedRoute';
import AccountDashboard from './pages/AccountDashboard';
import MainLayout from './layouts/MainLayout';
import './index.css'



export default function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoute><MainLayout><Dashboard /></MainLayout></ProtectedRoute>} />
      <Route path="/summary" element={<ProtectedRoute><MainLayout><Summary /></MainLayout></ProtectedRoute>} />
      {/* <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} /> */}
      <Route path="/accounts" element={<ProtectedRoute><MainLayout><AccountDashboard /></MainLayout></ProtectedRoute>}/>
      <Route path="/history" element={<ProtectedRoute><MainLayout><History /></MainLayout></ProtectedRoute>} />
    
    </Routes>
  </BrowserRouter>
);
}

