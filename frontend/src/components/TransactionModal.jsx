import { useState } from 'react';
import api from '../services/api';


export default function TransactionModal() {
const [open, setOpen] = useState(false);


const submit = async e => {
e.preventDefault();
await api.post('/transactions', {
type: e.target.type.value,
amount: e.target.amount.value,
category: e.target.category.value,
division: e.target.division.value,
description: e.target.description.value
});
setOpen(false);
window.location.reload();
};


return (
<>
<button className="btn" onClick={() => setOpen(true)}>Add</button>
    {open && (
    <form onSubmit={submit} className="card mt-4">
        <select name="type" className="input">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
        </select>
        <input name="amount" className="input" placeholder="Amount" />
        <input name="category" className="input" placeholder="Category" />
        <select name="division" className="input">
            <option>Personal</option>
            <option>Office</option>
        </select>
        <input name="description" className="input" placeholder="Description" />
        <button className="btn">Save</button>
    </form>
)}
</>
);
}