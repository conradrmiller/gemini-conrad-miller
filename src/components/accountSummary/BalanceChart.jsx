import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'
import Chart from './Chart';


const ChartContainer = styled.div`
    border: 1px solid ${CONSTANTS.PURPLE};
    margin: 1em;
    /* height: 85vh; */
    max-width: 100%;

`;

const BalanceChart = ({state}) => {


    return (
        <ChartContainer>
 
            <Chart state={state} />
        </ChartContainer>
    )
}

export default BalanceChart;