"use client";
import { Box } from "@mui/material";
import { Formik, Form, Field } from "formik";

import {
  TextInput,
  Button,
  AutocompleteInput,
  BaseOption,
  ConfigAnalysModal,
} from "@/components";

import { schema } from "./schema";
import styles from "./styles";
import useCreateAnalysForm from "./useCreateAnalysForm";
import { ISelectItem } from "@/types";
import { HTMLAttributes } from "react";
import { ICreateAnalysisFormProps } from "./types";

const CreateAnalysForm = (props: ICreateAnalysisFormProps) => {
  const {
    isConfigOpen,
    handleConfig,
    handleConfigCancel,
    initialValues,
    handleSubmit,
    handleCancel,
    analysisTypeOptions,
  } = useCreateAnalysForm(props);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, isValid, dirty }) => (
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
                name="type"
                fullWidth
                disableClearable
                options={analysisTypeOptions}
                textFieldProps={{
                  fullWidth: true,
                  label: "Тип аналізу",
                  placeholder: "Обрати тип аналізу",
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
                    fieldValue={values.type ?? null}
                    {...listProps}
                  />
                )}
                getOptionLabel={(option: ISelectItem<string>) =>
                  option.label ?? ""
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
                variant="contained"
                color="primary"
                size="medium"
                onClick={handleConfig}
                disabled={!(isValid && dirty)}
              >
                Налаштувати регулярність
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
          <ConfigAnalysModal
            open={isConfigOpen}
            analys={{
              patient: values.patient || '',
              type: values.type?.label || '',
              comment: values.comment ?? "",
            }}
            onClose={handleConfigCancel}
          />
        </Form>
      )}
    </Formik>
  );
};

export default CreateAnalysForm;
