import React from "react";

function Footer({ accountHolder, bankName, bankAccount, bankNotes, ifsc, branchName }) {
    return (
        <div className="mt-10 ml-5">
            <h2 className="text-lg font-bold border-t-2 border-gray-300 pt-5 mb-1">Bank Details</h2>
            <p className="mb-1"><span className="font-semibold">Account Holder:</span> {accountHolder}</p>
            <p className="mb-1"><span className="font-semibold">Bank Name:</span> {bankName}</p>
            <p className="mb-1"><span className="font-semibold">Bank Account:</span> {bankAccount}</p>
            {ifsc && (
                <p className="mb-1"><span className="font-semibold">IFSC Code:</span> {ifsc}</p>
            )}
            {branchName && (
                <p className="mb-1"><span className="font-semibold">Branch Name:</span> {branchName}</p>
            )}
            {bankNotes && (
                <p className="mt-1"><span className="font-semibold">Additional Notes:</span> {bankNotes}</p>
            )}
        </div>
    );
}

export default Footer;

