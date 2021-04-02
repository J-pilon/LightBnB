INSERT INTO users (name, email, password) 
VALUES ('John', 'j@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Pual', 'p@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Cole', 'c@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Jason', 'ja@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Peter', 'pe@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Chris', 'ch@google.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (id, owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms,  number_of_bedrooms, country, street, province, city, post_code, active) 
VALUES (1, 'beach', 'description', '/url/thumbnail', '/url/cover', 300, 0, 1, 2, 'Canada', 'bc', 'Princess', 'postalCode', true),
(2, 'forest', 'description', '/url/thumbnail', '/url/cover', 400, 2, 1, 1, 'Canada', 'ab', 'Mario', 'postalCode', true),
(3, 'lake', 'description', '/url/thumbnail', '/url/cover', 350, 1, 1, 2, 'Canada', 'on', 'Wario', 'postalCode', true);

INSERT INTO reservations (start_date, end_date, property_id, guest_id) 
VALUES ('2018-02-27', '2018-03-26', 1, 4),
('2019-05-20', '2019-05-26', 2, 5),
('2020-01-05', '2020-01-09', 3, 6);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (4, 1, 1, 5, 'message'),
(5, 2, 2, 5, 'message'),
(6, 3, 3, 4, 'message');

