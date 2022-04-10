import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from './components/signIn/SignIn';
import AccountSummary from './components/accountSummary/AccountSummary';

function App() {
  return (
    <>
    <Routes>
    <Route path="/*" element={<Navigate to="/SignIn" />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/AccountSummary" element={<AccountSummary />} />
  </Routes>
  </>
  );
}

export default App;
