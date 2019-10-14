const postsLoaded = (newPosts) => {
    return {
        type: 'POSTS_LOADED',
        payload: newPosts,

    };
};

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
};

const openMenu = () => {
    return {
        type: 'OPEN_MENU'

    }
};
const closeMenu = () => {
    return {
        type: 'CLOSE_MENU'
    }
};
const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    };
};

export {
    postsLoaded,
    openMenu,
    closeMenu,
    booksRequested,
    booksError
};
