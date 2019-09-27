import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({dataSearch}) => {

    const [searchValues, setSearch] = useState({
        city: '',
        country: ''
    });

    const handleChange = e => {

        setSearch({
            ...searchValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {

        e.preventDefault();
        dataSearch(searchValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="country">
                    <option value="">Selecciona un pais</option>
                    <option value="AR">Argentina</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"  
                    className="btn-large btn-block yellow col s12"
                    value="Buscar"
                />
            </div>
        </form>
    );
};

Form.propTypes = {
    dataSearch: PropTypes.func.isRequired
};

export default Form;