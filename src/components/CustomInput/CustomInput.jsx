import React from 'react';
import './CustomInput.styles.scss';

const CustomInput = ({handleChange, ...otherProps}) => {
    return(
        <div className='customInput'>
            <input required className='form-input' onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default CustomInput;