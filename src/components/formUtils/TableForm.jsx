import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import CurrencySelector from './CurrencySelector';
import Table from './Table';

export default function TableForm({
                                      description,
                                      setDescription,
                                      quantity,
                                      setQuantity,
                                      price,
                                      setPrice,
                                      amount,
                                      setAmount,
                                      list,
                                      setList,
                                      total,
                                      setTotal,
                                      selectedCurrency,
                                      setSelectedCurrency
                                  }) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [customFields, setCustomFields] = useState({});

    useEffect(() => {
        setAmount(quantity * price);
    }, [quantity, price, setAmount]);

    useEffect(() => {
        const newTotal = list.reduce((acc, item) => acc + item.amount, 0);
        setTotal(newTotal);
    }, [list, setTotal]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description || !quantity || !price) {
            alert('Please fill in all fields.');
            return;
        }

        const newItem = {
            id: isEditing ? currentId : uuid(),
            description,
            quantity,
            price,
            amount,
            customFields
        };

        if (isEditing) {
            setList(list.map(item => item.id === currentId ? newItem : item));
            setIsEditing(false);
            setCurrentId(null);
        } else {
            setList([...list, newItem]);
        }

        setDescription("");
        setQuantity("");
        setPrice("");
        setAmount("");
        setCustomFields({});
    };

    const deleteRow = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const editRow = (id) => {
        const itemToEdit = list.find(item => item.id === id);
        setDescription(itemToEdit.description);
        setQuantity(itemToEdit.quantity);
        setPrice(itemToEdit.price);
        setAmount(itemToEdit.amount);
        setCustomFields(itemToEdit.customFields);
        setIsEditing(true);
        setCurrentId(id);
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="flex flex-col">
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Enter Item Description</label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Item Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between mb-4">
                        <div className="flex flex-col w-full lg:w-1/3 lg:pr-2 mb-4 lg:mb-0">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Enter Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                placeholder="Quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="mt-1 p-2 border rounded w-full"
                            />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/3 lg:px-2 mb-4 lg:mb-0">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Enter Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className="mt-1 p-2 border rounded w-full"
                            />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/3 lg:pl-2">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                            <p className="mt-1 p-2 border rounded w-full bg-gray-100">{amount}</p>
                        </div>
                    </div>
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









