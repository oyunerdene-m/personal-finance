import { useLocation } from 'react-router-dom';
import Accounts from './accounts';
import Transactions from './transactions';

export default function Dashboard() {
	const location = useLocation();
	const path = location.pathname;
	return (
		<div style={{ border: '1px solid green' }}>
			<div>
				<h4>Total Balance</h4>
				<span>$32000.00</span>
			</div>
			<div>
				<div>
					<p>Income</p>
					<span>$8272</span>
				</div>
				<div>
					<p>Expense</p>
					<span>$2002</span>
				</div>
			</div>
			<div>
				<Accounts path={path} />
			</div>
			<div>
				<Transactions path={path} />
			</div>
		</div>
	);
}
