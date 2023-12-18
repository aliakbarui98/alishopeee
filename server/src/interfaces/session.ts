import db from 'models/_instance';
import { Model, Optional } from 'sequelize'
import SequelizeAttributes from 'util/SequelizeAttributes';

export interface ISessionAttributes {
  id?: string;
  UserId: string;
  token: string;
  ipAddress?: string | null;
  device?: string | null;
  platform?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
interface SessionCreationAttributes extends Optional<ISessionAttributes, 'id'> {}

export interface ISessionInstance
  extends Model<ISessionAttributes, SessionCreationAttributes>,
  ISessionAttributes {}


const Session = db.sequelize.define<ISessionInstance>('Sessions', {
    ...SequelizeAttributes.Sessions,
  })
export default Session
