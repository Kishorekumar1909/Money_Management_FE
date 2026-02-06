import { useEffect, useState } from 'react';
import api from '../services/api';


// export default function History() {
// const [list, setList] = useState([]);


// useEffect(() => {
// api.get('/history').then(res => setList(res.data.data));
// }, []);


// return (
// <div className="p-6">
// <h2 className="text-xl mb-4">Transaction History</h2>
// {list.map(t => (
// <div key={t._id} className="card mb-2">
// {t.description} - {t.amount}
// </div>
// ))}
// </div>
// );
// }

import TransactionList from '../components/TransactionList';

export default function History() {
  return (
    <div className="p-6">
      <TransactionList />
    </div>
  );
}
