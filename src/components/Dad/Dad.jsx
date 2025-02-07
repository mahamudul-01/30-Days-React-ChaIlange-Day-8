import { useContext } from "react";
import Brother from "./Brother/Brother";
import MySelf from "./Myself/MySelf";
import Sister from "./Sister/Sister";
import { GranpaMoney } from "../Grandpa/Grandpa";

const Dad = () => {
  const [money,setMoney]  = useContext(GranpaMoney);
  return (
    <div className="text-3xl border-2 border-blue-400 p-2 rounded-xl font-bold">
      <h2>Dad</h2>
      <div className="flex justify-between border-2 border-blue-400 p-4 rounded-xl font-bold mt-4 space-x-4">
        <MySelf></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </div>
      <button
        className="bg-blue-400 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        onClick={() => setMoney(money + 100)}
      >
        Give Your Father Money 100
      </button>
    </div>
  );
};

export default Dad;