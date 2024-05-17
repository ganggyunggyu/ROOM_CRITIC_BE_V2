import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, minlength: 6 })
  password: string;

  @Prop({ required: true })
  displayName: string;

  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop({ required: true })
  role: string;

  @Prop({ type: String, default: null })
  refreshToken: string | null;

  @Prop({ type: Number, default: 0 })
  reviewCount: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
