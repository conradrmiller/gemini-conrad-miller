import ParentSize from '@visx/responsive/lib/components/ParentSizeModern'
import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'
import Chart from './Chart'

const ChartContainer = styled.div`
    border: 1px solid ${CONSTANTS.PURPLE};
    height: 80vh;
    border-radius: 0.25em;
    box-shadow: 0px 2px 5px -1px ${CONSTANTS.GREY};
    @media (max-width: 400px) {
        height: 45vh;
        max-width: 90vw;
    }
`

const BalanceChart = ({ state }) => {
    return (
        <ChartContainer>
            <ParentSize>
                {({ width, height }) => (
                    <Chart state={state} width={width} height={height} />
                )}
            </ParentSize>
        </ChartContainer>
    )
}

export default BalanceChart
