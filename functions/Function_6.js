exports = async function(arg){
  // This default function will get a value and find a document in MongoDB
  // To see plenty more examples of what you can do with functions see: 
  // https://www.mongodb.com/docs/atlas/app-services/functions/

  // Find the name of the MongoDB service you want to use (see "Linked Data Sources" tab)
  var serviceName = "mongodb-atlas";

  // Update these to reflect your db/collection
  var dbName = "mongodbVSCodePlaygroundDB";
  var collName = "sales";

  // Get a collection from the context
  var collection = context.services.get(serviceName).db(dbName).collection(collName);

  var findResult;
  try {
    // Get a value from the context (see "Values" tab)
    // Update this to reflect your value's name.

    console.log("user is ")
    console.log(JSON.stringify(context.user, null, 2))
    

    // Execute a FindOne in MongoDB 
    findResult = await collection.find(
    //  { email: context.user.data.email, "argField": arg},
    );

  } catch(err) {
    console.log("Error occurred while executing findOne:", err.message);

    return { error: err.message };
  }

  // To call other named functions:
  // var result = context.functions.execute("function_name", arg1, arg2);

  return { result: findResult };
};