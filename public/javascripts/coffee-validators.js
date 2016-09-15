function checkIfCafe(types){
  var isCafe = true;
  var invalidTypes = ['school', 'church'];
  for(var i=0; i<types.length; i++){
    for(var j=0; j<invalidTypes.length; j++){
      if(types[i] === invalidTypes[j]){
        isCafe = false;
      }
    }
  }
  return isCafe;
}

function checkIfChain(name){
  // $.ajax({
  //   url:"localhost:3000/chains",
  //   method:"get"
  // })
  var chains = ['Starbucks','Tully','Peet','Dunkin','Caribou','McCafe',
  'Costa Coffee', 'Tim Horton', 'Top Pot','The Coffee Bean & Tea Leaf',
  'Dunn Bros', "Seattle's Best", 'Coffee Beanery', 'Biggby', 'Gloria Jean',
  'McDonalds', 'Dutch Bros', 'Au Bon Pain', 'Second Cup', 'Gimme!', 'Lavazza',
  'White Castle', 'DRNK', 'Bridgehead', 'Krispy Kreme', 'BeaverTails', 'Mister Donut',
  'Panera Bread', 'Arby', 'Chick-fil-A', 'Pizza Hut', 'KFC', 'Applebee', 'Sonic',
  'Olive Garden', "Chili's", 'Dairy Queen', 'IHOP', 'Denny', 'Outback Steakhouse',
  'Red Lobster', "T.G.I. Friday's", '7-Eleven', 'Popeyes', 'Golden Corral', 'Cheesecake Factory',
  'Panda Express', 'Little Caesars', "Carl's Jr", 'Ruby Tuesday', 'Whataburger', 'Mariott',
  'Red Robin', 'Hilton', 'LongHorn Steakhouse', "Jimmy John's", 'Waffle House',
  'Bob Evans', 'Five Guys', 'Sheraton', "Church's Chicken", 'Hooters', 'Holiday Inn',
  'Quiznos', "Zaxby's", "Culver's", 'Bojangles', 'Papa Murphy', 'Carrabba',
  'California Pizza Kitchen', 'In-N-Out', 'Hyatt', 'Costco', 'Wawa', 'Qdoba',
  "CiCi's Pizza", "Friendly's Ice Cream", 'Baskin-Robbins', "Famous Dave's",
  "Jason's Deli", 'El Pollo Loco', 'Del Taco', 'Target', 'Einstein Bros', 'Sbarro',
  'Krystal', "Chuck E. Cheese's", "Cheddar's", 'Jamba Juice', 'Westin', 'Bonefish Grill',
  'Alpine Bagels', 'Bagel Oasis', 'Barry Bagels', 'Cinnabon', 'Mrs. Fields',
  "Wetzel's Pretzels", 'Corner Bakery', 'Perkins', 'Great Harvest', 'Atlanta Bread Company',
  'La Brea', 'Big Apple Bagels', 'Yum-Yum Donuts', "LaMar's Donuts", "Noah's Bagels",
  'House of Bread','Teavana','Argo','Barnes and Noble',"Specialty's Cafe & Bakery"];
  for(var i=0; i<chains.length; i++){
    if(name.includes(chains[i])){
      return true;
    }
  }
  return false;
};
