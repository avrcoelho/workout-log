import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container } from './styles';
import Input from '../../../components/Input';
import InputMask from '../../../components/InputMask';
import InputDate from '../../../components/InputDate';
import SelectInput from '../../../components/SelectInput';
import Button from '../../../components/Button';

interface IFormData {
  user_id: string;
  time: string;
  type: 'run' | 'bike' | 'swimming';
  date: string;
}

const InsertActivity: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: IFormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <fieldset>
        <legend>
          <h2>Inserir atividade</h2>
        </legend>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <SelectInput name="type" options={[]} />
          <InputMask
            name="time"
            mask="99:99"
            placeholder="Tempo"
            className="separator"
          />
          <InputDate name="date" placeholderText="Data" className="separator" />

          <Button>Inserir</Button>
        </Form>
      </fieldset>
    </Container>
  );
};

export default InsertActivity;
