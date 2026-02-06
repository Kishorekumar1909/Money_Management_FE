import { useState } from 'react';
import { deleteTransaction } from '../services/transactionService';
import EditTransactionModal from './EditTransactionModal';

export default function TransactionRow({ tx, reload }) {
  const [edit, setEdit] = useState(false);

  const remove = async () => {
    if (confirm('Delete transaction?')) {
      await deleteTransaction(tx._id);
      reload();
    }
  };

  return (
    <>
      <div className="flex justify-between border-b py-2">
        <div>
          <p>{tx.description}</p>
          <small>{new Date(tx.createdAt).toLocaleString()}</small>
        </div>
        <div className="flex gap-2">
          <span>₹{tx.amount}</span>
          <button onClick={() => setEdit(true)}>✏️</button>
          <button onClick={remove}>🗑</button>
        </div>
      </div>

      {edit && (
        <EditTransactionModal
          tx={tx}
          onClose={() => setEdit(false)}
          onSaved={reload}
        />
      )}
    </>
  );
}
