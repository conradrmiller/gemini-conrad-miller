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

    console.log('account summary state',state)
    return (
        <>
            <NavBar state={state} dispatch={dispatch} />
            <AccountSummaryLayout>
                <BalanceLayout>
                    <BalanceWidget />
                </BalanceLayout>
                <SendLayout>
                    <SendWidget />
                </SendLayout>
                <ChartLayout>
                    <BalanceChart />
                </ChartLayout>
            </AccountSummaryLayout>
        </>
    )
}

export default AccountSummary
