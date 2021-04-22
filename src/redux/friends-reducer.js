
let initialState = {
    friends: [
        {id: 1, name: 'Alina'},
        {id: 2, name: 'Tim'},
        {id: 3, name: 'Kira'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Anton'},
        {id: 6, name: 'Nataliya'},
        {id: 7, name: 'Sasha'},
    ],
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            console.log('Error. Something went wrong')
            return state
    }
}

export default friendsReducer