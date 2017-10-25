import mongoose, { Schema } from 'mongoose';

// Define movie schema
var tripSchema = new Schema({
  title: { type: String, required: true },
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export const TripModel = mongoose.model('Trip', tripSchema);

export const findTripById = (id) => {
  return TripModel.findOneAsync({_id: id});
};

export const findTripsByUser = (userId) => {
  return TripModel.findAsync({user: userId});
};

export const findTrips = (max) => {
  return TripModel.findAsync();
}

export const saveTrip = (title) => {
  var entry = new TripModel({id: new mongoose.Types.ObjectId(), title: title});
  return entry.saveAsync(entry);
}
