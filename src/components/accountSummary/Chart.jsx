import {
    XYChart,
    Tooltip,
    buildChartTheme,
    Axis,
    Grid,
    LineSeries
  } from "@visx/xychart";
    
  const Chart = ({state}) => {
      const calculateBalance = transaction => {
        if (transaction.toAddress === "test1"){
          return parseInt(transaction.amount, 10)
        }
        return -Math.abs(parseInt(transaction.amount, 10))
      
      } 
      
      let runningBalance = 0;
      const processData = array => array.map((el, index) => {
        runningBalance = runningBalance + calculateBalance(el);
        
        return {
          transactionNumber: index+1,
          // timestamp: new Date(el.timestamp).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ,
          timestamp: new Date(el.timestamp).toLocaleString('en-us') ,
          balance: runningBalance
      
        }
      })
      const balanceData = processData(state.transactions)
      
      const accessors = {
        xAccessor: (d) => d.transactionNumber,
        yAccessor: (d) => d.balance
      };
      
      const theme = buildChartTheme({
        colors: ['#F28E13'],
        gridColor: 'hsl(44, 0%, 64%)',
      
      })
    return (
      <XYChart height={300} xScale={{ type: "band" }} yScale={{ type: "linear" }} theme={theme}>
        <Axis orientation="bottom" label="Transaction Number"/>
        <Axis orientation="left" label="Amount $"/>
        <Grid columns={false} numTicks={4} />
        <LineSeries dataKey="Balance" data={balanceData} {...accessors} />
        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData, colorScale }) => (
            <div>
              <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                {tooltipData.nearestDatum.key}
              </div>
              ${accessors.yAccessor(tooltipData.nearestDatum.datum)}
              <br />
              {tooltipData.nearestDatum.datum.timestamp}
            </div>
          )}
        />
      </XYChart>
    );
  };
  
  export default Chart;
  