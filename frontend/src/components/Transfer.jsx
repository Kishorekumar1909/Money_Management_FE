import { useEffect, useState } from 'react';
import { getAccounts, transferMoney } from '../services/accountService';

export default function Transfer() {
  const [acc, setAcc] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    getAccounts().then(r => setAcc(r.data));
  }, []);

  const submit = async () => {
    await transferMoney({ from, to, amount });
    alert('Transfer successful');
  };

  return (
    <div className="card p-4">
      <h3 className="font-bold mb-2">Transfer Money</h3>

      <select onChange={e => setFrom(e.target.value)} className="input">
        <option>From</option>
        {acc.map(a => <option key={a._id} value={a._id}>{a.name}</option>)}
      </select>

      <select onChange={e => setTo(e.target.value)} className="input">
        <option>To</option>
        {acc.map(a => <option key={a._id} value={a._id}>{a.name}</option>)}
      </select>

      <input className="input" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <button className="btn mt-2" onClick={submit}>Transfer</button>
    </div>
  );
}
