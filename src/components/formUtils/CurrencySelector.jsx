import React from 'react';
import currencySymbols from '../currencySymbols';

const CurrencySelector = ({ selectedCurrency, setSelectedCurrency }) => {
    return (
        <div className="flex flex-col w-full mx-auto lg:w-1/3 lg:px-2 my-2 lg:mb-3">
            <label
                htmlFor="currency"
                className="block text-sm font-medium text-gray-700"
            >
                Select Currency
            </label>
            <select
                name="currency"
                id="currency"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
            >
                {Object.entries(currencySymbols).map(([currency, symbol]) => (
                    <option key={currency} value={currency}>
                        {currency} ({symbol})
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;



