import { Navigate } from 'react-router-dom'
import BalanceChart from './BalanceChart'
import BalanceWidget from './BalanceWidget'
import NavBar from './NavBar'
import SendWidget from './SendWidget'
import styled from 'styled-components'
import { useEffect } from 'react'
import { getAddressInfo } from '../../apiCalls'
import ACTION_TYPES from '../../ACTION_TYPES'

const AccountSummaryLayout = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
        'balance chart'
        'send chart';

    grid-template-rows: 1fr 4fr;
    gap: 1em;
    max-width: 100%;
    padding: 1em;
    @media (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            'balance'
            'send'
            'chart';
    }
`

const BalanceLayout = styled.section`
    grid-area: balance;
`

const SendLayout = styled.section`
    grid-area: send;
`

const ChartLayout = styled.section`
    grid-area: chart;
`

const AccountSummary = ({ state, dispatch }) => {
    useEffect(() => {
        getAddressInfo(state.username).then((response) => {
            dispatch({
                type: ACTION_TYPES.SET_BALANCE,
                payload: response?.data?.balance,
            })
            dispatch({
                type: ACTION_TYPES.SET_TRANSACTIONS,
                payload: response?.data?.transactions,
            })
        })
    }, [])

    console.log('account summary state', state)
    return (
        <>
            {!state.username && <Navigate to="/SignIn" />}
            <NavBar state={state} dispatch={dispatch} />
            <AccountSummaryLayout>
                <BalanceLayout>
                    <BalanceWidget state={state} />
                </BalanceLayout>
                <SendLayout>
                    <SendWidget state={state} dispatch={dispatch} />
                </SendLayout>
                <ChartLayout>
                    <BalanceChart state={state} />
                </ChartLayout>
            </AccountSummaryLayout>
        </>
    )
}

export default AccountSummary
