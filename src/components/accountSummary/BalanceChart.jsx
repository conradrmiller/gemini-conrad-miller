import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'
import Chart from './Chart';


const ChartContainer = styled.div`
    border: 1px solid ${CONSTANTS.PURPLE};
    margin: 1em;
    height: 80vh;
    /* max-width: 100vh; */
    border-radius: .25em;
    box-shadow: 0px 2px 5px -1px ${CONSTANTS.GREY};
    @media (max-width: 400px){
        height: 45vh;
        width: 100vw;
    }

`;

const BalanceChart = ({state}) => {


    return (
        <ChartContainer>
            <ParentSize>{({ width, height }) => <Chart state={state} width={width} height={height} />}</ParentSize>
        </ChartContainer>
    )
}

export default BalanceChart;