 const actionincrease = (payload) => {
    return {
        type : 'INCREMENT'
    }
}

const DECaction = (payload) => {
    return {
        type: 'DECREASE'
    }
}

export { actionincrease, DECaction }