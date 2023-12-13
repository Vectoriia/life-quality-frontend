"use client";
import { Box, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";

import { Button, AutocompleteInput, BaseOption } from "@/components";

import { schema } from "./schema";
import styles from "./styles";
import useCreateAnalysForm from "./useCreateAnalysForm";
import { ISelectItem } from "@/types";
import { HTMLAttributes } from "react";
import { IConfigAnalysisFormProps as IConfigAnalysisFormProps } from "./types";
import { DateField, DateTimeField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const ConfigAnalysForm = (props: IConfigAnalysisFormProps) => {
  const { initialValues, handleSubmit, handleCancel, intervalTypeOptions } =
    useCreateAnalysForm(props);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors, setFieldValue }) => (
        <Form>
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.fieldsWrapper}>
              <Field
                name="regularity"
                fullWidth
                disableClearable
                options={intervalTypeOptions}
                textFieldProps={{
                  fullWidth: true,
                  label: "Тип регулярності",
                  placeholder: "Обрати регулярність запиту",
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
                    fieldValue={values.regularity ?? null}
                    {...listProps}
                  />
                )}
                getOptionLabel={(option: ISelectItem<string>) =>
                  option.label ?? ""
                }
                component={AutocompleteInput}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={styles.fieldContainer}>
                  <Field
                    name="startDate"
                    label="Обрати рекомендовану дату аналізу"
                    value={values.startDate}
                    placeholder="день/місяць/рік"
                    fullWidth
                    error={!!errors?.startDate}
                    onChange={(value: Date) =>
                      setFieldValue("startDate", value, true)
                    }
                    ampm={false}
                    component={DateTimeField}
                  />
                  {!!errors?.startDate && (
                    <Typography sx={styles.helperText}>
                      {String(errors?.startDate)}
                    </Typography>
                  )}
                </Box>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={styles.fieldContainer}>
                  <Field
                    name="endDate"
                    label="Обрати дату припинення (опційне)"
                    value={values.endDate}
                    placeholder="день/місяць/рік"
                    fullWidth
                    error={!!errors?.endDate}
                    onChange={(value: Date) =>
                      setFieldValue("endDate", value, true)
                    }
                    ampm={false}
                    component={DateTimeField}
                  />
                  {!!errors?.endDate && (
                    <Typography sx={styles.helperText}>
                      {String(errors?.endDate)}
                    </Typography>
                  )}
                </Box>
              </LocalizationProvider>
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

export default ConfigAnalysForm;
