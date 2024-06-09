import React, { useState } from 'react';
import reseticon from '../assets/icons/reseticon.png';
import plussign from '../assets/icons/plussign.png';
import crosssign from '../assets/icons/crosssign.png';

const DataInput = () => {
    const [basicSalary, setBasicSalary] = useState('');
    const [earnings, setEarnings] = useState('');
    const [deductions, setDeductions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, such as sending data to an API or processing it locally
        console.log('Form submitted:', { basicSalary, earnings, deductions });
    };

    return (
        <div className="w-1/3 mx-auto bg-white shadow-md rounded-lg p-6 mr-3">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold mb-4">Calculate Your Salary</h2>
                    <div className="flex items-center">
                        <img src={reseticon} alt="Reset Icon" className="mr-2"/>
                        <button type="button" className="text-primaryBlue" onClick={() => {
                            setBasicSalary('');
                            setEarnings('');
                            setDeductions('');
                        }}>
                            Reset
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="basicSalary" className="block text-sm font-medium text-gray-700"><strong>Basic
                        Salary</strong></label>
                    <input
                        type="number"
                        id="basicSalary"
                        className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                        value={basicSalary}
                        placeholder= "Basic Salary"
                        onChange={(e) => setBasicSalary(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="earnings"
                           className="block text-sm font-medium text-gray-700"><strong>Earnings</strong></label>
                    <span className="text-customGray">Allowance, Fixed Allowance, Bonus and etc.</span>
                    <div className="flex items-center mt-1">
                        <div className="w-1/3">
                            <input
                                type="text"
                                id="earningsTitle"
                                placeholder="Pay Details(Title)"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="w-1/3 ml-2">
                            <input
                                type="number"
                                id="earningsValue"
                                placeholder="Amount"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <img src={crosssign} alt="Plus" className="mx-2"/>
                        <input
                            type="checkbox"
                            id="terms"
                            className="form-checkbox h-4 w-4 text-primaryBlue focus:ring focus:ring-primaryBlue"
                        />
                        <label htmlFor="terms" className="ml-2 text-gray-700 font-medium">EPF/ETF</label>
                    </div>
                    <div className="flex items-center mt-2">
                        <img src={plussign} alt="Plus" className="mr-2"/>
                        <button type="button" className="text-primaryBlue font-semibold">
                            Add New Allowance
                        </button>
                    </div>
                </div>
                <hr className="border-t border-gray-300 my-4"/>
                <div className="mb-4">
                    <label htmlFor="deductions"
                           className="block text-sm font-medium text-gray-700"><strong>Deductions</strong></label>
                    <span className="text-customGray">Salary Advances, Loan Deductions and all</span>
                    <div className="flex items-center mt-1">
                        <div className="w-1/3">
                            <input
                                type="text"
                                id="deductionsTitle"
                                placeholder="Deduction Details"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="w-1/3 ml-2">
                            <input
                                type="number"
                                id="deductionsValue"
                                placeholder = "Amount"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
                                value={deductions}
                                required
                            />
                        </div>
                        <img src={crosssign} alt="Plus" className="mx-2"/>
                        <input
                            type="checkbox"
                            id="terms"
                            className="form-checkbox h-4 w-4 text-primaryBlue focus:ring focus:ring-primaryBlue"
                        />
                        <label htmlFor="terms" className="ml-2 text-gray-700 font-medium">EPF/ETF</label>
                    </div>
                    <div className="flex items-center pt-4">
                        <img src={plussign} alt="Plus" className="mr-2"/>
                        <button type="button" className="text-primaryBlue font-semibold">
                            Add New Deduction
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default DataInput;