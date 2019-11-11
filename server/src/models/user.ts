import mongoose from 'mongoose';

interface UserSchema extends mongoose.Document {
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    email: {type: mongoose.SchemaTypes.String, required: true, unique: true },
    password: { type: mongoose.SchemaTypes.String, required: true }
  },
  { timestamps: true },
);

export default mongoose.model<UserSchema>('user', userSchema);
