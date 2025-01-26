import { cryptocurrencyList } from "./cryptocurrencyList";

function Table({ amount, error }) {
  function calculation(rate) {
    if (error) return "n/a";
    else if (amount === "") return "0.00000000";
    else return parseFloat(amount * rate).toFixed(8);
  }
  return (
    // <div className="card card-text mt-10 mx-4">
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((coin, index) => (
            <tr>
              <td>{coin.name}</td>
              <td>
                1 USD = {coin.rate} {coin.code}
              </td>
              <td>{calculation(coin.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    //</div>
  );
}

export default Table;
