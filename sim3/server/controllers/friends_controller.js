

module.exports = {
    friends: (req, res, next) => {
        req.app.get('db').helousers().then((response) => {
            res.status(200).send(response)
        })
    },
    addFriends: (req, res, next) => {
        req.app.post('db').helousers().then((response) => {
            res.status(200).send(response)
        })
    },

    deleteFriends: (req, res, next) => {
        req.app.post('db').helousers().then((response) => {
            res.status(200).send(response)
        })
    }
}