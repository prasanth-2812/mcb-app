import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

export interface CandidateAttributes {
  id: number;
  name: string;
  jobTitle?: string | null;
  location?: string | null;
}

export type CandidateCreation = Optional<CandidateAttributes, 'id'>;

export class Candidate extends Model<CandidateAttributes, CandidateCreation> implements CandidateAttributes {
  declare id: number;
  declare name: string;
  declare jobTitle: string | null;
  declare location: string | null;
}

Candidate.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  jobTitle: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
}, {
  sequelize,
  tableName: 'candidates',
});
