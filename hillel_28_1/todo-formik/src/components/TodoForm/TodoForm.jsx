import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { todoSchema } from '../../schemas/todoSchema';
import './TodoForm.css';

function TodoForm({ onAddTodo }) {
  return (
    <Formik
      initialValues={{ todoText: '' }}
      validationSchema={todoSchema}
      onSubmit={(values, { resetForm }) => {
        onAddTodo(values.todoText);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="todo-form">
          <div className="input-group">
            <Field
              type="text"
              name="todoText"
              placeholder="Що потрібно зробити (мін. 5 символів)?"
              className={`todo-input ${touched.todoText && errors.todoText ? 'input-error' : ''}`}
            />
            
            <ErrorMessage name="todoText" component="div" className="error-message" />
          </div>
          
          <button type="submit" className="submit-btn">
            Додати
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default TodoForm;