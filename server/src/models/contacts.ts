import mongoose from 'mongoose';

interface ContactSchema extends mongoose.Document {
  name: string;
  phone: string;
  email: string;
  company: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new mongoose.Schema(
  {
    name: {type: mongoose.SchemaTypes.String, required: true},
    email: {type: mongoose.SchemaTypes.String, required: true},
    phone: { type: mongoose.SchemaTypes.String, required: true,index: true },
    company: {type: mongoose.SchemaTypes.String, required: true}
  },
  { timestamps: true },
);

export default mongoose.model<ContactSchema>('contact', contactSchema);
