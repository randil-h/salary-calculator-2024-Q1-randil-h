import React, { useState } from 'react';
import reseticon from '../assets/icons/reseticon.png';
import plussign from '../assets/icons/plussign.png';
import crosssign from '../assets/icons/crosssign.png';

const DataInput = () => {
    const [basicSalary, setBasicSalary] = useState('');
    const [earnings, setEarnings] = useState([{ title: '', amount: '', epfEtf: false }]);
    const [deductions, setDeductions] = useState([{ title: '', amount: '', epfEtf: false }]);

    const handleEarningsChange = (index, field, value) => {
        const newEarnings = [...earnings];
        newEarnings[index][field] = value;
        setEarnings(newEarnings);
    };

    const handleDeductionsChange = (index, field, value) => {
        const newDeductions = [...deductions];
        newDeductions[index][field] = value;
        setDeductions(newDeductions);
    };

    const handleAddEarnings = () => {
        setEarnings([...earnings, { title: '', amount: '', epfEtf: false }]);
    };

    const handleAddDeductions = () => {
        setDeductions([...deductions, { title: '', amount: '', epfEtf: false }]);
    };

    const handleRemoveEarnings = (index) => {
        const newEarnings = [...earnings];
        newEarnings.splice(index, 1);
        setEarnings(newEarnings);
    };

    const handleRemoveDeductions = (index) => {
        const newDeductions = [...deductions];
        newDeductions.splice(index, 1);
        setDeductions(newDeductions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, such as sending data to an API or processing it locally
        console.log('Form submitted:', { basicSalary, earnings, deductions });
    };

    return (
        <div className="w-1/3 mx-auto bg-white shadow-md rounded-lg p-6 mr-3">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold mb-4">Calculate Your Salary</h2>
                    <div className="flex items-center">
                        <img src={reseticon} alt="Reset Icon" className="mr-2 w-4 h-4" />
                        <button type="button" className="text-primaryBlue font-semibold text-sm" onClick={() => {
                            setBasicSalary('');
                            setEarnings([{ title: '', amount: '', epfEtf: false }]);
                            setDeductions([{ title: '', amount: '', epfEtf: false }]);
                        }}>
                            Reset
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="basicSalary" className="block text-md font-medium text-gray-700"><strong>Basic Salary</strong></label>
                    <input
                        type="number"
                        id="basicSalary"
                        className="mt-2 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                        value={basicSalary}
                        placeholder="Basic Salary"
                        onChange={(e) => setBasicSalary(e.target.value)}
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
                                    type="number"
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
                        <img src={plussign} alt="Plus" className="mr-2" />
                        <button type="button" className="text-primaryBlue font-semibold text-sm" onClick={handleAddEarnings}>
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
                                    type="number"
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
                    <div className="flex items-center pt-4 mt-5">
                        <img src={plussign} alt="Plus" className="mr-2" />
                        <button type="button" className="text-primaryBlue font-semibold text-sm" onClick={handleAddDeductions}>
                            Add New Deduction
                        </button>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button type="submit" className="px-4 py-2 bg-primaryBlue text-white font-semibold rounded-md shadow-md hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DataInput;
