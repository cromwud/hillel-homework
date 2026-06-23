import { takeEvery, call, put, delay } from 'redux-saga/effects';
import {
  fetchTodosSuccess, addTodoSuccess, deleteTodoSuccess,
  toggleTodoSuccess, editTodoSuccess, clearTodosSuccess,
  todoOperationFailure,
  fetchTodosRequest, addTodoRequest, deleteTodoRequest,
  toggleTodoRequest, editTodoRequest, clearTodosRequest
} from './todoSlice';


function* fetchTodosSaga() {
  try {
    yield delay(500); 
   
    const mockData = [
      { id: 1, text: 'Вивчити Redux Saga', completed: false },
      { id: 2, text: 'Зробити TODO з кнопкою Clear', completed: true },
    ];
    yield put(fetchTodosSuccess(mockData)); 
  } catch (error) {
    yield put(todoOperationFailure(error.message));
  }
}


function* addTodoSaga(action) {
  try {
    yield delay(300);
    const newTodo = {
      id: Date.now(),
      text: action.payload,
      completed: false
    };
    yield put(addTodoSuccess(newTodo));
  } catch (error) {
    yield put(todoOperationFailure(error.message));
  }
}


function* deleteTodoSaga(action) {
  try {
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(todoOperationFailure(error.message));
  }
}


function* toggleTodoSaga(action) {
  try {
    yield put(toggleTodoSuccess(action.payload));
  } catch (error) {
    yield put(todoOperationFailure(error.message));
  }
}


function* editTodoSaga(action) {
  try {
    yield put(editTodoSuccess(action.payload));
  } catch (error) {
    yield put(todoOperationFailure(error.message));
  }
}


function* clearTodosSaga() {
  try {
    yield put(clearTodosSuccess());
  } catch (error) {
    yield put(todoOperationFailure(error.message));
  }
}

export default function* watchTodoSagas() {
  yield takeEvery(fetchTodosRequest.type, fetchTodosSaga);
  yield takeEvery(addTodoRequest.type, addTodoSaga);
  yield takeEvery(deleteTodoRequest.type, deleteTodoSaga);
  yield takeEvery(toggleTodoRequest.type, toggleTodoSaga);
  yield takeEvery(editTodoRequest.type, editTodoSaga);
  yield takeEvery(clearTodosRequest.type, clearTodosSaga);
}