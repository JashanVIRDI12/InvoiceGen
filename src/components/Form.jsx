import React from "react";
import TableForm from "./formUtils/TableForm";

function Form({
                  setShowInvoice,
                  name,
                  email,
                  phone,
                  address,
                  bankName,
                  bankAccount,
                  website,
                  clientName,
                  clientAddress,
                  invoiceNumber,
                  invoiceDate,
                  dueDate,
                  notes,
                  title,
                  setTitle,
                  hoursInvested,
                  setHoursInvested,
                  dateBriefed,
                  setDateBriefed,
                  dateDelivered,
                  setDateDelivered,
                  amount,
                  setAmount,
                  accountHolder,
                  bankNotes,
                  setBankNotes,
                  ifsc,          // New state for IFSC code
                  setIfsc,       // New setter for IFSC code
                  branchName,    // New state for branch name
                  setBranchName, // New setter for branch name
                  list,
                  setList,
                  total,
                  setTotal,
                  selectedCurrency,
                  setSelectedCurrency,
                  setName,
                  setEmail,
                  setPhone,
                  setAddress,
                  setBankName,
                  setBankAccount,
                  setWebsite,
                  setClientName,
                  setClientAddress,
                  setInvoiceNumber,
                  setInvoiceDate,
                  setDueDate,
                  setNotes,
                  setAccountHolder,
              }) {
    return (
        <div className="flex flex-col justify-center p-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="mb-4 col-span-1">
                    <label htmlFor="name" className="block mb-1">Company Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Jashan Singh Pvt Ltd"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="address" className="block mb-1">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="123 MG Road, Delhi"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="contact@xyz.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="phone" className="block mb-1">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="bankName" className="block mb-1">Bank Name</label>
                    <input
                        type="text"
                        name="bankName"
                        id="bankName"
                        placeholder="State Bank of India"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="accountHolder" className="block mb-1">Account Holder Name</label>
                    <input
                        type="text"
                        name="accountHolder"
                        id="accountHolder"
                        placeholder="Jashan Singh"
                        value={accountHolder}
                        onChange={(e) => setAccountHolder(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="bankAccount" className="block mb-1">Bank Account Number</label>
                    <input
                        type="text"
                        name="bankAccount"
                        id="bankAccount"
                        placeholder="1234 5678 9012"
                        value={bankAccount}
                        onChange={(e) => setBankAccount(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="ifsc" className="block mb-1">IFSC Code</label>
                    <input
                        type="text"
                        name="ifsc"
                        id="ifsc"
                        placeholder="SBIN0001234"
                        value={ifsc}
                        onChange={(e) => setIfsc(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="branchName" className="block mb-1">Branch Name</label>
                    <input
                        type="text"
                        name="branchName"
                        id="branchName"
                        placeholder="Connaught Place Branch"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="bankNotes" className="block mb-1">Additional Bank Notes</label>
                    <textarea
                        name="bankNotes"
                        id="bankNotes"
                        placeholder="Notes about the bank account"
                        value={bankNotes}
                        onChange={(e) => setBankNotes(e.target.value)}
                        className="p-2 border w-full"
                    ></textarea>
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="website" className="block mb-1">Website</label>
                    <input
                        type="text"
                        name="website"
                        id="website"
                        placeholder="www.xyz.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-4 col-span-1 lg:col-span-2">
                    <label htmlFor="clientName" className="block mb-1">Client's Name</label>
                    <input
                        type="text"
                        name="clientName"
                        id="clientName"
                        placeholder="Rahul Sharma"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="mb-5 col-span-1 lg:col-span-2">
                    <label htmlFor="clientAddress" className="block mb-1">Client's Address</label>
                    <input
                        type="text"
                        name="clientAddress"
                        id="clientAddress"
                        placeholder="456 Andheri West, Mumbai"
                        value={clientAddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
            </div>
            <div className="mb-4 col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4 border-b-2 border-gray-200 pb-8">
                <div>
                    <label htmlFor="invoiceNumber" className="block mb-1">Invoice Number</label>
                    <input
                        type="text"
                        name="invoiceNumber"
                        id="invoiceNumber"
                        placeholder="INV-1001"
                        value={invoiceNumber}
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div>
                    <label htmlFor="invoiceDate" className="block mb-1">Invoice Date</label>
                    <input
                        type="date"
                        name="invoiceDate"
                        id="invoiceDate"
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div>
                    <label htmlFor="dueDate" className="block mb-1">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
            </div>
            <TableForm
                title={title}
                setTitle={setTitle}
                hoursInvested={hoursInvested}
                setHoursInvested={setHoursInvested}
                dateBriefed={dateBriefed}
                setDateBriefed={setDateBriefed}
                dateDelivered={dateDelivered}
                setDateDelivered={setDateDelivered}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
            />
            <div className="mb-5 col-span-2">
                <label htmlFor="notes" className="block mb-1">Terms</label>
                <textarea
                    name="notes"
                    id="notes"
                    placeholder="Any terms for the client"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="p-2 border w-full"
                ></textarea>
            </div>
            <div className="flex justify-end mt-5">
                <button
                    onClick={() => setShowInvoice(true)}
                    className="bg-gradient-to-r from-blue-700 to-blue-900 text-white mx-auto font-bold py-2 px-8 rounded shadow-lg hover:from-blue-900 hover:to-blue-700 transition 300"
                >
                    Preview Invoice
                </button>

            </div>
        </div>
    );
}

export default Form;





