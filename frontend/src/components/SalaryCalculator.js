// SalaryCalculator.js
import React, { useState } from 'react';
import DataInput from './DataInput';
import CalculationBar from './CalculationBar';

const SalaryCalculator = () => {
    const [basicSalary, setBasicSalary] = useState('0.00');
    const [earnings, setEarnings] = useState([{ title: '', amount: '0.00', epfEtf: false }]);
    const [deductions, setDeductions] = useState([{ title: '', amount: '0.00', epfEtf: false }]);

    const formatNumber = (value) => {
        return parseFloat(value.replace(/,/g, '')).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    return (
        <div className="w-full bg-lightGray py-4 ">
            <div className="mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row">
                    <DataInput
                        basicSalary={basicSalary}
                        setBasicSalary={setBasicSalary}
                        earnings={earnings}
                        setEarnings={setEarnings}
                        deductions={deductions}
                        setDeductions={setDeductions}
                        formatNumber={formatNumber}
                    />
                    <CalculationBar
                        basicSalary={basicSalary}
                        earnings={earnings}
                        deductions={deductions}
                        formatNumber={formatNumber}
                    />
                </div>
            </div>
        </div>
    );
};

export default SalaryCalculator;