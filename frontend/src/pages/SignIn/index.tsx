import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, FormContainer } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      // Remove all previous errors
      formRef.current?.setErrors({});

      const requiredFied = 'Campo obrigatório';
      const invalidEmail = 'E-mail inválido';

      const schema = Yup.object().shape({
        email: Yup.string().email(invalidEmail).required(requiredFied),
        password: Yup.string().required(requiredFied),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErros(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <FormContainer>
        <h1>Workout Log</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />

          <Button>Acessar</Button>
        </Form>

        <Link to="signup">Criar conta</Link>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
