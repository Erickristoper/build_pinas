INSERT INTO material (id, name, description, unit_of_measurement) VALUES
(1,	'Copper Pipe',	'Type L copper pipe for plumbing systems',	'meters'),
(2,	'PVC Pipe',	'Schedule 40 PVC pipe for drainage systems',	'meters'),
(3,	'2x4 Lumber	Kiln-dried', '2x4 lumber for framing',	'pieces'),
(4,	'Drywall',	'1/2" thick drywall for walls and ceilings',	'sheets'),
(5,	'Paint',	'Latex-based paint for interior walls and ceilings',	'gallons'),
(6,	'Carpet',	'Medium-pile carpet for flooring',	'square meters'),
(7,	'Ceramic Tile',	'Glazed ceramic tile for flooring and walls',	'square meters'),
(8,	'Wood Flooring',	'3/4" thick hardwood flooring',	'square meters'),
(9,	'Insulation	Fiberglass', 'insulation for walls and ceilings',	'bags'),
(10,	'Gypsum Board',	'1/2" thick gypsum board for walls and ceilings',	'sheets'),
(11,	'Roofing Shingles',	'Asphalt roofing shingles for roofing',	'bundles'),
(12,	'Plywood',	'1/2" thick plywood for subfloors and walls',	'sheets'),
(13,	'MDF',	'Medium-density fiberboard for trim and molding',	'sheets'),
(14,	'Granite Countertops',	'Granite countertops for kitchen and bathroom',	'square meters'),
(15,	'Laminate Countertops',	'Laminate countertops for kitchen and bathroom',	'square meters'),
(16,	'Vinyl Siding',	'Vinyl siding for exterior walls',	'boxes'),
(17,	'Brick',	'Clay brick for exterior walls',	'pieces'),
(18,	'Concrete Block',	'Concrete block for walls and foundations',	'pieces'),
(19,	'Rebar',	'Steel rebar for reinforced concrete',	'tons'),
(20,	'Electrical Wire',	'Copper electrical wire for wiring',	'meters');


INSERT INTO project (id, name, description, location) VALUES
(1,	'Office Fit-out',	'Fit-out of a 5,000 sqft office space in Makati CBD',	'123 Yakal St, Makati City, PH 10001'),
(2,	'Restaurant Renovation',	'Renovation of a 3,000 sqft restaurant space in uptown mall',	'456 Dela Rosa, Mandaluyong City, TG 10013'),
(3,	'Condo Unit Renovation for Airbnb',	'Renovation of a 1-bedroom condo unit in a high-rise building to create a luxurious and modern space for Airbnb rental',	'789 High Street, Bonifacio Global City, PH 33139');


INSERT INTO project_materials (id, project_id, work_id, material_id, quantity, cost) VALUES
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


INSERT INTO supplier (id, name, contact_info) VALUES
(1,	'Wilcon Depot',	'Chino Roces Ave, Makati City, Philippines 1234, (02) 555-1234'),
(2,	'Hardware Zone',	'EDSA, Quezon City, Philippines 1105, (02) 911-1234'),
(3,	'True Value',	'BGC, Taguig City, Philippines 1634, (02) 555-5678'),
(4,	'Ace Hardware',	'Glorietta, Makati City, Philippines 1226, (02) 752-1234'),
(5,	'SM Home',	'SM Mall of Asia, Pasay City, Philippines 1300, (02) 556-0123'),
(6,	'Filbuild',	'Libis, Quezon City, Philippines 1110, (02) 911-5678'),
(7,	'Pacific Paint',	'Bo. Kapitolyo, Pasig City, Philippines 1603, (02) 642-1234'),
(8,	'Boysen',	'Mandaluyong City, Philippines 1550, (02) 531-1234'),
(9,	'Davis Paint',	'Caloocan City, Philippines 1400, (02) 365-1234'),
(10,	'Island Paints',	'Cebu City, Philippines 6000, (032) 253-1234');


INSERT INTO work (id, name, description) VALUES
(1,	'Plumbing',	'Installation of pipes, fixtures, and appliances for water and gas systems'),
(2,	'Electrical',	'Installation of electrical systems, including wiring, outlets, and lighting fixtures'),
(3,	'Carpentry',	'Installation of woodwork, including framing, flooring, and finishing'),
(4,	'Painting and Decorating',	'Application of paint, coatings, and other finishes to interior and exterior surfaces'),
(5,	'Flooring',	'Installation of flooring materials, including hardwood, carpet, tile, and resilient flooring');
