import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import currencySymbols from '../currencySymbols';

export default function Table({ list, setList, total, setTotal, selectedCurrency, editRow, deleteRow, isEditable }) {
    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 shadow-lg">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                            Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                            Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                            Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                            Amount
                        </th>
                        {isEditable && (
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                Actions
                            </th>
                        )}
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {list.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                                {item.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                                {item.quantity}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                                {`${currencySymbols[selectedCurrency]} ${item.price}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                                {`${currencySymbols[selectedCurrency]} ${item.amount}`}
                            </td>
                            {isEditable && (
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium border">
                                    <button
                                        onClick={() => editRow(item.id)}
                                        className="text-blue-600 hover:text-blue-900 mr-2"
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button
                                        onClick={() => deleteRow(item.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className="py-4 ml-3 mr-1.5 text-right font-medium text-gray-800">
                    Total: {currencySymbols[selectedCurrency]} {total.toFixed(2)}
                </p>
            </div>
        </div>
    );
}







