import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SearchBAr = ({ onSubmitData }) => {
  const validation = Yup.object().shape({
    target: Yup.string().min(2, 'Too short!').required('Required!'),
  });
  return;
  <Formik
    initialValues={{
      target: '',
    }}
    onSubmit={({ target }, actions) => {
      onSubmitData(target);
      actions.resetForm();
    }}
    validationSchema={validation}
    validateOnBlur={false}
  >
    <Form>
      <Field name="target" placeholder="Forest" />
      <ErrorMessage name="target" component="span" />

      <Button type="submit">
        <CiSearch />
      </Button>
    </Form>
  </Formik>;
};

export default SearchBar;
