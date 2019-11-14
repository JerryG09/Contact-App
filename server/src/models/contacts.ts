import mongoose from 'mongoose';

interface ContactSchema extends mongoose.Document {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const contactSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: { type: String, index: true },
    company: { type: mongoose.SchemaTypes.String, required: true },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

export default mongoose.model<ContactSchema>('contact', contactSchema);
