import Accounts from './Accounts';
import Transfer from '../components/Transfer';

export default function AccountDashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      <Accounts />
      <Transfer />
    </div>
  );
}
