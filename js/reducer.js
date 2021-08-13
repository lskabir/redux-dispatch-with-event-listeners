// add code snippets from README
let button = document.getElementById('button')
let button1 = document.getElementById('button1')
let state

function reducer(state = {count: 0}, action) {
    switch(action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1}
            
        case 'DECREASE_COUNT':
            return {count: state.count - 1}

        default:
            return state
    }
}

function render() {
    let container = document.getElementById('container')
    container.textContent = state.count
}

function dispatch(action) {
    state = reducer(state, action)
    render()
}

button.addEventListener('click', () => dispatch({type: 'INCREASE_COUNT'}))
button1.addEventListener('click', () => dispatch({type: 'DECREASE_COUNT'}))



dispatch({type: '@@INIT'})