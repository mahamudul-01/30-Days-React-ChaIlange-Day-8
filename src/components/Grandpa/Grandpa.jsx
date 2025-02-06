import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const Grandpa = () => {
    return (
        <div className="w-5xl border-2 border-blue-400 p-4 text-center text-5xl mx-auto mt-6 rounded-xl font-bold" >
            <h2>Grandpa</h2>
            <div className="flex justify-between border-2 border-blue-400 p-4 rounded-xl font-bold mt-4">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;