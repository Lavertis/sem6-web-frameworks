import React, {FC, useState} from 'react';
import {useFormik} from "formik";
import * as yup from "yup";
import {Button, Col, Form, InputGroup, Row, Table} from "react-bootstrap";

const validationSchema = yup.object().shape({
    height: yup.number().required().positive().label('Height'),
    weight: yup.number().required().positive().label('Weight')
});

interface BmiCalculatorProps {
}

const BmiCalculator: FC<BmiCalculatorProps> = () => {
    const [bmi, setBmi] = useState<string>();
    const [bmiCategory, setBmiCategory] = useState<string>();

    const formik = useFormik({
        initialValues: {
            height: 0,
            weight: 0
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            const bmi = values.weight / (values.height / 100) ** 2;
            setBmi(bmi.toFixed(2));
            setBmiCategory(getBmiCategory(bmi));
        }
    })

    const getBmiCategory = (bmi: number): string => {
        if (bmi < 18.5)
            return 'Underweight';
        if (bmi < 25)
            return 'Normal';
        if (bmi < 30)
            return 'Overweight';
        return 'Obese';
    }

    return (
        <div>
            <h1 className="mb-4">BMI Calculator</h1>
            <Form onSubmit={formik.handleSubmit} noValidate>
                <Row className="mb-3">
                    <Col>
                        <Form.Floating className="mb-3 flex-grow-1 input-group">
                            <Form.Control
                                type="number"
                                name="height"
                                placeholder="Height"
                                min={0}
                                step={0.5}
                                max={300}
                                onChange={formik.handleChange}
                                value={formik.values.height}
                                // isValid={formik.touched.height && !formik.errors.height}
                                isInvalid={formik.touched.height && !!formik.errors.height}
                            />
                            <InputGroup.Text className="rounded-end">cm</InputGroup.Text>
                            <label htmlFor="inputBalance" className="z-index-3">Height</label>
                            <Form.Control.Feedback type="invalid">{formik.errors.height}</Form.Control.Feedback>
                        </Form.Floating>
                    </Col>
                    <Col>
                        <Form.Floating className="mb-3 flex-grow-1 input-group">
                            <Form.Control
                                type="number"
                                name="weight"
                                placeholder="Weight"
                                min={0}
                                step={0.1}
                                max={300}
                                onChange={formik.handleChange}
                                value={formik.values.weight}
                                // isValid={formik.touched.weight && !formik.errors.weight}
                                isInvalid={formik.touched.weight && !!formik.errors.weight}
                            />
                            <InputGroup.Text className="rounded-end">kg</InputGroup.Text>
                            <label htmlFor="inputBalance" className="z-index-3">Weight</label>
                            <Form.Control.Feedback type="invalid">{formik.errors.weight}</Form.Control.Feedback>
                        </Form.Floating>
                    </Col>
                </Row>
                <Button type="submit" variant="primary" className="mb-4">Calculate</Button>
            </Form>

            {bmi && (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>BMI</th>
                        <th>Category</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{bmi}</td>
                        <td>{bmiCategory}</td>
                    </tr>
                    </tbody>
                </Table>
            )}

        </div>
    );
}

export default BmiCalculator;
