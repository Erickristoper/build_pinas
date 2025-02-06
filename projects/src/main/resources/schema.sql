INSERT INTO project (id, project_owner, name, description, location) VALUES
(1,	202, 'Office Fit-out',	'Fit-out of a 5,000 sqft office space in Makati CBD',	'123 Yakal St, Makati City, PH 10001'),
(2,	202, 'Restaurant Renovation',	'Renovation of a 3,000 sqft restaurant space in uptown mall',	'456 Dela Rosa, Mandaluyong City, TG 10013'),
(3,	202, 'Condo Unit Renovation for Airbnb',	'Renovation of a 1-bedroom condo unit in a high-rise building to create a luxurious and modern space for Airbnb rental',	'789 High Street, Bonifacio Global City, PH 33139');


INSERT INTO project_material (id, project_id, work_id, material_id, quantity, cost) VALUES
(1,	3,	1,	1,	100.00,	500.00),
(2,	3,	1,	2,	50.00,	200.00),
(3,	3,	2,	3,	20.00,	1000.00),
(4,	3,	3,	4,	10.00,	500.00),
(5,	3,	4,	5,	5.00,	2000.00),
(6,	3,	1,	6,	50.00,	300.00),
(7,	3,	2,	7,	10.00,	800.00),
(8,	3,	3,	8,	20.00,	1200.00),
(9,	3,	4,	9,	5.00,	1500.00),
(16,	3,	1,	1,	100.00,	500.00),
(17,	3,	1,	2,	50.00,	200.00),
(18,	3,	2,	3,	20.00,	1000.00),
(19,	3,	3,	4,	10.00,	500.00),
(20,	3,	4,	5,	5.00,	2000.00),
(10,	3,	1,	10,	100.00,	600.00),
(11,    3,	2,	11,	20.00,	1000.00),
(12,	3,	3,	12,	10.00,	900.00),
(13,	3,	4,	13,	5.00,	2500.00),
(14,	3,	1,	14,	50.00,	400.00),
(15,	3,	2,	15,	10.00,	1200.00);
