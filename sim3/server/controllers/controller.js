module.exports = {
    friends: (req, res, next) => {
        req.app.get('db').get_table().then((response) => {
            res.status(200).send(response)
        })
    },
    addFriends: (req,res,next) => {
        const db = req.app.get('db');
        const {first_name,
            last_name,
            gender,
            hair_color,
            eye_color,
            user_image,
            hobby,
            birthday_day,
            birthday_month,
            birthday_year,
            user_friends,
            auth_id
        } = req.body

        db.add_row_to_table([first_name,
            last_name,
            gender,
            hair_color,
            eye_color,
            user_image,
            hobby,
            birthday_day,
            birthday_month,
            birthday_year,
            user_friends,
            auth_id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
    ,
    deleteFriends: (req, res, next) => {
        req.app.post('db').helousers().then((response) => {
            res.status(200).send(response)
        })
    }
}