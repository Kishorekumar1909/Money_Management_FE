import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';


export default function Charts({ data }) {
const formatted = data.map(d => ({ name: d._id, amount: d.total }));


return (
<BarChart width={300} height={250} data={formatted}>
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Bar dataKey="amount" />
</BarChart>
);
}