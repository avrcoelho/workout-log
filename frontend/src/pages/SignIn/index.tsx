import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, FormContainer } from './styles';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <FormContainer>
        <h1>Workout Log</h1>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
