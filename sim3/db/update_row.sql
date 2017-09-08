UPDATE helousers
SET 
    first_name = $2,
    last_name = $3,
    gender = $4,
    hair_color = $5,
    eye_color = $6,
    user_image = $7,
    hobby = $8,
    birthday_day = $9,
    birthday_month = $10,
    birthday_year = $11,
    user_friends = $12,
    auth_id = $13
WHERE id = $1;
