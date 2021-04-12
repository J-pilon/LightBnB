const properties = require('./json/properties.json');
const users = require('./json/users.json');

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  console.log("11111111");
  return pool.query(`
  SELECT * FROM users WHERE email = $1;
  `, [email])
    .then(res => {
      console.log("res.rows1 ",res.rows); 
      return res.rows;

    })
    .catch(err => {
      return null;
    })
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  console.log("22222");

  return pool.query(`
  SELECT * FROM users WHERE id = $1;
  `, [email])
    .then(res => {
      console.log("res.rows2 ",res.rows); 
      return res.rows;

    })
    .catch(err => {
      return null;
    })
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const { name, email, password } = user;
  return pool.query(`
    INSERT INTO users (name, email, password) 
    VALUES ($1, $2, $3)
    RETURNING *;
  `,[name, email, password])
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    })
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return pool.query(`
    SELECT properties.*, reservations.*, avg(rating) as average_rating
    FROM reservations
    JOIN properties ON reservations.property_id = properties.id
    JOIN property_reviews ON properties.id = property_reviews.property_id 
    WHERE reservations.guest_id = $1
    AND reservations.end_date < now()::date
    GROUP BY properties.id, reservations.id
    ORDER BY reservations.start_date
    LIMIT $2;
  `, [guest_id, limit])
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.log(err)
    })
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
 const getAllProperties = function(options, limit = 10) {
  const queryParams = [];
  const queryString = `
      SELECT properties.*, avg(property_reviews.rating) as average_rating
      FROM properties
      JOIN property_reviews ON properties.id = property_id
   `;

  if(options.city) {
    queryParams.push(`%options.city%`);
    queryString += `WHERE city LIKE $${queryParams.length}`;
      if(options.user_id) {
        queryParams.push(user_id);
        queryString += `AND user_id = $${queryParams.length}`;
      }
      if (options.minimum_price_per_night && options.maximum_price_per_night) {
        queryParams.push(options.minimum_price_per_night).push(options.maximum_price_per_night);
        queryString += `
        AND minimum_price_per_night > $${queryParams.length - 1} 
        AND maximum_price_per_night < $${queryParams.length}
      `;
      }
      if (options.minimum_rating) {
        queryParams.push(options.minimum_rating);
        queryString += `AND minimum_rating > $${queryParams.length}`;
      }
  }

  queryParams.push(limit);
  queryString += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};`;

  console.log(queryString, queryParams);

  return pool.query(queryString, queryParams)
  .then(res => res.rows)
  .catch(err => {console.log(err)});
}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const { owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms } = property;

  pool.query(`
    INSERT INTO properties (
      owner_id = $1
      title = $2
      description = $3
      thumbnail_photo_url = $4
      cover_photo_url = $5
      cost_per_night = $6
      parking_spaces = $7
      number_of_bathrooms = $8
      number_of_bedrooms = $9
      country = $10
      street = $11
      city = $12
      province = $13
      post_code = $14
    )
    VALUES ()
  `, [owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, 
  post_code])
    .then(res => res.rows)
    .catch(err => console.log(err))
}
exports.addProperty = addProperty;
