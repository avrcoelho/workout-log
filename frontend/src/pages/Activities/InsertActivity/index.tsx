import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

interface IFormData {
  user_id: string;
  time: string;
  type: 'run' | 'bike' | 'swimming';
  date: string;
}

const InsertActivity: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: IFormData) => {}, []);

  return (
    <Container>
      <fieldset>
        <legend>
          <h2>Inserir atividade</h2>
        </legend>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="time" placeholder="Tempo" />
          <Input name="type" placeholder="" />
          <Input name="date" placeholder="Data" />

          <Button>Inserir</Button>
        </Form>
      </fieldset>
    </Container>
  );
};

export default InsertActivity;
