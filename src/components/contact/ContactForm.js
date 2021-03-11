import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = (props) => {
    return (
        <div className="col">
            <Form>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input type="text" name="name" id="name" placeholder="Write your name" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email: </Label>
                    <Input type="email" name="email" id="email" placeholder="Write your email" />
                </FormGroup>
                <FormGroup>
                    <Label for="subject">Select subject: </Label>
                    <Input type="select" name="select" id="subject">
                        <option>Becoming an astronaut</option>
                        <option>Careers at NASA</option>
                        <option>Mars Program</option>
                        <option>Permission to use NASA images</option>
                        <option>Student Resources</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="questions">Questions:</Label>
                    <Input type="textarea" name="text" id="questions" />
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        </div>
    );
}

export default ContactForm;