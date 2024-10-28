import type { AppDispatch, AppStore } from "@/store"

type ThunkAction<T = any> = (dispatch: AppDispatch, state: AppStore["getState"]) => Promise<T>

export const createAsyncAction = <T = any, R = any>(cb: (arg: T) => ThunkAction<R>) => {
  return cb
}
