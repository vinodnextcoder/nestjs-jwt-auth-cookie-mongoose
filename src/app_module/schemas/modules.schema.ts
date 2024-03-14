import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,now } from 'mongoose';

export type ModuleDocument = HydratedDocument<Modules>;

@Schema({ timestamps: true })
export class Modules {
  @Prop({ required: true, unique: true })
  moduleName: string;
  @Prop({ default: null })
  description: string;
  @Prop({ default: false })
  read: boolean;
  @Prop({ default: false })
  write: boolean;
  @Prop({ default: false })
  edit: boolean;
  createdAt: Date;
  @Prop({ default: now() })
  updatedAt: Date;
}

export const ModulesSchema = SchemaFactory.createForClass(Modules);