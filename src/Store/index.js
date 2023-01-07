import { createStore } from "redux";

const initState = {
    BASE_API_URL: "https://out-circle2023.cleverapps.io",
    userInfo: localStorage.getItem("user-info")
}

const rootReducer = (state = initState, action) => {

    if (action.type === "setUserInfo") {

        return { ...state, userInfo: localStorage.getItem("user-info") };

    }

    if (action.type === "clearUserInfo") {

        return { ...state, userInfo: null };

    }
    
    return state;
}

const store = createStore(rootReducer);

export default store;