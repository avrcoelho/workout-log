import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import * as SignInActions from '../../store/modules/signIn/actions';
import { SignInState } from '../../store/modules/signIn/types';
import { ApplicationState } from '../../store';

import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, FormContainer } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const { loading } = useSelector<ApplicationState, SignInState>(
    state => state.signIn,
  );

  const handleSubmit = useCallback(
    async (data: any) => {
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

        console.log(data);

        dispatch(SignInActions.loadRequest(data));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErros(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [dispatch],
  );

  return (
    <Container>
      <FormContainer>
        <h1>Workout Log</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />

          <Button>
            {loading ? (
              <FaSpinner size={20} color="#fff" className="icon-spin" />
            ) : (
              'Entrar'
            )}
          </Button>
        </Form>

        <Link to="/signup">Criar conta</Link>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
