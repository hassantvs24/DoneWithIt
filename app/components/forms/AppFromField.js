import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFromField = ({name, width, ...rest}) => {

    const {handleChange, errors, setFieldTouched, touched} = useFormikContext();

    return (
        <> 
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...rest}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFromField;