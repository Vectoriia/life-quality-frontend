'use client';
import { Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { TextInput, Button, AutocompleteInput, BaseOption } from '@/components';

import { schema } from './schema';
import styles from './styles';
import useCreateAnalysForm from './useCreateAnalysForm';
import { ISelectItem } from '@/types';
import { HTMLAttributes } from 'react';
import { ICreateAnalysFormProps } from './types';

const CreateAnalysForm = (props: ICreateAnalysFormProps) => {
  const { initialValues, handleSubmit, handleCancel, analysisTypeOptions } =
    useCreateAnalysForm(props);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.fieldsWrapper}>
              <Field
                name="patient"
                label="Пацієнт"
                placeholder="Ім’я пацієнта"
                fullWidth
                component={TextInput}
              />
              <Field
                name="analysType"
                fullWidth
                disableClearable
                options={analysisTypeOptions}
                textFieldProps={{
                  fullWidth: true,
                  label: 'Тип аналізу',
                  placeholder: 'Обрати тип аналізу',
                }}
                isOptionEqualToValue={(
                  option: ISelectItem<string>,
                  value: ISelectItem<string>
                ) => option.value === value.value}
                renderOption={(
                  listProps: HTMLAttributes<HTMLLIElement>,
                  option: ISelectItem<string>
                ) => (
                  <BaseOption
                    option={option}
                    fieldValue={values.analysType ?? null}
                    {...listProps}
                  />
                )}
                getOptionLabel={(option: ISelectItem<string>) =>
                  option.label ?? ''
                }
                component={AutocompleteInput}
              />
              <Field
                name="comment"
                label="Коментар (опційний)"
                placeholder="Коментар щодо деталей здійснення аналізу"
                fullWidth
                multiline
                minRows={4}
                component={TextInput}
              />
            </Box>
            <Box sx={styles.buttonsWrapper}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                isLoading={isSubmitting}
              >
                Створити
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="medium"
                onClick={handleCancel}
              >
                Скасувати
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CreateAnalysForm;
