import {Line} from "react-chartjs-2"


function LineChart({lineChartData}){
    const customLabelPlugin = {
    id: 'customLabelPlugin',
    afterDatasetsDraw: (chart) => {
      const { ctx, scales } = chart;
      const x = scales.x.getPixelForValue(4.2);
      const y = scales.y.getPixelForValue(100);
      

      const isDark = document.body.classList.contains('dark'); 
       // const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;


      ctx.save();
      ctx.fillStyle =  isDark ? '#1a1a1a' : 'white';
      ctx.strokeStyle =  isDark ? '#2b2b2b' : 'white';
      ctx.lineWidth = 1;
      ctx.font = 'normal 15px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const textLines = ['BALANCE', '$35.00'];
      const lineHeight = 26;

      ctx.shadowColor = 'rgb(0,0,0,0.3)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 6;
      ctx.shadowOffsetY = 6;
    
// محاسبه‌ی عرض و ارتفاع باکس
      const textWidths = textLines.map(line => ctx.measureText(line).width);
      const boxWidth = Math.max(...textWidths) + 100;
      const boxHeight = textLines.length * lineHeight + 8;

      const triangleHeight = 12;
      const triangleWidth = 30;

     const boxX = x - boxWidth / 2;
     const boxY = y - boxHeight - triangleHeight +16;

// رسم مستطیل
     ctx.beginPath();
     ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 4);
     ctx.fill();
     ctx.stroke();

// رسم مثلث پایین
   ctx.beginPath();
   ctx.moveTo(x - triangleWidth / 2, boxY + boxHeight);
   ctx.lineTo(x + triangleWidth / 2, boxY + boxHeight);
   ctx.lineTo(x, boxY + boxHeight + triangleHeight);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   ctx.shadowColor='transparent'
   ctx.shadowBlur=0;
   ctx.shadowOffsetX=0;
   ctx.shadowOffsetY=0;

// رسم متن‌ها
   ctx.fillStyle = 'gray';
   textLines.forEach((line, i) => {
   ctx.fillText(line, x, boxY + 10 + i * lineHeight);
   });
   

   ctx.restore();
    }
  };

  
    return(
        <div className=" chart-container" >
            <Line 
               height={'100px'}
               width={'100px'}
               data={lineChartData}
               options={{
                 responsive: true,
                 plugins:{
                    annotation: {
                        annotations: {
                            // mylabel: {
                            //     type: 'label',
                            //     xValue: 4.2,
                            //     yValue: 115,
                            //     backgroundColor: 'white',
                            //     borderColor: 'lightGray',
                            //     borderWidth: 1,
                            //     width:20,
                            //     height:8,
                            //     padding:14,
                            //     cornerRadius: 8,
                            //     content: ['BALANCE', '','$35.00'],
                            //     font: {
                            //            size: 12,
                            //            weight: 'bold',
                            //            color:'gray'
                            //         },      
                            //     textAlign: 'center',
                            //     display: true,
                            //     drawTime:'afterDatasetsDraw',
                            //     z:9999,
                            //     clip:false,
                            //     shadowBlur:20,
                            //     shadowOffsetY:4,
                            //     shadowOffsetX:6,
                            //     borderShadowColor:'Gray',
                            //     backgroundShadowColor:'gray',
                            //     callout:{
                            //         display:true,
                            //         side:'bottom',
                            //         length:10,
                            //         borderWidth:1,
                            //         borderColor:'lightGray'
                            //     }
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
                        max:116,
                        border:{
                            dash:[4,4],
                            color:'lightGray',
                            dark:{color:'gray'}
                        },
                        grid:{
                            drawTicks:true,
                            drawOnChartArea:true,
                            callback:function(context){
                                const value=context.ticks.value
                                if(value>100){
                                    return ''
                                }
                                return value
                            },
                            display:true,
                            color:function(context){
                                const value=context.tick.value;
                                if(value>100){
                                    return 'transparent'
                                }
                                return "lightGray"
                            },
                            dark:{color:function(context){
                                const value=context.tick.value;
                                if(value>100){
                                    return 'transparent'
                                }
                                return 'gray'
                            }},
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
               plugins={[customLabelPlugin]}
            />
        </div>
    )
}

export default LineChart