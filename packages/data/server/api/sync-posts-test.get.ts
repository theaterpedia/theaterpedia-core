import { defineEventHandler } from 'h3'
import { SyncableOdooCollection } from '../../utils/SyncableCollection';

export default defineEventHandler(() => new SyncableOdooCollection('posts').syncFromOdoo())
