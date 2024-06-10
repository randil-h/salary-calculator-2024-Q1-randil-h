import React from 'react';

const CalculationBar = ({ basicSalary, grossEarnings, grossDeductions, employeeEPF, APIT, netSalary, employerEPF, employerETF, CTC }) => {
  return (
      <div className="w-1/4 mx-auto bg-white shadow-md rounded-lg p-6 border border-gray">
        <h2 className="text-xl font-bold mb-4">Your Salary</h2>
        <div className="pb-4 mb-4">
          <div className="flex justify-between">
            <span className="text-customGray font-semibold text-sm">Items</span>
            <span className="text-customGray font-semibold text-sm">Amount</span>
          </div>
          <div className="mt-3">
            <div className="flex justify-between">
              <span>Basic Salary</span>
              <span>{basicSalary}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Gross Earning</span>
              <span>{grossEarnings}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Gross Deduction</span>
              <span>- {grossDeductions}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Employee EPF (8%)</span>
              <span>- {employeeEPF}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>APIT</span>
              <span>- {APIT}</span>
            </div>
          </div>
        </div>
        <div className="border border-gray p-4 mb-4 rounded-lg">
          <div className="flex justify-between font-semibold">
            <span>Net Salary (Take Home)</span>
            <span>{netSalary}</span>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-sm text-customGray font-semibold mb-2">Contribution from the Employer</h3>
          <div className="flex justify-between">
            <span>Employee EPF (12%)</span>
            <span>{employerEPF}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Employee ETF (3%)</span>
            <span>{employerETF}</span>
          </div>
          <div className="flex justify-between font-normal mt-6">
            <span>CTC (Cost to Company)</span>
            <span>{CTC}</span>
          </div>
        </div>
      </div>
  );
};

export default CalculationBar;