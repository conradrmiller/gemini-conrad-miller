import {
    XYChart,
    Tooltip,
    buildChartTheme,
    Axis,
    Grid,
    LineSeries,
} from '@visx/xychart'
import { useEffect, useState } from 'react'
import CONSTANTS from '../../CONSTANTS'

const Chart = ({ state, height, width }) => {
    const [processedBalanceData, setProcessedBalanceData] = useState()
    const incrementOrDecrementBalance = (transaction) => {
        if (transaction.toAddress === state.username) {
            return parseInt(transaction.amount, 10)
        }
        return -Math.abs(parseInt(transaction.amount, 10))
    }

    let runningBalance = 0
    const processData = (array) =>
        array.map((el, index) => {
            runningBalance = runningBalance + incrementOrDecrementBalance(el)

            return {
                transactionNumber: index + 1,
                timestamp: new Date(el.timestamp).toLocaleString('en-us'),
                balance: runningBalance,
            }
        })

    useEffect(() => {
        state.transactions
            ? setProcessedBalanceData(processData(state?.transactions))
            : setProcessedBalanceData([])
    }, [state.transactions])

    const accessors = {
        xAccessor: (d) => d.transactionNumber,
        yAccessor: (d) => d.balance,
    }

    const theme = buildChartTheme({
        colors: [`${CONSTANTS.ORANGE}`],
        gridColor: `${CONSTANTS.GREY}`,
    })

    return (
        <XYChart
            height={height}
            width={width}
            xScale={{ type: 'band' }}
            yScale={{ type: 'linear' }}
            theme={theme}
        >
            <Axis orientation="bottom" label="Transaction Number" />
            <Axis orientation="left" label="Amount $" />
            <Grid columns={false} numTicks={4} />
            <LineSeries
                dataKey="Balance"
                data={processedBalanceData}
                {...accessors}
            />
            <Tooltip
                snapTooltipToDatumX
                snapTooltipToDatumY
                showVerticalCrosshair
                showSeriesGlyphs
                renderTooltip={({ tooltipData, colorScale }) => (
                    <div>
                        <div
                            style={{
                                color: colorScale(tooltipData.nearestDatum.key),
                            }}
                        >
                            {tooltipData.nearestDatum.key}
                        </div>
                        ${accessors.yAccessor(tooltipData.nearestDatum.datum)}
                        <br />
                        {tooltipData.nearestDatum.datum.timestamp}
                    </div>
                )}
            />
        </XYChart>
    )
}

export default Chart
