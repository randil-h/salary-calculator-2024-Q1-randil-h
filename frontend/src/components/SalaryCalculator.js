import React, { useState, useEffect } from 'react';
import DataInput from './DataInput';
import CalculationBar from './CalculationBar';

const SalaryCalculator = () => {
    const [basicSalary, setBasicSalary] = useState(() => {
        const savedBasicSalary = localStorage.getItem('basicSalary') || '0.00';
        return savedBasicSalary;
    });

    const [earnings, setEarnings] = useState(() => {
        const savedEarnings = JSON.parse(localStorage.getItem('earnings')) || [{ title: '', amount: '0.00', epfEtf: false }];
        return savedEarnings;
    });

    const [deductions, setDeductions] = useState(() => {
        const savedDeductions = JSON.parse(localStorage.getItem('deductions')) || [{ title: '', amount: '0.00', epfEtf: false }];
        return savedDeductions;
    });

    // Save data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('basicSalary', basicSalary);
    }, [basicSalary]);

    useEffect(() => {
        localStorage.setItem('earnings', JSON.stringify(earnings));
    }, [earnings]);

    useEffect(() => {
        localStorage.setItem('deductions', JSON.stringify(deductions));
    }, [deductions]);

    const formatNumber = (value) => {
        if (!value) return '0.00';
        const number = parseFloat(value.replace(/,/g, ''));
        return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    return (
        <div className="w-full bg-white py-4 ">
            <div className="sm:px-6 lg:px-8">
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