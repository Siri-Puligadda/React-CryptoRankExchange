import { useState } from "react";
import Table from "./Table";

function Cryptodisplay() {
  const balance = 17042.67;
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value === "") setError("Amount cannot be empty");
    else if (value < 0.01) setError("Amount cannot be less than $0.01");
    else if (value > balance)
      setError("Amount cannot exceed the available balance");
    else setError("");
    setAmount(value);
  };

  return (
    <div
      className="layout-column align-items-center mx-auto"
      style={{ textAlign: "center" }}
    >
      <h3>CryptoRank Exchange</h3>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              value={amount}
              onChange={handleOnChange}
              placeholder="USD"
            />{" "}
            of my $<span>{balance}</span>:
          </label>
          {error && (
            <p
              style={{ color: "red" }}
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {" "}
              {error}
            </p>
          )}
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table amount={amount} error={error} />
    </div>
  );
}

export default Cryptodisplay;
