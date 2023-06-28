import {MongoClient,ServerApi} from 'mongodb';

const uri = "mongodb+srv://PomodoroApp:<PomodoroAppPass>@cluster0.jdhicrt.mongodb.net/Tomatillo?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if(!clientPromise) {
  client = new MongoClient(uri,options);
  clientPromise = client.connect();
}

export default clientPromise;