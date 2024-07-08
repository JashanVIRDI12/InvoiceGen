export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
        <>
            <article className="my-5 flex ml-1 ">
                <ul className=" flex flex-row justify-around">
                    <li className="p-1 mx-3"><span className="font-bold ">Invoice Number: </span>{invoiceNumber}</li>
                    <li className="p-1 mx-3"><span className="font-bold ">Invoice Date: </span>{invoiceDate}</li>
                    <li className="p-1 mx-3"><span className="font-bold ">Due Date: </span>{dueDate}</li>
                </ul>
            </article>
        </>
    );
}
