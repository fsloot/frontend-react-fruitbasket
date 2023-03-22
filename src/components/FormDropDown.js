import React from 'react';

function FormDropDown({labelFor, labelDescription, labelName, labelValue, labelChange, optionValue, optionDescription}) {

    return (
        <label htmlFor={labelFor}>
            {labelDescription}
            <select
                id={labelFor}
                name={labelName}
                value={labelValue}
                onChange={labelChange}>
                <option
                    value={optionValue}
                >{optionDescription}
                </option>
            </select>
        </label>
    );
}

export default FormDropDown;