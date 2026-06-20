import * as Yup from 'yup';

export const todoSchema = Yup.object({
  todoText: Yup.string()
    .min(5, 'Мінімальна довжина завдання - 5 символів!')
    .required('Поле обовʼязкове для заповнення!'),
});