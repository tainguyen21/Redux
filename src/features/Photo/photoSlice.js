const { createSlice } = require("@reduxjs/toolkit");

const photo = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { reducer, actions } = photo;
const { addPhoto } = actions;

export { addPhoto };

export default reducer;
