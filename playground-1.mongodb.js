/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
const collection = 'customers';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

db.customers.insertMany([
        {
            "CustomerName": "Rahul Sharma",
            "CustomerEmail": "rahul.sharma@gmail.com",
            "CustomerPhone": "9876543210",
            "CustomerPassword": "Pa$$w0rd",
            "CustomerImage": 'https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg'
        },
        {
            "CustomerName": "Priya Patel",
            "CustomerEmail": "priya.patel@example.com",
            "CustomerPhone": "8765432109",
            "CustomerPassword": "Secure123!",
            "CustomerImage": 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?w=740'
        },
        {
            "CustomerName": "Aarav Kapoor",
            "CustomerEmail": "aarav.kapoor@example.com",
            "CustomerPhone": "7654321098",
            "CustomerPassword": "StrongPass",
            "CustomerImage": 'https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg'
        },
        {
            "CustomerName": "Nandini Reddy",
            "CustomerEmail": "nandini.reddy@example.com",
            "CustomerPhone": "7543210987",
            "CustomerPassword": "Reddy@123",
            "CustomerImage": 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?w=740'
        },
        {
            "CustomerName": "Karan Singh",
            "CustomerEmail": "karan.singh@example.com",
            "CustomerPhone": "9432109876",
            "CustomerPassword": "Singing#123",
            "CustomerImage": 'https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg'
        },
        {
            "CustomerName": "Meera Gupta",
            "CustomerEmail": "meera.gupta@example.com",
            "CustomerPhone": "8321098765",
            "CustomerPassword": "Gupta",
            "CustomerImage": 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?w=740'
        },
        {
            "CustomerName": "Ankit Verma",
            "CustomerEmail": "ankit.verma@example.com",
            "CustomerPhone": "9210987654",
            "CustomerPassword": "Verma@123",
            "CustomerImage": 'https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg'
        },
        {
            "CustomerName": "Neha Desai",
            "CustomerEmail": "neha.desai@example.com",
            "CustomerPhone": "9109876543",
            "CustomerPassword": "Desai@2023",
            "CustomerImage": 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?w=740'
        },
        {
            "CustomerName": "Rajat Khanna",
            "CustomerEmail": "rajat.khanna@example.com",
            "CustomerPhone": "7098765432",
            "CustomerPassword": "Khanna",
            "CustomerImage": 'https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg'
        },
        {
            "CustomerName": "Pooja Malhotra",
            "CustomerEmail": "pooja.malhotra@example.com",
            "CustomerPhone": "8876543210",
            "CustomerPassword": "Malhotra@789",
            "CustomerImage": 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?w=740'
        }
]    
);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
