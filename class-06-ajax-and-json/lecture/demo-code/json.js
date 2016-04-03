var article = {
  author: 'Virginia Sawayn',
  title: 'Navigating Solid State Multi-byte Monitors'
};

var article = {
  "author": "Virginia Sawayn",
  "title": "Navigating Solid State Multi-byte Monitors"
};

//JSON
// {
//   "company": "Volkswagen",
//    "name": "Vento",
//    "price": 800000
// }
//XML - Extensive Markup Language
//<car>
//   <company>Volkswagen</company>
//   <name>Vento</name>
//   <price>800000</price>
//</car>

// A polygon object:
var polygon = {
  name: 'Pentagon',
  sides: 5,
  sidesLength: 12,
  regular: true
};

// ...as JSON:
// {
//   "name": "Pentagon",
//   "sides": 5,
//   "sidesLength": 12,
//   "regular": true
// }

// A polygon object:
var polygon = {
  name: 'Pentagon',
  sides: 5,
  sidesLength: [10, 8, 8, 10, 10],
  regular: false,
  getName: function() {
    return name;
  }
};

// ...as JSON:
// {
//     "name": "Pentagon",
//     "sides": 5,
//     "sidesLength": [
//         10,
//         12,
//         12,
//         10,
//         10
//     ],
//     "regular": true
// }

// Embedded objects:
var raceHorse = {
  name: 'American Pharoah',
  jockey: {
    name: 'Victor Espinoza',
    yob: 1972
  },
  breeder: {
    name: 'Zayat Stables',
    location: {
      city: 'Hackensack',
      state: 'New Jersey'
    }
  }
}

// ...as JSON
// {
//     "name": "American Pharoah",
//     "jockey": {
//       "name": "Victor Espinoza",
//       "yob": 1972
//     },
//     "breeder": {
//         "name": "Zayat Stables",
//         "location": {
//             "city": "Hackensack",
//             "state": "New Jersey"
//         }
//     }
// }
//
// {
//   "pilots": [
//     {
//       "name": "Amelia Earhart",
//       "yob": 1897,
//       "yod": 1936
//     },
//     {
//       "name": "Anne Morrow Lindbergh",
//       "yob": 1906,
//       "yod": 2001
//     },
//     {
//       "name": "Chuck Yeager",
//       "yob": 1923,
//       "yod": null
//     }
//   ]
// }
//
// JSON.stringify(myObject);
// JSON.parse(dataPoints);
