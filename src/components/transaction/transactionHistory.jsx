import styles from "./transactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction, index) => (
          <tr key={index} id={transaction.id}>
            <td>{transaction.type.toUpperCase(0)}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;