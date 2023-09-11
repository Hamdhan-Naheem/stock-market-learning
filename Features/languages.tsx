import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I18n } from 'aws-amplify';

export interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.value = value;
      I18n.setLanguage(value);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
