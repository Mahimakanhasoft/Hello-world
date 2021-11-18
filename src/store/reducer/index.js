const initialState = {
    list: [],
    id: "",
    did: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLESUBMIT':
            if (action.data) {
                console.log("reducer",action.data);
                let dt = {
                    first_name: action.data.first_name,
                    email: action.data.email,
                    contact: action.data.contact,
                    address: action.data.address,
                }
                let arr = state.list
                arr.push(dt);
                return { ...state, list: arr }
            }
            else {
                console.log("not valid");
            }
        }
}