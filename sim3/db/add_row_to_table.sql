INSERT INTO helousers 
    (first_name,
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
    )
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
RETURNING *;

--Returning * will retrun entire table after you added a row