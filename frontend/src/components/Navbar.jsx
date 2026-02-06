import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    nav('/login');
  };

  return (
    <div className="flex justify-between bg-black text-white p-4">
      <div className="flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/summary">Summary</Link>
        <Link to="/accounts">Accounts</Link>
        <Link to="/history">History</Link>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
