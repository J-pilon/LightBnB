INSERT INTO users (id, name, email, password) 
VALUES (1, 'John', 'j@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
(2, 'Pual', 'p@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
(3, 'Cole', 'c@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
(4, 'Jason', 'ja@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
(5, 'Peter', 'pe@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
(6, 'Chris', 'ch@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (id, owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms,  number_of_bedrooms, country, street, province, city, post_code, active) 
VALUES (1, 1, 'beach', 'description', '/url/thumbnail', '/url/cover', 300, 0, 1, 2, 'Canada', 'bc', 'Princess', 'postalCode', true),
(2, 2, 'forest', 'description', '/url/thumbnail', '/url/cover', 400, 2, 1, 1, 'Canada', 'ab', 'Mario', 'postalCode', true),
(3, 3, 'lake', 'description', '/url/thumbnail', '/url/cover', 350, 1, 1, 2, 'Canada', 'on', 'Wario', 'postalCode', true);

INSERT INTO reservations (id, start_date, end_date, property_id, guest_id) 
VALUES (1, '2018-02-27', '2018-03-26', 1, 4),
(2, '2019-05-20', '2019-05-26', 2, 5),
(3, '2020-01-05', '2020-01-09', 3, 6);

INSERT INTO property_reviews (id, guest_id, property_id, reservation_id, rating, message)
VALUES (1, 4, 1, 1, 5, 'message'),
(2, 5, 2, 2, 5, 'message'),
(3, 6, 3, 3, 4, 'message');

