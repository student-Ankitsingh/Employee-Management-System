import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
  if (!authData || !authData.admin || !authData.employees) return;

  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    if (parsedUser.role === 'employee') {
      const emp = authData.employees.find((e) => e.email === parsedUser.email);
      setLoggedInUserData(emp);
    } else if (parsedUser.role === 'admin') {
      const adm = authData.admin.find((a) => a.email === parsedUser.email);
      setLoggedInUserData(adm);
    }
  }
}, [authData]);


  const handleLogin = (email, password) => {
    const admin = authData.admin.find((e) => e.email === email && e.password === password);
    if (admin) {
      setUser({ role: 'admin', email });
      setLoggedInUserData(admin);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email }));
      return;
    }

    const employee = authData.employees.find((e) => e.email === email && e.password === password);
    if (employee) {
      setUser({ role: 'employee', email });
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email }));
      return;
    }

    alert('Invalid Credentials');
  };

const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    setLoggedInUserData(null);
  };

    return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user?.role === 'admin' ? (
        <AdminDashboard data={loggedInUserData} onLogout={handleLogout} />
      ) : (
        <EmployeeDashboard data={loggedInUserData} onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;
