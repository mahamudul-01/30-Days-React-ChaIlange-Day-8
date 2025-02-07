import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const TresureContext=createContext();
export const GranpaMoney=createContext();



const Grandpa = () => {
    const gift='Diamond';
    const [money,setMoney]=useState(0);
    return (
        <div className="w-5xl border-2 border-blue-400 p-4 text-center text-5xl mx-auto mt-6 rounded-xl font-bold" >
            <h2>Grandpa</h2>
            <p>Grandpa has some diamond . how he gift it</p>
            <p>Balance : {money}</p>
           <GranpaMoney.Provider value={[money,setMoney]} >
           <TresureContext.Provider value={gift}>
           <div className="flex justify-between border-2 border-blue-400 p-4 rounded-xl font-bold mt-4">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </div>
            </TresureContext.Provider>
              </GranpaMoney.Provider>
        </div>
    );
};

export default Grandpa;