import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import ReactInputMask from 'react-input-mask';

import { Container } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
}

const InputDate: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'props.selected',
      clearValue(ref: any) {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container hasError={!!error}>
      <ReactDatePicker
        ref={inputRef}
        selected={date}
        dateFormat="dd/MM/yyyy"
        strictParsing
        onChange={setDate}
        value={date}
        className="remove-box-shadow-input"
        customInput={
          <ReactInputMask type="tel" maskChar={null} mask="99/99/9999" />
        }
        {...rest}
      />
      {error && <small>{error}</small>}
    </Container>
  );
};

export default InputDate;
