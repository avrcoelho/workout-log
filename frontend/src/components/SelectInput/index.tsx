import React, { useEffect, useRef, SelectHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: Array<{
    value: string;
    title: string;
  }>;
}

const SelectInput: React.FC<Props> = ({ name, options, ...rest }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container hasError={!!error}>
      <select defaultValue={defaultValue} ref={selectRef} {...rest}>
        {options.map(option => (
          <option key={option.value}>{option.title}</option>
        ))}
      </select>
      {error && <small>{error}</small>}
    </Container>
  );
};

export default SelectInput;
