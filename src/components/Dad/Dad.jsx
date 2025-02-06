import Brother from "./Brother/Brother";
import MySelf from "./Myself/MySelf";
import Sister from "./Sister/Sister";

const Dad = () => {
    return (
        <div className="text-3xl border-2 border-blue-400 p-2  rounded-xl font-bold">
            <h2>Dad</h2>
            <div className="flex justify-between border-2 border-blue-400 p-4 rounded-xl font-bold mt-4 space-x-4">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>

            </div>
        </div>
    );
};

export default Dad;