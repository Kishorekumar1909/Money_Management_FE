import { useState } from 'react';
import { updateTransaction } from '../services/transactionService';

export default function EditTransactionModal({ tx, onClose, onSaved }) {
  const [desc, setDesc] = useState(tx.description);
  const [amount, setAmount] = useState(tx.amount);

  const save = async () => {
    await updateTransaction(tx._id, { description: desc, amount });
    onSaved();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-80">
        <h3 className="font-bold mb-2">Edit Transaction</h3>
        <input className="input" value={desc} onChange={e => setDesc(e.target.value)} />
        <input className="input mt-2" value={amount}
          onChange={e => setAmount(e.target.value)} />
        <div className="flex justify-end gap-2 mt-4">
          <button className="btn" onClick={save}>Save</button>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
