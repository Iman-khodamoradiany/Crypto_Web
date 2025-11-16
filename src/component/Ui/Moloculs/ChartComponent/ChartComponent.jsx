import {Chart,CategoryScale,LinearScale,PointElement,LineElement,Legend,Filler} from "chart.js"
import { lineChartInfo } from "../../../../Core/constans/lineChartInfo"
import { useRef, useEffect,useState } from "react"
import LineChart from "../LineChart/LineChart"
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(CategoryScale,LinearScale,PointElement,LineElement,Legend,Filler,annotationPlugin)

function ChartComponent(){
    const canvasRef = useRef(null);
    const[lineChartData,setLineChartData]=useState(null)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, "rgba(210, 238, 130, 1)");
    gradient.addColorStop(1, "rgba(243,225,107,0)");
    
    const chartData={
    labels:lineChartInfo.map(item=>item.xValue),
    datasets:[
        {  
           label:"first",
           data:lineChartInfo.map(item=>item.yValue1),
           fill:{
            value:-30
           },
           backgroundColor:gradient,
           borderColor:'#00bc00',
           tension:0.3,
           pointRadius:0,
           borderWidth:4
        },
        {
           label:"Second",
           data:lineChartInfo.map(item=>item.yValue2),
           borderColor:'Orange',
           tension:0.4,
           pointRadius:0,
           borderWidth:2 
        }
        
    ]
    
}

    setLineChartData(chartData);
    }, []);

    return(
        <div className="chart-wrapper">
           <canvas ref={canvasRef} style={{ display: "none" }} />
            {lineChartData && <LineChart lineChartData={lineChartData} />}
        </div>
    )
}

export default ChartComponent