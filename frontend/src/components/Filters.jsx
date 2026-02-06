import { useState } from 'react';
import api from '../services/api';


export default function Filters({ onResult }) {
const [filters, setFilters] = useState({
from: '',
to: '',
category: '',
division: '',
type: '',
account: ''
});


const change = e => {
setFilters({ ...filters, [e.target.name]: e.target.value });
};


const apply = async () => {
const params = Object.fromEntries(
Object.entries(filters).filter(([_, v]) => v)
);
const res = await api.get('/transactions/filter', { params });
onResult(res.data);
};


const reset = () => {
setFilters({ from:'', to:'', category:'', division:'', type:'', account:'' });
api.get('/transactions').then(r => onResult(r.data));
};


return (
<div className="card mb-4 grid grid-cols-2 md:grid-cols-3 gap-3">
<input type="date" name="from" value={filters.from} onChange={change} className="input" />
<input type="date" name="to" value={filters.to} onChange={change} className="input" />


<input name="category" placeholder="Category" value={filters.category} onChange={change} className="input" />


<select name="division" value={filters.division} onChange={change} className="input">
<option value="">Division</option>
<option value="Personal">Personal</option>
<option value="Office">Office</option>
</select>


<select name="type" value={filters.type} onChange={change} className="input">
<option value="">Type</option>
<option value="income">Income</option>
<option value="expense">Expense</option>
</select>


<input name="account" placeholder="Account" value={filters.account} onChange={change} className="input" />


<div className="col-span-2 md:col-span-3 flex gap-2">
<button onClick={apply} className="btn">Apply</button>
<button onClick={reset} className="btn bg-gray-500">Reset</button>
</div>
</div>)
}