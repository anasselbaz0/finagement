import React, {useState} from 'react';
import {connect} from 'react-redux';
import Drawer from "@material-ui/core/Drawer";
import COLORS from "../../utils/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import {useFormik} from "formik";
import * as Yup from 'yup';
import TextInput from "../Form/TextInput";
import Button from "../General/Button";
import {addExercise} from "../../state/exercises/actions";

const styles = {
    drawer: {
        minWidth: '600px',
        maxWidth: '1000px',
        width: '50%',
        height: '100vh',
        backgroundColor: COLORS.white,
        color: COLORS.c0,
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
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            month: Yup.number()
                .min(1, 'Month incorrect. Enter a Month number between 1 and 12.')
                .max(12, 'Month incorrect. Enter a Month number between 1 and 12.')
                .required('Required'),
            year: Yup.number()
                .min(new Date().getFullYear(), 'Cannot create exercise with a year in the past!')
                .max(new Date().getFullYear() + 100, 'That\'s too much future planning!')
                .required('Required'),
        }),
        onSubmit: values => {
            props.addExercise(values, props.userId, props.token)
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
                    <TextInput
                        type='number'
                        label='month'
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

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.user.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addExercise: (exercise, userId, token) => dispatch(addExercise(exercise, userId, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddExerciseDrawer));
