/// problem 0

var cat = {
    name: “Fluffy”,
    activities: [“play”, “eat cat food”],
    catFriends: [{
            name: “bar”,
            activities: [“be grumpy”, “eat bread omblet”],
            weight: 8,
            furcolor: “white”
        },
        {
            name: “foo”,
            activities: [“sleep”, “pre - sleep naps”],
            weight: 3
        }
    ]
};
console.log(cat);

cat.height = 5;
cat.weight = 12;
cat.name = "Fluffyy";
console.log(cat.catFriends[0].activities + "," + cat.catFriends[1].activities);
console.log(cat.catFriends[0].name + " " + cat.catFriends[1].name);
console.log(cat.catFriends[0].weight + cat.catFriends[1].weight);
console.log(cat.activities + " " + cat.catFriends[0].activities + " " + cat.catFriends[1].activities);
cat.catFriends[0].activities.push('Laser chase');
cat.catFriends[0].activities.push('purring');
cat.catFriends[1].activities.push('drink water');
cat.catFriends[1].activities.push('eat fish');
cat.catFriends[0].furcolor = "light brown";

===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
=== === === === === === === === === === === ==

/// problem 0
var myCar = {
    make: ‘Bugatti’,
    model: ‘Bugatti La Voiture Noire’,
    year: 2019,
    accidents: [{
            date: ‘3 / 15 / 2019’,
            damage_points: ‘5000’,
            atFaultForAccident: true
        },
        {
            date: ‘7 / 4 / 2022’,
            damage_points: ‘2200’,
            atFaultForAccident: true
        },
        {
            date: ‘6 / 22 / 2021’,
            damage_points: ‘7900’,
            atFaultForAccident: true
        }
    ]
};

for (x in myCar.accidents) {
    myCar.accidents[x].atFaultForAccident = false;
}
for (y in myCar.accidents) {
    console.log(myCar.accidents[y].date);
}

===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
=== === === === === === === === === === === ==

/// problem 1

var obj = { name: “RajiniKanth”, age: 33, hasPets: false };

function printAllValues(obj) {
    return Object.values(obj);
}

console.log(printAllValues(obj));

===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
=== === === === === === === === === === === ==

/// problem 1 v2

var obj = { name: ‘RajiniKanth’, age: 25, hasPets: true };

function printAllKeys(obj) {
    return Object.keys(obj);
}
console.log(printAllKeys(obj));


===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
=== === === === === === === === === === === ==

/// problem 2

var obj = { name: 'ISRO', age: 35, role: 'Scientist' };

function convertListToObject(obj) {
    var val = [];
    var i = 0;
    for (const [key, value] of Object.entries(obj)) {
        val[i] = [key, value];
        i++;
    }
    return val;
}

console.log(convertListToObject(obj));

===
===
===
===
===
===
===
===
===
===
=== === === === === === === === === === === ==

/// problem 3

var arr = ['GUVI', 'I', 'am', 'a geek'];

function transformFirstAndLast(arr) {
    const obj = {};
    obj[arr[0]] = arr[arr.length - 1];
    return obj;
}
console.log(transformFirstAndLast(arr));

===
===
===
===
===
===
===
===
===
=== === === === === === === === === === === ==

/// problem 4

var arr = [
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
];

function fromListToObject(arr) {
    var newObject = {};

    for (var x of arr) {
        newObject[x[0]] = x[1];
    }

    return newObject;
}

console.log(fromListToObject(arr));

===
===
===
===
===
===
===
===
===
=== === === === === === === === === === === ==

/// problem 5

const entries = new Map([
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
]);

function fromListToObject(entries) {
    const newObject = Object.fromEntries(entries);
    return newObject;
}

console.log(fromListToObject(entries));

===
===
===
===
===
===
===
=== === === === === === === === === === === === === === === === === === === ==










===
===
===
==
===
===
=== === === === === === === === === === === === === === === === === === === === === === ==

/// problem 8

var securityQuestions = [{
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
    },
    {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
    }
]

function chksecurityQuestions(securityQuestions, ques, ans) {
    var c = 0;
    for (var x of securityQuestions) {
        if (x.question == ques && x.expectedAnswer == ans) { c++; }
    }

    if (c) { return true; } else { return false; }
}

console.log(chksecurityQuestions(securityQuestions, 'What was your first pet’s name?', 'FlufferNutter'));

===
===
===
==
===
===
=== === === === === === === === === === === === === === === === === === === === === === ==

/// problem 9

var students = [{
        name: 'Siddharth Abhimanyu',
        age: 21
    }, { name: 'Malar', age: 25 },
    { name: 'Maari', age: 18 }, { name: 'Bhallala Deva', age: 17 },
    { name: 'Baahubali', age: 16 }, { name: 'AAK chandran', age: 23 }, { name: 'Gabbar Singh', age: 33 }, { name: 'Mogambo', age: 53 },
    { name: 'Munnabhai', age: 40 }, { name: 'Sher Khan', age: 20 },
    { name: 'Chulbul Pandey', age: 19 }, { name: 'Anthony', age: 28 },
    { name: 'Devdas', age: 56 }
];

function returnMinors(arr) {
    var minor = {};
    var minorArr = [];
    var i = 0;
    for (var x of arr) {
        if (x.age < 20) {
            minor = x;
            minorArr[i] = minor;
            i++;
        }
    }
    return minorArr;
}
console.log(returnMinors(students));