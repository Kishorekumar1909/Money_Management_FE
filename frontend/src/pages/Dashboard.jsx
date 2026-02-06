import { useEffect, useState } from 'react';
import api from '../services/api';
import Charts from '../components/Charts';
import TransactionModal from '../components/TransactionModal';
import Filters from '../components/Filters';


export default function Dashboard() {
const [transactions, setTransactions] = useState([]);
const [chart, setChart] = useState([]);


useEffect(() => {
api.get('/transactions').then(res => setTransactions(res.data));
api.get('/dashboard/monthly').then(res => setChart(res.data));
}, []);


return (
<div className="p-6">
<TransactionModal />
{chart?.length > 0 && (
  <Charts data={chart}/>
)}
{/* <div className="bg-blue-600 text-white p-4">
  Tailwind v4 Working
</div> */}

<h2 className="text-lg font-bold mt-6 mb-2">Filter Transactions</h2>
<Filters onResult={setTransactions} />


<div className="space-y-2">
{transactions.map(t => (
<div key={t._id} className="card flex justify-between">
<span>{t.description} ({t.category})</span>
<span className={t.type === 'income' ? 'text-green-600' : 'text-red-600'}>
₹{t.amount}
</span>
</div>
))}
</div>
</div>
);
}