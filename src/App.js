import { useReducer } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/signIn/SignIn';
import AccountSummary from './components/accountSummary/AccountSummary';
import jobcoinReducer from './jobcoinReducer';
import initialState from './initialState';

function App() {

    const [appState, dispatch] = useReducer(jobcoinReducer, initialState);
    return (
        <>
            <Routes>
                <Route path="/*" element={<Navigate to="/SignIn" />} />
                <Route path="/SignIn" element={<SignIn state={appState} dispatch={dispatch}/>} />
                <Route path="/AccountSummary" element={<AccountSummary state={appState} dispatch={dispatch}/>} />
            </Routes>
        </>
    )
}

export default App
