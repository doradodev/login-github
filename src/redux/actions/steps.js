export const initStep = (maxSteps) => ({
    type: 'SET_INITIAL_STEP',
    payload: {
        "currentStep": 1,
        maxSteps
    }
})

export const updateStep = step => ({
    type: 'UPDATE_STEP',
    payload: {
        "currentStep": step
    }
})