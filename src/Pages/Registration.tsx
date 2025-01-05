import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [userType, setUserType] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Save user data (could be to a backend or localStorage)
    localStorage.setItem('userType', userType);  // For demonstration
    navigate(`/dashboard/${userType}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        User Type:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
