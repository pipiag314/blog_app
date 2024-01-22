import mongoose, { ConnectionStates } from "mongoose";

const connection: {isConnected: ConnectionStates} = {
  isConnected: ConnectionStates.disconnected,
};

export const connectToDB = async () => {
  try {
    if(connection.isConnected === ConnectionStates.connected) {
      console.log("Using existing DB connection")
      return;
    }

    if(!process.env.DB_URI) throw new Error("env variable is undefined");
    const db = await mongoose.connect(process.env.DB_URI);

    connection.isConnected = db.connections[0].readyState;
    
  } catch (error) {
    console.log("Error:", error);
  }
}
