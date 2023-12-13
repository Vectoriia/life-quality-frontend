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
import useCreateRecommendationForm from "./useCreateRecommendationForm";
import { ICreateRecommendationFormProps } from "./types";

const CreateRecommendationForm = (props: ICreateRecommendationFormProps) => {
  const {
    initialValues,
    handleSubmit,
    handleCancel,
  } = useCreateRecommendationForm(props);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.fieldsWrapper}>
            <Field
                name="recommendation"
                label="Рекомендація"
                placeholder="Рекомендація стосовно лікування"
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
                Надіслати
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

export default CreateRecommendationForm;
