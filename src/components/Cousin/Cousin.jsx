import PropTypes from 'prop-types';
const Cousin = ({name}) => {
    return (
        <div className="text-3xl border-2 border-blue-400 p-2  rounded-xl font-bold">
            <h2>{name}</h2>
            
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string
}

export default Cousin;