import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import './ChartZagadjenje.css';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const ChartZagadjenje = () => {
  const [data, setData] = useState([]);
  const [formattedTime,setFormatedTime] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Zagadjenje',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const socket = io('http://localhost:8000');

    socket.on('message', (message) => {
      const newData = JSON.parse(message);
      setData((prevData) => [...prevData, newData]);

      const dateTime = new Date();
      const hours = dateTime.getHours().toString().padStart(2,'0');
      const minutes = dateTime.getMinutes().toString().padStart(2,'0');
      const seconds = dateTime.getSeconds().toString().padStart(2,'0');
      const newTime = `${hours}:${minutes}:${seconds}`;
      setFormatedTime((prevData)=>[...prevData, newTime ])
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    
    if (data.length > 0) {
      const chartLabels = data.map((entry) => {
        const date = new Date();
      
        return date.toLocaleDateString('en-GB'); 
      });

     
      

      const chartTemperatureData = data.map((entry) => entry.aqi);
      

      setChartData({
        labels: chartLabels,
        datasets: [
          {
            label: 'Zagadjenje',
            data: chartTemperatureData,
            fill: false,
            borderColor: 'rgb(255,0,0)',
            tension: 0.1,
            elements: {
              point: {
                radius: 0,
              },
              line: {
                tension: 0.1,
              },
            },
          },
        ],
      });
    }
  }, [data]);

 

  return (
    <div className='chart-container'>

       <h1>Prikaz zagadjenog vazduha u Smederevu</h1>
       <h2>Glavni zagadjivac trenutno je: <span style={{ color: 'red' }} > {(data.length>0) ? data[data.length-1].glavni : '   ..loading..   '} </span>  </h2>
       <h2>AQI iznosi: <span style={{ color: 'red' }} > {(data.length>0) ? data[data.length-1].aqi : '   ..loading..   '} </span>   </h2>
       <h3>Poslednji put azurirano:  <span style={{ color: 'blue' }} >   {(formattedTime.length>0) ? formattedTime[formattedTime.length-1] : '   ..loading..   ' } </span>  </h3>
     
      
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default ChartZagadjenje;