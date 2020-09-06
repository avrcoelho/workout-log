import React, { useCallback, useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import * as InsertActivityActions from '../../../store/modules/insertActivity/actions';
import { InsertActivityState } from '../../../store/modules/insertActivity/types';
import { ActivitiesState } from '../../../store/modules/activities/types';
import { ApplicationState } from '../../../store';

import activitiesTypes from '../../../constants/activitiesTypes';
import getValidationErros from '../../../utils/getValidationErros';

import InputMask from '../../../components/InputMask';
import InputDate from '../../../components/InputDate';
import SelectInput from '../../../components/SelectInput';
import Button from '../../../components/Button';

import { Container } from './styles';

interface IFormData {
  user_id: string;
  time: string;
  type: 'run' | 'bike' | 'swimming';
  date: string;
}

const InsertActivity: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const { loading } = useSelector<ApplicationState, InsertActivityState>(
    state => state.insertActivity,
  );
  const { data: activities } = useSelector<ApplicationState, ActivitiesState>(
    state => state.activities,
  );

  useEffect(() => {
    formRef.current?.reset();
  }, [activities]);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        // Remove all previous errors
        formRef.current?.setErrors({});

        const requiredFied = 'Campo obrigatório';
        const invalidTime = 'Valor inválido';

        const schema = Yup.object().shape({
          type: Yup.string().required(requiredFied),
          time: Yup.string()
            .matches(/ˆ$|^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, invalidTime)
            .required(requiredFied),
          date: Yup.date().required(requiredFied).typeError(requiredFied),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        data = { ...data, time: `${data.time}:00` };

        dispatch(InsertActivityActions.loadRequest(data));
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
      <fieldset>
        <legend>
          <h2>Inserir atividade</h2>
        </legend>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <SelectInput
            name="type"
            options={activitiesTypes}
            placeholder="Tipo"
          />
          <InputMask name="time" mask="99:99" placeholder="Tempo" />
          <InputDate name="date" placeholderText="Data" />

          <Button>
            {loading ? (
              <FaSpinner size={20} color="#fff" className="icon-spin" />
            ) : (
              'Inserir'
            )}
          </Button>
        </Form>
      </fieldset>
    </Container>
  );
};

export default InsertActivity;
