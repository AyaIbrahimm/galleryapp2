
import { IMAGES } from '../constants';

const searchReducer = (state = 1, action) => {
    switch (action.type) {
        case IMAGES.SEARCH:
            return {
                ...state,
                text: action.payload,
                loading: false
              };
        default:
            return state;
    }
};

export default searchReducer;