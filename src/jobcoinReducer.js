import ACTION_TYPES from './ACTION_TYPES'

const jobcoinReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USERNAME: {
            localStorage.setItem('username', JSON.stringify(action.payload))
            return {
                ...state,
                username: action.payload,
            }
        }
        case ACTION_TYPES.SET_BALANCE: {
            return {
                ...state,
                balance: action.payload,
            }
        }
        case ACTION_TYPES.SET_TRANSACTIONS: {
            return {
                ...state,
                transactions: [...action.payload],
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default jobcoinReducer
