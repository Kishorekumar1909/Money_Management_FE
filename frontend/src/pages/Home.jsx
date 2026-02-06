import { useEffect, useState } from 'react';
import api from '../services/api';


export default function Home() {
const [data, setData] = useState([]);


useEffect(() => {
api.get('/transactions').then(res => setData(res.data));
}, []);


return (
<div className="p-6">
<h1 className="text-xl font-bold">Transactions</h1>
{data.map(t => (
<div key={t._id}>{t.description} - {t.amount}</div>
))}
</div>
);
}