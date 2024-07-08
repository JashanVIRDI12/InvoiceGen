import '../index.css';

export default function Details({ name, address, phone, clientName, clientAddress, email, website }) {
    return (
        <div className="ml-5 details-container  space-y-3">
            <section className=" details-section w-1/5 flex-wrap flex flex-col">
                <p className="text-sm font-semibold text-gray-700 uppercase">Billed To</p>
                <p className="text-sm text-gray-600">{clientName}</p>
                <p className="text-sm text-gray-600">{clientAddress}</p>
            </section>

            <section className="details-section w-1/5 flex-wrap flex flex-col">
                <p className="text-sm font-semibold text-gray-700 uppercase">{name}</p>
                <p className="text-sm text-gray-600">{address}</p>
                <p className="text-sm text-gray-600">{phone}</p>
            </section>

            <section className="details-section w-1/5 flex-wrap flex flex-col ">
                <p className="text-sm text-gray-600">{email}</p>
                <p className="text-sm text-gray-600 mb-10">{website}</p>
            </section>
        </div>
    );
}




