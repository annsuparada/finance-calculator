import { PRINT_COMPOUND_INTEREST } from "../actions/index";


export const initialState = {
    isLoading: false,
    error: "",
    compoundInterest: {
            initialInvestment: 50,
            monthlyContribution: null,
            years: null,
            interestRate: null,
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