
import { useContext } from "react";
import { TresureContext } from "../../Grandpa/Grandpa";

const Sister = () => {
    const gift=useContext(TresureContext);
    return (
        <div className="text-3xl border-2 border-blue-400 p-2  rounded-xl font-bold">
            <h2>Sister</h2>
            <p className="text-xl">Grandpa Gift: {gift}</p>
        </div>
    );
};

export default Sister;