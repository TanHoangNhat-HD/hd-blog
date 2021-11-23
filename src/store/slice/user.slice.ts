import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  username: string | null
}

const initialState: UserState = {
  username: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetail: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload
    },
  },
})

export const { setUserDetail } = userSlice.actions

export default userSlice.reducer
