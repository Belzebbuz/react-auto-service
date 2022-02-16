import { Box, Button, Stack, Typography } from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import { goodsCreationDTO } from "./goods.model";
import { TextField } from 'formik-material-ui'

export default function StorageForm(props: storageFormProps) {
    return (

        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}>
            {(formikProps) => (
                <Form>
                    <Stack sx={{ display: 'flex',mt: 10, alignItems: 'center', alignSelf: 'center' }} spacing={2}>
                    <Typography variant='h6'>
                        {props.displayTitle}
                    </Typography>
                    <Field
                        style={{width: '800px'}}
                        component={TextField}
                        name='name'
                        label='Название товара'
                    />
                    <Button variant="contained" color="primary" disabled={formikProps.isSubmitting}
                        type='submit'
                        style={{width: 200}}>Добавить</Button>
                    <Link to='/goods'><Button variant="outlined" color='info'>Назад</Button></Link>

                    </Stack>
                </Form>)
}
        </Formik >
    )
}

interface storageFormProps {
    model: goodsCreationDTO;
    displayTitle: string;
    onSubmit(values: goodsCreationDTO, action: FormikHelpers<goodsCreationDTO>): void;
}