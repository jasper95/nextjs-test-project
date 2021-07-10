import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Layout from '../src/components/layout'
import axios from '../src/axios'
import { useAsync } from 'react-async';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  title: yup
    .string()
    .required('Title is required'),
  description: yup
    .string()
    .required('Author is required'),
});

export default function NewPostPage() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      title: '',
      description: '',
      published_date: new Date()
    },
    validationSchema: validationSchema,
    onSubmit,
  });
  const submitForm = useAsync({
    deferFn([data]) {
      return axios.post('/posts', data)
    },
    onReject() {
      alert('Network error!!!')
    },
    onResolve() {
      formik.resetForm()
      alert('Post succesfully added')
    }
  })
  return (
    <Layout title="New Post">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Title"
            name="title"
            id='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Description"
            name="description"
            multiline
            rows={4}
            helperText={`${formik.values.description.length}/255`}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            inputProps={{ maxLength: 255 }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Published Date"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            id='published_date'
            name='published_date'
            autoOk
            onChange={(value) => formik.setFieldValue('published_date', value)}
            value={formik.values.published_date}
            error={formik.touched.published_date && Boolean(formik.errors.published_date)}
            helperText={formik.touched.published_date && formik.errors.published_date}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </MuiPickersUtilsProvider>
    </Layout>
  );

  function onSubmit(values) {
    return submitForm.run(values)
  }
}
