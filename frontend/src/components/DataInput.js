import React from 'react';
import reseticon from '../assets/icons/reseticon.png';
import plussign from '../assets/icons/plussign.png';
import crosssign from '../assets/icons/crosssign.png';

const DataInput = ({
                       basicSalary,
                       setBasicSalary,
                       earnings,
                       setEarnings,
                       deductions,
                       setDeductions,
                       formatNumber
                   }) => {
    // Handle changes to earnings input fields
    const handleEarningsChange = (index, field, value) => {
        const newEarnings = [...earnings];
        newEarnings[index][field] = field === 'amount' ? value : value;
        setEarnings(newEarnings);
    };

    // Handle changes to deductions input fields, including the EPF/ETF checkbox
    const handleDeductionsChange = (index, field, value) => {
        const newDeductions = [...deductions];

        if (field === 'epfEtf') {
            newDeductions[index][field] = value;
            const basicSalaryNum = parseFloat(basicSalary.replace(/,/g, ''));
            newDeductions[index]['amount'] = value ? formatNumber((basicSalaryNum * 0.10).toFixed(2)) : '0.00';
        } else {
            newDeductions[index][field] = value;
        }

        setDeductions(newDeductions);
    };

    // Handle changes to the basic salary input field
    const handleBasicSalaryChange = (value) => {
        const formattedValue = formatNumber(value);
        setBasicSalary(formattedValue);
    };

    // Add a new earnings input set
    const handleAddEarnings = () => {
        const newEarnings = [...earnings, { title: '', amount: '0.00', epfEtf: false }];
        setEarnings(newEarnings);
    };

    // Add a new deductions input set
    const handleAddDeductions = () => {
        const newDeductions = [...deductions, { title: '', amount: '0.00', epfEtf: false }];
        setDeductions(newDeductions);
    };

    // Remove an earnings input set
    const handleRemoveEarnings = (index) => {
        const newEarnings = [...earnings];
        newEarnings.splice(index, 1);
        setEarnings(newEarnings);
    };

    // Remove a deductions input set
    const handleRemoveDeductions = (index) => {
        const newDeductions = [...deductions];
        newDeductions.splice(index, 1);
        setDeductions(newDeductions);
    };

    // Reset all input fields to their default values
    const handleReset = () => {
        setBasicSalary('0.00');
        setEarnings([{ title: '', amount: '0.00', epfEtf: false }]);
        setDeductions([{ title: '', amount: '0.00', epfEtf: false }]);
        localStorage.clear();
    };

    return (
        <div className="ml-64 w-1/3 bg-bgGray shadow-md rounded-lg p-8 mr-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold mb-4">Calculate Your Salary</h2>
                <div className="flex items-center" onClick={handleReset}>
                    <img src={reseticon} alt="Reset Icon" className="mr-2 w-5 h-4" />
                    <button type="button" className="text-primaryBlue font-semibold text-sm">
                        Reset
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="basicSalary" className="block text-md font-medium text-gray-700"><strong>Basic Salary</strong></label>
                <input
                    type="text"
                    id="basicSalary"
                    className="mt-2 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                    value={basicSalary}
                    placeholder="Basic Salary"
                    onChange={(e) => handleBasicSalaryChange(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4 mt-6">
                <label htmlFor="earnings" className="block text-md font-medium text-gray-700"><strong>Earnings</strong></label>
                <span className="text-customGray font-semibold text-xs">Allowance, Fixed Allowance, Bonus and etc.</span>
                {earnings.map((earning, index) => (
                    <div className="flex items-center mt-2" key={index}>
                        <div className="w-1/3">
                            <input
                                type="text"
                                placeholder="Pay Details(Title)"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                                value={earning.title}
                                onChange={(e) => handleEarningsChange(index, 'title', e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-1/3 ml-2">
                            <input
                                type="text"
                                placeholder="Amount"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                                value={earning.amount}
                                onChange={(e) => handleEarningsChange(index, 'amount', e.target.value)}
                                required
                            />
                        </div>
                        <img src={crosssign} alt="Cross" className="mx-2 w-5 h-5 cursor-pointer" onClick={() => handleRemoveEarnings(index)} />
                        <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3 text-primaryBlue focus:ring focus:ring-primaryBlue"
                            checked={earning.epfEtf}
                            onChange={(e) => handleEarningsChange(index, 'epfEtf', e.target.checked)}
                        />
                        <label className="ml-2 text-gray-700 font-medium text-sm">EPF/ETF</label>
                    </div>
                ))}
                <div className="flex items-center mt-6">
                    <img src={plussign} alt="Plus" onClick={handleAddEarnings} className="mr-2" />
                    <button type="button" onClick={handleAddEarnings} className="text-primaryBlue font-semibold text-sm">
                        Add New Allowance
                    </button>
                </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="mb-4 mt-2">
                <label htmlFor="deductions" className="block text-md font-medium text-gray-700"><strong>Deductions</strong></label>
                <span className="text-customGray font-semibold text-xs">Salary Advances, Loan Deductions and all</span>
                {deductions.map((deduction, index) => (
                    <div className="flex items-center mt-2" key={index}>
                        <div className="w-1/3">
                            <input
                                type="text"
                                placeholder="Deduction Details"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                                value={deduction.title}
                                onChange={(e) => handleDeductionsChange(index, 'title', e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-1/3 ml-2">
                            <input
                                type="text"
                                placeholder="Amount"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                                value={deduction.amount}
                                onChange={(e) => handleDeductionsChange(index, 'amount', e.target.value)}
                                required
                            />
                        </div>
                        <img src={crosssign} alt="Cross" className="mx-2 w-5 h-5 cursor-pointer" onClick={() => handleRemoveDeductions(index)} />
                        <input
                            type="checkbox"
                            className="form-checkbox h-3 w-3 text-primaryBlue focus:ring focus:ring-primaryBlue"
                            checked={deduction.epfEtf}
                            onChange={(e) => handleDeductionsChange(index, 'epfEtf', e.target.checked)}
                        />
                        <label className="ml-2 text-gray-700 font-medium text-sm">EPF/ETF</label>
                    </div>
                ))}
                <div className="flex items-center mt-6">
                    <img src={plussign} alt="Plus" onClick={handleAddDeductions} className="mr-2" />
                    <button type="button" onClick={handleAddDeductions} className="text-primaryBlue font-semibold text-sm">
                        Add New Deduction
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataInput;