import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { object, string } from 'yup';
import useStyles from './useStyles';

const initialValues = {
  firstname: 'John',
  lastname: 'Doe',
  gender: 'male',
  birthMonth: 'june',
  birthDay: '15',
  birthYear: '1988',
  email: 'john-doe@gmail.com',
  phone: '',
  address: '',
  description: '',
};

function TextError(props: any) {
  const classes = useStyles();
  return <div className={classes.errors}>{props.children}</div>;
}

export interface Phone {
  phone: boolean;
}

export default function EditForm() {
  const classes = useStyles();
  const [isPhone, setIsphone] = useState(false);
  const [values, setValues] = useState(initialValues);

  initialValues.phone ? setIsphone(true) : null;

  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'september',
    'october',
    'november',
    'december',
  ];

  const generateNumberList = (start: number, end: number) => {
    const days = [];
    let num;
    for (num = start; num <= end; num++) {
      days.push(num.toString());
    }
    return days;
  };
  const days = generateNumberList(1, 31);
  const years = generateNumberList(1930, new Date().getFullYear()).reverse();

  const AddPhoneComponent = () => {
    return (
      <Box className={classes.addPhoneComponent}>
        <Typography variant="body2">No phone number entered</Typography>
        <Button style={{ textTransform: 'none' }} variant="outlined" onClick={() => setIsphone(true)}>
          <Typography variant="body2">Add a phone number</Typography>
        </Button>
      </Box>
    );
  };

  return (
    <Formik
      validationSchema={object({
        firstname: string().required('You First Name is required').min(2).max(100),
        lastname: string().required().min(2).max(100),
        email: string().required().min(2).max(100),
      })}
      initialValues={initialValues}
      onSubmit={(values, formikHelpers) => {
        alert(JSON.stringify(values));
      }}
    >
      {({ values, errors, touched }) => (
        <Form className={classes.formWrapper}>
          <FormGroup>
            <Box className={classes.groupWrapper}>
              <Box className={classes.labelWrapper}>
                <Typography variant="subtitle1">First name</Typography>
              </Box>

              <Field
                name="firstname"
                as={TextField}
                placeholder={values.firstname ? values.firstname : 'Firstname'}
                fullWidth
                size="small"
                className={classes.root}
              />
            </Box>
            <ErrorMessage name="firstname" component={TextError} />
          </FormGroup>

          <FormGroup>
            <Box className={classes.groupWrapper}>
              <Box className={classes.labelWrapper}>
                <Typography variant="subtitle1">Last name</Typography>
              </Box>
              <Field
                name="lastname"
                as={TextField}
                placeholder={values.lastname ? values.lastname : 'Lastname'}
                fullWidth
                size="small"
                className={classes.root}
              />
            </Box>
            <ErrorMessage name="lastname" component={TextError} />
          </FormGroup>

          <FormGroup>
            <Box className={classes.groupWrapper}>
              <Box className={classes.labelWrapper}>
                <Typography variant="subtitle1">Gender</Typography>
              </Box>

              <Field
                name="gender"
                as={TextField}
                select
                size="small"
                placeholder={values.gender ? values.gender : 'Gender'}
                className={`${classes.gender} ${classes.root}`}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Field>
            </Box>
          </FormGroup>

          <FormGroup>
            <Box className={classes.groupWrapper}>
              <Box className={classes.labelWrapper}>
                <Typography variant="subtitle1">Birth Date</Typography>
              </Box>

              <Box className={classes.birthdate}>
                <Box className={classes.month}>
                  <Field
                    name="birthMonth"
                    as={TextField}
                    select
                    size="small"
                    placeholder={values.birthMonth ? values.birthMonth : 'Month'}
                    fullWidth
                    className={classes.root}
                  >
                    {months.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month.charAt(0).toUpperCase() + month.slice(1)}
                      </MenuItem>
                    ))}
                  </Field>
                </Box>
                <Box className={classes.day}>
                  <Field
                    name="birthDay"
                    as={TextField}
                    select
                    size="small"
                    placeholder={values.birthDay ? values.birthDay : 'Day'}
                    fullWidth
                    className={classes.root}
                  >
                    {days.map((day) => (
                      <MenuItem key={day} value={day}>
                        {day}
                      </MenuItem>
                    ))}
                  </Field>
                </Box>
                <Box className={classes.year}>
                  <Field
                    name="birthYear"
                    as={TextField}
                    select
                    size="small"
                    placeholder={values.birthYear ? values.birthYear : 'Year'}
                    fullWidth
                    className={classes.root}
                  >
                    {years.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Field>
                </Box>
              </Box>
            </Box>
          </FormGroup>

          <FormGroup>
            <Box className={classes.groupWrapper}>
              <Box className={classes.labelWrapper}>
                <Typography variant="subtitle1">Email Address</Typography>
              </Box>
              <Field
                name="email"
                as={TextField}
                placeholder={values.email ? values.email : 'Email'}
                type="email"
                fullWidth
                size="small"
                className={classes.root}
              />
            </Box>
            <ErrorMessage name="email" component={TextError} />
          </FormGroup>

          <FormGroup>
            <Box className={classes.groupWrapper}>
              <Box className={classes.labelWrapper}>
                <Typography variant="subtitle1">Phone Number</Typography>
              </Box>
              {isPhone ? (
                <FormGroup>
                  <Field
                    name="phone"
                    as={TextField}
                    type="tel"
                    fullWidth
                    size="small"
                    placeholder={values.phone ? values.phone : 'Phone Number'}
                    className={classes.root}
                  />
                  {touched.phone && values.phone === '' ? setIsphone(false) : null}
                </FormGroup>
              ) : (
                <AddPhoneComponent />
              )}
            </Box>
          </FormGroup>

          <FormGroup>
            <Box className={classes.groupWrapper}>
              <Box className={classes.labelWrapper}>
                <Typography variant="subtitle1">Where you live</Typography>
              </Box>

              <Field
                name="address"
                as={TextField}
                placeholder={values.address ? values.address : 'Address'}
                fullWidth
                size="small"
                className={classes.root}
              />
            </Box>
          </FormGroup>
          <FormGroup>
            <Box className={classes.groupWrapperDescription}>
              <Box className={classes.labelWrapperDescription}>
                <Typography variant="subtitle1">Describe Yourself</Typography>
              </Box>

              <Field
                name="description"
                as={TextField}
                placeholder={values.description ? values.description : 'About you'}
                multiline
                rows={5}
                rowsMax={10}
                fullWidth
                size="small"
                className={classes.root}
              />
            </Box>
          </FormGroup>

          <Box className={classes.buttonWrapper}>
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              Save
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
