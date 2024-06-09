import React from 'react';

const CalculationBar = () => {
  return (
    <div className="w-1/4 mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your salary</h2>
      <div className="pb-4 mb-4">
        <div className="flex justify-between">
          <span className="text-gray font-medium">Items</span>
          <span className="text-gray font-medium">Amount</span>
        </div>
        <div className="mt-2">
          <div className="flex justify-between">
            <span>Basic Salary</span>
            <span>150,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Gross Earning</span>
            <span>160,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Gross Deduction</span>
            <span>- 8,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Employee EPF (8%)</span>
            <span>- 12,160.00</span>
          </div>
          <div className="flex justify-between">
            <span>APIT</span>
            <span>- 3,740.00</span>
          </div>
        </div>
      </div>
      <div className="border border-gray p-4 mb-4 rounded-lg">
        <div className="flex justify-between font-semibold">
          <span>Net Salary (Take Home)</span>
          <span>136,100.00</span>
        </div>
      </div>
      <div className=" pt-4">
        <h3 className="text-lg text-gray font-medium mb-2">Contribution from the Employer</h3>
        <div className="flex justify-between">
          <span>Employee EPF (12%)</span>
          <span>18,240.00</span>
        </div>
        <div className="flex justify-between">
          <span>Employee ETF (3%)</span>
          <span>4,560.00</span>
        </div>
        <div className="flex justify-between font-semibold mt-4">
          <span>CTC (Cost to Company)</span>
          <span>174,800.00</span>
        </div>
      </div>
    </div>
  );
}

export default CalculationBar;
