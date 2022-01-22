import { Formik, Form } from 'formik';
import Card from '@mui/material/Card';
import useStyles from './useStyles';

const initialValues = {
  firstname: '',
  lastname: '',
  gender: '',
  birthdate: '',
  email: '',
  phone: '',
  address: '',
  description: '',
};

export default function EditForm() {
  const classes = useStyles();
  const handleSubmit = () => {
    console.log('submitted');
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <Card>{/* <pre>{JSON.stringify(values, null, 4)}</pre> */}</Card>
        </Form>
      )}
    </Formik>
  );
}
