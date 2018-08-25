module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('LANDING PAGE IS HERE')
    })
}