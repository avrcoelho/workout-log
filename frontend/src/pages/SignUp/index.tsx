import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import * as SignUpActions from '../../store/modules/signUp/actions';
import { SignUpState } from '../../store/modules/signUp/types';
import { ApplicationState } from '../../store';

import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, FormContainer } from './styles';

interface IFormData {
  fullname: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const { loading } = useSelector<ApplicationState, SignUpState>(
    state => state.signUp,
  );

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        // Remove all previous errors
        formRef.current?.setErrors({});

        const requiredFied = 'Campo obrigatório';
        const invalidEmail = 'E-mail inválido';

        const schema = Yup.object().shape({
          fullname: Yup.string().required(requiredFied),
          email: Yup.string().email(invalidEmail).required(requiredFied),
          password: Yup.string().required(requiredFied),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Senhas não conferem')
            .required(requiredFied),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(SignUpActions.loadRequest(data));
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
          <Input name="fullname" placeholder="Nome completo" />
          <Input name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirmar senha"
          />

          <Button>
            {loading ? (
              <FaSpinner size={20} color="#fff" className="icon-spin" />
            ) : (
              'Criar'
            )}
          </Button>
        </Form>

        <Link to="/">Acessar conta</Link>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
