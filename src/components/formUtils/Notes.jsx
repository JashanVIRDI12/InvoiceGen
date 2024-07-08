export default function Notes({notes}) {
    return(
        <>
            <section className='mb-10 mt-10'>
                <p className="text-gray-400 font-semibold ml-4 text-lg">Terms</p>
                <p className="lg:w-1/2 ml-4 ">{notes}</p>
            </section>
        </>
    )
}