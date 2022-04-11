const initialState = {
    username: JSON.parse(localStorage.getItem("username")) || null,
    balance: null,
    transactions: null


}

export default initialState;