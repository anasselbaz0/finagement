import React, {useState} from 'react';
import Drawer from "@material-ui/core/Drawer";
import COLORS from "../../utils/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import {useFormik} from "formik";
import * as Yup from 'yup';
import TextInput from "../../components/Form/TextInput";
import SelectInput from "../../components/Form/SelectInput";
import {MONTHS} from "../App/constants";
import Button from "../../components/Button";

const styles = {
    drawer: {
        minWidth: '600px',
        maxWidth: '1000px',
        width: '50%',
        height: '100vh',
        backgroundColor: COLORS.c1,
        color: COLORS.white,
        padding: '1rem',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 500,
        margin: '1.5rem 0 2.5rem'
    }
}


const AddExerciseDrawer = (props) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            month: '',
            year: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            month: Yup.string().required('Required'),
            year: Yup.number()
                .min(new Date().getFullYear(), 'Cannot create exercise with a year in the past!')
                .max(new Date().getFullYear() + 100, 'That\'s too much future planning!')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    const {classes} = props;
    return (
        <Drawer anchor='right' open={props.open} onClose={props.onClose}>
            <div className={classes.drawer}>
                <div className={classes.title}> Add Exercise</div>
                <form onSubmit={formik.handleSubmit}>
                    <TextInput
                        type='text'
                        label='title'
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.errors.title}
                    />
                    <SelectInput
                        label='month'
                        options={MONTHS}
                        value={formik.values.month}
                        onChange={formik.handleChange}
                        error={formik.errors.month}
                    />
                    <TextInput
                        type='number'
                        label='year'
                        value={formik.values.year}
                        onChange={formik.handleChange}
                        error={formik.errors.year}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Drawer>
    );
};

export default withStyles(styles)(AddExerciseDrawer);
