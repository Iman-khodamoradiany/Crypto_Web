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
                        // label1: {
                        //     // height:"40px",
                        //     // width:'50px',
                        //     type: 'label',
                        //     xValue: 4.2,
                        //     yValue: 100,
                        //     position:'top',
                        //     backgroundColor: 'white',
                        //     shadowColor: 'rgba(0, 0, 0, 0.7)',
                        //     shadowBlur:'5',
                        //     shadowOffsetX:'3',
                        //     shadowOffsetY:'3',
                        //     content:['i','BALANCE','$35.00'],
                        //     font: {
                        //         size: 10
                        //     }
                        // }
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
                        type:'linear',
                        min:0,
                        max:6.5,
                        grid:{
                            display:false,
                        },
                        ticks:{
                            stepSize:1,
                            callback:function(value){
                                return Number.isInteger(value) ? value :null
                            }
                        }
                    },
                    y:{
                        border:{
                            dash:[4,4]
                        },
                        grid:{
                            display:true,
                            
                        },
                        ticks:{
                            stepSize:20
                        }
                    }
                 }
               }}
            />
        </div>
    )
}

export default LineChart