import { PRINT_COMPOUND_INTEREST } from "../actions/index";


export const initialState = {
    isLoading: false,
    error: "",
    compound: {
            initialInvestment: 1000,
            monthlyContribution: 100,
            years: 10,
            interestRate: 7,
        },
    interestReturn: []
    
}

export const compoundInterestReducer = (state = initialState, action) => {
    switch (action.type){
        case PRINT_COMPOUND_INTEREST:
            return {
                ...state,
                interestReturn: action.payload,
            }
        default:
            return state
    }
}