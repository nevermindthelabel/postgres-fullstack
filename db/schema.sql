create table house (ID SERIAL PRIMARY KEY, address VARCHAR(30), price money, square_feet integer, num_bed integer, num_bath integer, garage boolean, num_stories integer, swimming_pool boolean)
INSERT INTO house (address, price, square_feet, num_bed, num_bath,garage, num_stories, swimming_pool)
VALUES('123 fake street',
       1500,
       1500,
       3,
       2,
       true,
       1,
       true);

