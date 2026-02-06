import { useEffect, useState } from 'react';
import { getAccounts, addAccount } from '../services/accountService';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getAccounts();
    setAccounts(res.data);
  };

  const submit = async () => {
    await addAccount(name);
    setName('');
    load();
  };

  return (
    <div className="p-6">
      <h2 className="font-bold text-xl mb-4">Accounts</h2>

      <div className="flex gap-2 mb-4">
        <input className="border p-2" value={name}
          onChange={e => setName(e.target.value)} placeholder="Account Name" />
        <button className="btn" onClick={submit}>Add</button>
      </div>

      {accounts.map(a => (
        <div key={a._id} className="card mb-2">
          {a.name} — ₹{a.balance}
        </div>
      ))}
    </div>
  );
}
