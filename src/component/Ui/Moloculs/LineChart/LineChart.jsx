import {Line} from "react-chartjs-2"


function LineChart({lineChartData}){
    return(
        <div className=" chart-container" >
            <Line 
               height={'100px'}
               width={'150'}
               data={lineChartData}
               options={{
                 responsive: true,
                 plugins:{
                    annotation: {
                        annotations: {
                            // label: {
                            //     type: 'label',
                            //     xValue: 4.2,
                            //     yValue: 110,
                            //     position: 'top',
                            //     backgroundColor: 'white',
                            //     borderColor: 'lightGray',
                            //     borderWidth: 1,
                            //     content: ['BALANCE, $35.00'],
                            //     font: {
                            //            size: 20,
                            //            weight: 'bold',
                            //            color:'black'
                            //         },
                            //     padding: 16,
                            //     cornerRadius: 4,
                            //     textAlign: 'center',
                            //     display: true,
                            //     z:100,
                            //     drawTime:'afterDatasetsDraw',
                            //     clip:false
                            // },
                            point1: {
                                type: 'point',
                                xValue:4.2,
                                yValue:89,
                                borderColor:'#00bc00',
                                borderWidth:6,
                                backgroundColor:'white'
                            },
                            myVerticalLine: {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x',
                            value: 4.2,
                            borderColor: '#00bc00',
                            borderWidth: 1,
                        },
                        }
                    },
                    title:{
                      display:false,
                    },
                    legend:{
                        display:false,
                    }
                 },
                 scales:{
                    x:{ 
                         border:{
                            dark:{color:'gray'},
                            color:'lightGray'
                        },
                        type:'linear',
                        min:0,
                        max:6.5,
                        grid:{
                            display:false,
                        },
                        ticks:{
                            stepSize:1,
                            autoSkip:false,
                            callback:function(value){
                                if(value===0) return ''
                                return Number.isInteger(value) ? '0'+String(value) : null
                            }
                        }
                    },
                    y:{
                        min:0,
                        max:100,
                        border:{
                            dash:[4,4],
                            color:'lightGray',
                            dark:{color:'gray'}
                        },
                        grid:{
                            display:true,
                            color:'lightGray',
                            dark:{color:'gray'},
                        },
                        ticks:{
                            stepSize:20,
                            callback: (value) => {
                                const percentageValue = (value/100) * 100;
                                if (percentageValue > 100.5) {
                                    return '';
                                }
                                return `${percentageValue.toFixed(0)}%`;
                            }
                        }
                    }
                 }
               }}
            />
        </div>
    )
}

export default LineChart