import { configureStore } from '@reduxjs/toolkit';
import { projectListSlice } from '../screens/project-list/project-list.slice';
import { authSlice } from './auth.slice';

export const rootReducer = {
  // 获取方法
  projectList: projectListSlice.reducer,
  // 注册 auth
  auth: authSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
