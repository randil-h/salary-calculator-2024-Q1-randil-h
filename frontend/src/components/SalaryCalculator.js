import React, { useState, useEffect } from 'react';
import DataInput from './DataInput';
import CalculationBar from './CalculationBar';

const SalaryCalculator = () => {
    const formatNumber = (value) => {
        if (value === '') return '0.00';
        const number = parseFloat(value.replace(/,/g, ''));
        return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const [basicSalary, setBasicSalary] = useState(() => {
        const savedValue = localStorage.getItem('basicSalary');
        return savedValue !== null ? savedValue : '0.00';
    });
    const [earnings, setEarnings] = useState(() => {
        const savedValue = localStorage.getItem('earnings');
        return savedValue !== null ? JSON.parse(savedValue) : [{ title: '', amount: '0.00', epfEtf: false }];
    });
    const [deductions, setDeductions] = useState(() => {
        const savedValue = localStorage.getItem('deductions');
        return savedValue !== null ? JSON.parse(savedValue) : [{ title: '', amount: '0.00', epfEtf: false }];
    });

    useEffect(() => {
        localStorage.setItem('basicSalary', basicSalary);
        localStorage.setItem('earnings', JSON.stringify(earnings));
        localStorage.setItem('deductions', JSON.stringify(deductions));
    }, [basicSalary, earnings, deductions]);

    const calculateTotal = (items) => {
        return items.reduce((total, item) => total + parseFloat(item.amount.replace(/,/g, '')), 0).toFixed(2);
    };

    const grossEarnings = parseFloat(basicSalary.replace(/,/g, '')) + parseFloat(calculateTotal(earnings));
    const grossDeductions = parseFloat(calculateTotal(deductions));
    const employeeEPF = (grossEarnings * 0.08).toFixed(2);
    const APIT = (grossEarnings * 0.03).toFixed(2);  // Example calculation
    const netSalary = (grossEarnings - grossDeductions - employeeEPF - APIT).toFixed(2);
    const employerEPF = (grossEarnings * 0.12).toFixed(2);
    const employerETF = (grossEarnings * 0.03).toFixed(2);
    const CTC = (grossEarnings + parseFloat(employerEPF) + parseFloat(employerETF)).toFixed(2);

    return (
        <div className="w-full flex">
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
                grossEarnings={grossEarnings}
                grossDeductions={grossDeductions}
                employeeEPF={employeeEPF}
                APIT={APIT}
                netSalary={netSalary}
                employerEPF={employerEPF}
                employerETF={employerETF}
                CTC={CTC}
            />
        </div>
    );
};

export default SalaryCalculator;