import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: '1', name: 'oladax', email: 'oladax@gmail.com', textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis facere nulla, soluta autem provident consequatur, nemo qui, quibusdam harum odit molest'},
  {id: '2', name: 'daniel', email: 'daniel@gmail.com', textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis facere nulla, soluta autem provident consequatur, nemo qui, quibusdam harum odit molest'},
  {id: '3', name: 'olamide', email: 'olamide@gmail.com', textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis facere nulla, soluta autem provident consequatur, nemo qui, quibusdam harum odit molest'}
];

const userSlice = createSlice({
  name: 'users', // Changed from 'products' to 'users' to reflect the data being managed
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload); // Assuming action.payload is an object representing a user
    },

    editUser:(state, action) => {
      const {id, name, email, textarea} = action.payload;
      const existinguser = state.find(user => user.id === id);

      if (existinguser){
        existinguser.name = name;
        existinguser.email = email;
        existinguser.textarea = textarea
      }
    },

    deleteUser: (state, action) => {
      const {id} = action.payload
      const existinguser = state.find(user => user.id === id);
      if(existinguser){
        return state.filter(user => user.id !== id)
      }
    }
  }
});

export const { addUser, editUser, deleteUser } = userSlice.actions; // Exporting the addUser action

export default userSlice.reducer;
