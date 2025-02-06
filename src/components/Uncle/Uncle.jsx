import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div className="text-3xl border-2 border-blue-400 p-2  rounded-xl font-bold">
           <h2>Uncle</h2> 
           <div className="justify-between border-2 border-blue-400 p-4 rounded-xl font-bold mt-4 space-y-4">
                <Cousin name='Marsi'></Cousin>
                <Cousin name='Jupiter'></Cousin>
                <Cousin name='Saturn'></Cousin>

            </div>
        </div>
    );
};

export default Uncle;