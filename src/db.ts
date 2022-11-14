import mongoose, { CallbackWithoutResult, ConnectOptions } from "mongoose";
import {MONGO_KEY} from './utils/constant'

mongoose.connect(
	MONGO_KEY as string,
	{ useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
	(err) => {
		if (err) {
			return console.log(err);
		}
		console.log("Connection to MongoDB is FIRM ");
	}
);

export default mongoose.connection;
