//selectors

export const getAllCategories = (state) => state.categories;

const catagoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default catagoriesReducer;
