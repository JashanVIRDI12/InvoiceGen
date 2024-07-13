import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import CurrencySelector from './CurrencySelector';
import Table from './Table';

export default function TableForm({
                                      title, setTitle,
                                      hoursInvested, setHoursInvested,
                                      dateBriefed, setDateBriefed,
                                      dateDelivered, setDateDelivered,
                                      amount, setAmount,
                                      list, setList,
                                      total, setTotal,
                                      selectedCurrency, setSelectedCurrency
                                  }) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        const newTotal = list.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
        setTotal(newTotal);
    }, [list, setTotal]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !hoursInvested || !dateBriefed || !dateDelivered || !amount) {
            alert('Please fill in all fields.');
            return;
        }

        const newItem = {
            id: isEditing ? currentId : uuid(),
            title,
            hoursInvested,
            dateBriefed,
            dateDelivered,
            amount: parseFloat(amount)
        };

        if (isEditing) {
            setList(list.map(item => item.id === currentId ? newItem : item));
            setIsEditing(false);
            setCurrentId(null);
        } else {
            setList([...list, newItem]);
        }

        setTitle("");
        setHoursInvested("");
        setDateBriefed("");
        setDateDelivered("");
        setAmount("");
    };

    const deleteRow = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const editRow = (id) => {
        const itemToEdit = list.find(item => item.id === id);
        setTitle(itemToEdit.title);
        setHoursInvested(itemToEdit.hoursInvested);
        setDateBriefed(itemToEdit.dateBriefed);
        setDateDelivered(itemToEdit.dateDelivered);
        setAmount(itemToEdit.amount);
        setIsEditing(true);
        setCurrentId(id);
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="flex flex-col mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between mb-4">
                    <div className="flex flex-col w-full lg:w-1/3 lg:pr-2 mb-4 lg:mb-0">
                        <label htmlFor="hoursInvested" className="block text-sm font-medium text-gray-700">Hours Invested</label>
                        <input
                            type="number"
                            id="hoursInvested"
                            placeholder="Hours Invested"
                            value={hoursInvested}
                            onChange={(e) => setHoursInvested(Number(e.target.value))}
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div className="flex flex-col w-full lg:w-1/3 lg:px-2 mb-4 lg:mb-0">
                        <label htmlFor="dateBriefed" className="block text-sm font-medium text-gray-700">Date Briefed</label>
                        <input
                            type="date"
                            id="dateBriefed"
                            placeholder="Date Briefed"
                            value={dateBriefed}
                            onChange={(e) => setDateBriefed(e.target.value)}
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div className="flex flex-col w-full lg:w-1/3 lg:pl-2">
                        <label htmlFor="dateDelivered" className="block text-sm font-medium text-gray-700">Date Delivered</label>
                        <input
                            type="date"
                            id="dateDelivered"
                            placeholder="Date Delivered"
                            value={dateDelivered}
                            onChange={(e) => setDateDelivered(e.target.value)}
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <CurrencySelector selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
                <button
                    className="bg-gradient-to-r from-green-700 to-green-900 mt-3 text-white font-bold py-2.5 px-8 rounded shadow transition duration-100 hover:from-green-900 hover:to-green-700"
                    type="submit">{isEditing ? 'Update Item' : 'Add Item'}
                </button>
            </form>

            <section className="mt-10">
                <Table
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}
                    selectedCurrency={selectedCurrency}
                    editRow={editRow}
                    deleteRow={deleteRow}
                    isEditable={true}
                />
            </section>
        </div>
    );
}











