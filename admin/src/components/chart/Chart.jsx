import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Chart() {

    const data = [
        {
          month: 'January',
          sales: 25000,
        },
        {
            month: 'February',
            sales: 55000,
        },
        {
            month: 'March',
            sales: 700000,
        },
        {
            month: 'April',
            sales: 200000,
        },
        {
            month: 'May',
            sales: 1500000,
        },
        {
            month: 'June',
            sales: 3000000,
        },
        {
            month: 'July',
            sales: 1000000,
        },
      ];

  return (
    <div className='chart'>
        <h3 className="chartTitle">Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={ 4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="month" stroke="#5550bd"/>
                <Line type="monotone" dataKey="sales" stroke="#5550bd" />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart