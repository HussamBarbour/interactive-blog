function reducer(state, action) {
    switch (action.type) {

        case 'SET_CATEGORIES':
            const { categories } = action.payload;
            return { ...state, categories };

        case 'SET_FEATURED_POSTS':
            const { featured_posts } = action.payload;
            return { ...state, featured_posts };

    }
}

export default reducer;