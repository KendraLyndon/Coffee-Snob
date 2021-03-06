exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('chains').insert({id: 1001, name: 'Starbucks', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1002, name: 'Tully', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1003, name: 'Caribou', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1004, name: 'McCafe', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1005, name: 'Costa Coffee', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1006, name: 'Tim Horton', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1007, name: 'Top Pot', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1008, name: 'The Coffee Bean & Tea Leaf', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1009, name: 'Dunn Bros', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1010, name: 'Seattle\'s Best', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1011, name: 'Coffee Beanery', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1012, name: 'Biggby', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1013, name: 'Gloria Jean', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1014, name: 'McDonalds', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1015, name: 'Dutch Bros', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1016, name: 'Au Bon Pain', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1017, name: 'Second Cup', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1018, name: 'Gimme!', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1019, name: 'Lavazza', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1020, name: 'White Castle', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1021, name: 'DRNK', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1022, name: 'Bridgehead', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1023, name: 'BeaverTails', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1024, name: 'Mister Donut', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1025, name: 'Panera Bread', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1026, name: 'Arby', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1027, name: 'Chick-fil-A', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1028, name: 'Pizza Hut', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1029, name: 'KFC', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1030, name: 'Applebee', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1031, name: 'Sonic', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1032, name: 'Olive Garden', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1033, name: 'Chili\'s', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1034, name: 'Dairy Queen', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1035, name: 'IHOP', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1036, name: 'Denny', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1037, name: 'Outback Steakhouse', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1038, name: 'Red Lobster', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1039, name: 'T.G.I. Friday\'s', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1040, name: '7-Eleven', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1041, name: 'Popeyes', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1042, name: 'Golden Corral', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1043, name: 'Cheesecake Factory', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1044, name: 'Panda Express', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1045, name: 'Little Caesars', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1046, name: 'Carl\'s Jr', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1047, name: 'Ruby Tuesday', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1048, name: 'Whataburger', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1049, name: 'Mariott', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1050, name: 'Red Robin', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1051, name: 'Hilton', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1052, name: 'LongHorn Steakhouse', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1053, name: 'Jimmy John\'s', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1054, name: 'Waffle House', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1055, name: 'Bob Evans', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1056, name: 'Five Guys', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1057, name: 'Sheraton', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1058, name: 'Church\'s Chicken', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1059, name: 'Hooters', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1060, name: 'Holiday Inn', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1061, name: 'Quizno', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1062, name: 'Zaxby\'s', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1063, name: 'Culver\'s', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1064, name: 'Bojangles', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1065, name: 'Papa Murphy', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1066, name: 'Carrabba', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1067, name: 'California Pizza Kitchen', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1068, name: 'In-N-Out', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1069, name: 'Hyatt', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1070, name: 'Costco', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1071, name: 'Wawa', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1072, name: 'Qdoba', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1073, name: 'CiCi\'s Pizza', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1074, name: 'Friendly\'s Ice Cream', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1075, name: 'Baskin-Robbins', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1076, name: 'Famous Dave\'s', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1077, name: 'Jason\'s Deli', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1078, name: 'El Pollo Loco', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1079, name: 'Del Taco', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1080, name: 'Einstein Bros', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1081, name: 'Sbarro', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1082, name: 'Chuck E. Cheese\'s', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1083, name: 'Cheddar\'s', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1084, name: 'Jamba Juice', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1085, name: 'Westin', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1086, name: 'Bonefish Grill', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1087, name: 'Alpine Bagels', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1088, name: 'Bagel Oasis', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1089, name: 'Barry Bagels', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1090, name: 'Cinnabon', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1091, name: 'Mrs. Fields', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1092, name: 'Wetzel\'s Pretzels', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1093, name: 'Corner Bakery', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1094, name: 'Perkins', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1095, name: 'Great Harvest', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1096, name: 'Atlanta Bread Company', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1097, name: 'La Brea', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1098, name: 'Big Apple Bagels', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1099, name: 'Yum-Yum Donuts', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1100, name: 'LaMar\'s Donuts', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1102, name: 'Noah\'s Bagels', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1103, name: 'House of Bread', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1104, name: 'Teavana', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1105, name: 'Argo', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1106, name: 'Barnes and Noble', created_at: '2016-04-01', updated_at: '2016-04-02'}),
    knex('chains').insert({id: 1107, name: 'Specialty\'s Cafe & Bakery', created_at: '2016-04-01', updated_at: '2016-04-02'})
  ]);
};
