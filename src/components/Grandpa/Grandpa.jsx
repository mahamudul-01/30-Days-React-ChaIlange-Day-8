import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const TresureContext=createContext();

const Grandpa = () => {
    return (
        <div className="w-5xl border-2 border-blue-400 p-4 text-center text-5xl mx-auto mt-6 rounded-xl font-bold" >
            <h2>Grandpa</h2>
            <p>Grandpa has some diamond . how he gift it</p>
           <TresureContext.Provider value='Diamond'>
           <div className="flex justify-between border-2 border-blue-400 p-4 rounded-xl font-bold mt-4">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </div>
            </TresureContext.Provider>
        </div>
    );
};

export default Grandpa;