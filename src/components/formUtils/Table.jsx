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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border w-40">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Hours Invested</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Date Briefed</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Date Delivered</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Amount</th>
                        {isEditable && (
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Actions</th>
                        )}
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {list.map((item) => (
                        <tr key={item.id}>
                            <td className="py-2 px-6 text-sm text-gray-900 border w-60 overflow-hidden text-ellipsis">{item.title}</td>
                            <td className="py-2 px-6 text-sm text-gray-900 border">{item.hoursInvested}</td>
                            <td className="py-2 px-6 text-sm text-gray-900 border">{item.dateBriefed}</td>
                            <td className="py-2 px-6 text-sm text-gray-900 border">{item.dateDelivered}</td>
                            <td className="py-2 px-6 text-sm text-gray-900 border w-40">{`${currencySymbols[selectedCurrency]} ${item.amount}`}</td>
                            {isEditable && (
                                <td className="px-6 py-4 text-right text-sm font-medium border w-6">
                                    <button onClick={() => editRow(item.id)} className="text-blue-600 hover:text-blue-900">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => deleteRow(item.id)} className="text-red-600 hover:text-red-900 ml-4">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={isEditable ? 5 : 4} className="text-right px-6 py-4 whitespace-nowrap text-sm text-gray-900 border font-bold">Total:</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">{`${currencySymbols[selectedCurrency]} ${total.toFixed(2)}`}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}










