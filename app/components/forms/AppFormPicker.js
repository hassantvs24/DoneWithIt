import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({ items, name, placeholder, PickerItemComponent, numberOfColumns, width }) => {

    const {errors, setFieldValue, touched, values} = useFormikContext();

    return (
        <> 
            <AppPicker 
                icon="view-list"
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                numberOfColumns={numberOfColumns}
                width={width}
              />
              <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;