import mongoose,{Schema,Document} from "mongoose";

interface EventDocument extends Document{
    title:string,
    description:string,
    date:Date,
    location:string,
    createdBy:mongoose.Types.ObjectId;
}

const EventSchema = new Schema<EventDocument>({
    title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'UserData', required: true }, 
})

const EventData = mongoose.model<EventDocument>('eventData',EventSchema)
export default EventData;