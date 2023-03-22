import React from 'react';

function FormField({labelFor, labelDescription, inputType, labelName, labelValue, labelChecked, labelChange}) {

        return (
            <label htmlFor={labelFor}>{labelDescription}
                <input
                    type={inputType}
                    id={labelFor}
                    name={labelName}
                    value={labelValue}
                    checked={labelChecked}
                    onChange={labelChange}
                />
            </label>
        );
}

export default FormField;