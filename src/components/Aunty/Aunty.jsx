import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div className="text-3xl border-2 border-blue-400 p-2  rounded-xl font-bold">
            <h2>Aunty</h2>
            <div className="justify-between border-2 border-blue-400 p-4 rounded-xl font-bold mt-4 space-y-4">
                <Cousin name='Luiton'></Cousin>
                <Cousin name='Neptune'></Cousin>
                <Cousin name='Pluto'></Cousin>
                

            </div>
        </div>
    );
};

export default Aunty;