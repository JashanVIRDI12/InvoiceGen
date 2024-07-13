import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactToPrint from "react-to-print";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Dates from "./components/formUtils/Dates";
import Footer from "./components/formUtils/Footer";
import Header from "./components/formUtils/Header";
import Details from "./components/formUtils/Details";
import Notes from "./components/formUtils/Notes";
import Table from "./components/formUtils/Table";
import './components/index.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
    const [showInvoice, setShowInvoice] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [bankName, setBankName] = useState("");
    const [bankAccount, setBankAccount] = useState("");
    const [website, setWebsite] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [invoiceDate, setInvoiceDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [notes, setNotes] = useState("");
    const [title, setTitle] = useState("");
    const [hoursInvested, setHoursInvested] = useState("");
    const [dateBriefed, setDateBriefed] = useState("");
    const [dateDelivered, setDateDelivered] = useState("");
    const [amount, setAmount] = useState("");
    const [accountHolder, setAccountHolder] = useState("");
    const [bankNotes, setBankNotes] = useState("");
    const [ifsc, setIfsc] = useState(""); // New state for IFSC code
    const [branchName, setBranchName] = useState(""); // New state for branch name
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const componentRef = useRef();

    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Home />} />
                <Route path="/invoice" element={
                    <main className="invoice-container p-5 m-12 lg:max-w-2xl xl:mx-auto bg-white rounded shadow md:max-w-xl xl:max-w-4xl md:mx-auto">
                        {showInvoice ? (
                            <>
                                <div className="flex sm:justify-center xl:justify-end xl:my-0 sm:mb-8">
                                    <ReactToPrint
                                        trigger={() => (
                                            <button className='bg-gradient-to-r from-green-700 to-green-900 text-white font-bold py-2 px-8 rounded shadow hover:from-green-900 hover:to-green-700 transition-all duration-300'>
                                                Print / Download
                                            </button>
                                        )}
                                        content={() => componentRef.current}
                                    />
                                </div>
                                <div style={{ fontFamily: "sans-serif" }} ref={componentRef}>
                                    <Header />
                                    <Dates
                                        invoiceNumber={invoiceNumber}
                                        invoiceDate={invoiceDate}
                                        dueDate={dueDate}
                                    />
                                    <Details
                                        email={email}
                                        website={website}
                                        name={name}
                                        address={address}
                                        phone={phone}
                                        clientName={clientName}
                                        clientAddress={clientAddress}
                                    />
                                    <Table
                                        amount={amount}
                                        list={list}
                                        setList={setList}
                                        total={total}
                                        setTotal={setTotal}
                                        selectedCurrency={selectedCurrency}
                                        setAmount={setAmount}
                                        title={title}
                                        setTitle={setTitle}
                                        hoursInvested={hoursInvested}
                                        setHoursInvested={setHoursInvested}
                                        dateBriefed={dateBriefed}
                                        setDateBriefed={setDateBriefed}
                                        dateDelivered={dateDelivered}
                                        setDateDelivered={setDateDelivered}
                                    />
                                    <Notes notes={notes} />
                                    <Footer
                                        accountHolder={accountHolder}
                                        bankName={bankName}
                                        bankAccount={bankAccount}
                                        bankNotes={bankNotes}
                                        ifsc={ifsc}
                                        branchName={branchName}
                                    />
                                </div>
                                <button
                                    onClick={() => setShowInvoice(!showInvoice)}
                                    className="ml-5 bg-gradient-to-r from-blue-700 to-blue-900 mt-9 text-white font-bold py-2 px-8 rounded shadow hover:from-blue-900 hover:to-blue-700 transition-all duration-300"
                                >
                                    Edit Information
                                </button>
                            </>
                        ) : (
                            <Form
                                setShowInvoice={setShowInvoice}
                                name={name}
                                email={email}
                                phone={phone}
                                address={address}
                                bankName={bankName}
                                bankAccount={bankAccount}
                                website={website}
                                clientName={clientName}
                                clientAddress={clientAddress}
                                invoiceNumber={invoiceNumber}
                                invoiceDate={invoiceDate}
                                dueDate={dueDate}
                                notes={notes}
                                amount={amount}
                                accountHolder={accountHolder}
                                bankNotes={bankNotes}
                                setBankNotes={setBankNotes}
                                ifsc={ifsc}
                                setIfsc={setIfsc}
                                branchName={branchName}
                                setBranchName={setBranchName}
                                list={list}
                                setList={setList}
                                total={total}
                                setTotal={setTotal}
                                selectedCurrency={selectedCurrency}
                                setSelectedCurrency={setSelectedCurrency}
                                setName={setName}
                                setEmail={setEmail}
                                setPhone={setPhone}
                                setAddress={setAddress}
                                setBankName={setBankName}
                                setBankAccount={setBankAccount}
                                setWebsite={setWebsite}
                                setClientName={setClientName}
                                setClientAddress={setClientAddress}
                                setInvoiceNumber={setInvoiceNumber}
                                setInvoiceDate={setInvoiceDate}
                                setDueDate={setDueDate}
                                setNotes={setNotes}
                                setAmount={setAmount}
                                setAccountHolder={setAccountHolder}
                                title={title}
                                setTitle={setTitle}
                                hoursInvested={hoursInvested}
                                setHoursInvested={setHoursInvested}
                                dateBriefed={dateBriefed}
                                setDateBriefed={setDateBriefed}
                                dateDelivered={dateDelivered}
                                setDateDelivered={setDateDelivered}
                            />
                        )}
                    </main>
                } />
            </Routes>
        </Router>
    );
}

export default App;





