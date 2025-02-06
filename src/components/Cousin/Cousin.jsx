import PropTypes from 'prop-types';
import { TresureContext } from '../Grandpa/Grandpa';
import { useContext } from 'react';
const Cousin = ({name}) => {
    const gift=useContext(TresureContext);
    return (
        <div className="text-3xl border-2 border-blue-400 p-2  rounded-xl font-bold">
            <h2>{name}</h2>

            {name==='Pluto' && <p className="text-xl">Grandpa Gift: {gift}</p>}
            
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string
}

export default Cousin;