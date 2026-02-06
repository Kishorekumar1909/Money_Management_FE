import { useEffect, useState } from 'react';
import api from '../services/api';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';


export default function CategorySummary() {
const [income, setIncome] = useState([]);
const [expense, setExpense] = useState([]);


useEffect(() => {
api.get('/summary/categories').then(res => {
const inc = [];
const exp = [];


res.data.forEach(i => {
if (i._id.type === 'income') {
inc.push({ name: i._id.category, value: i.total });
} else {
exp.push({ name: i._id.category, value: i.total });
}
});


setIncome(inc);
setExpense(exp);
});
}, []);


return (
<div className="grid md:grid-cols-2 gap-6">
<div className="card">
<h3 className="font-bold mb-2">Income by Category</h3>
<PieChart width={300} height={250}>
<Pie data={income} dataKey="value" nameKey="name" label />
<Tooltip />
<Legend />
</PieChart>
</div>


<div className="card">
<h3 className="font-bold mb-2">Expense by Category</h3>
<PieChart width={300} height={250}>
<Pie data={expense} dataKey="value" nameKey="name" label />
<Tooltip />
<Legend />
</PieChart>
</div>
</div>
);
}