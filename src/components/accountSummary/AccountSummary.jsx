import BalanceChart from './BalanceChart'
import BalanceWidget from './BalanceWidget'
import NavBar from './NavBar'
import SendWidget from './SendWidget'
import styled from 'styled-components'

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

const AccountSummary = () => {
    return (
        <>
            <NavBar />
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
