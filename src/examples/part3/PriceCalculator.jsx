import React, { useState } from 'react';

function PriceCalculator() {
  const [weight, setWeight] = useState(0);
  const [total, setTotal] = useState(0);
  const [discountType, setDiscountType] = useState("None");

  const calculateDiscount = () => {
    let discount = 0;

    if (discountType === "Weight-based" && weight > 10) {
      discount = 0.05 * total;
    } else if (discountType === "Flat 10%") {
      discount = 0.10 * total;
    }

    return (total - discount).toFixed(2);
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Price Calculator</h2>

      <div className="mb-2">
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label>Total Price: </label>
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(Number(e.target.value))}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label>Discount Type: </label>
        <select
          value={discountType}
          onChange={(e) => setDiscountType(e.target.value)}
          className="border p-1 w-full"
        >
          <option value="None">None</option>
          <option value="Weight-based">Weight-based</option>
          <option value="Flat 10%">Flat 10%</option>
        </select>
      </div>

      <hr className="my-4" />

      <div>
        <strong>Final Price: ₹{calculateDiscount()}</strong>
      </div>
    </div>
  );
}

export default PriceCalculator;
