import { useEffect, useState } from 'react';
import { getTransactions } from '../services/transactionService';
import TransactionRow from './TransactionRow';

export default function TransactionList() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await getTransactions();
    setData(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="card p-4">
      <h3 className="font-bold mb-2">History</h3>
      {data.map(tx => (
        <TransactionRow key={tx._id} tx={tx} reload={load} />
      ))}
    </div>
  );
}
