export function schoolyearReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_DEFAULT_YR': return action.payload;

        default: return state;
    }
}