import avatar from './../media/user_no_photo.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: []
        // {
        //     id: 1, name: 'Alina',
        //     photos: {large: avatar, small: null},
        //     status: 'some status', followed: true
        // },
        // {
        //     id: 2, name: 'Tim',
        //     photos: {large: avatar, small: null},
        //     status: 'some status', followed: true
        // },
        // {
        //     id: 3, name: 'Kira',
        //     photos: {large: avatar, small: null},
        //     status: 'some status', followed: true
        // },
        // {
        //     id: 4, name: 'Nikita',
        //     photos: {large: avatar, small: null}, status: 'some status',
        //     address: {country: 'Russia', city: 'St. Petersburg'}, followed: true
        // },
        // {
        //     id: 5, name: 'Anton',
        //     photos: {large: avatar, small: null},
        //     status: 'some status', address: {country: 'Russia', city: 'Belorechensk'}, followed: true
        // },
        // {
        //     id: 6, name: 'Nataliya',
        //     photos: {large: avatar, small: null},
        //     status: 'some status', address: {country: 'Russia', city: 'Feodosiya'}, followed: true
        // },
        // {
        //     id: 7, name: 'Sasha',
        //     photos: {large: avatar, small: null},
        //     status: 'some status', address: {country: 'Russia', city: 'Feodosiya'}, followed: true
        // },],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state,
                users: [...state.users, ...action.users]}
        default:
            console.log('Error. Something went wrong')
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer