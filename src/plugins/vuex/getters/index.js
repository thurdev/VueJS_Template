module.exports = {
    getCounter: state => {
        return state.count > 0 ? 'Maior do que zero' : 'Menor ou igual a zero'
    }
}