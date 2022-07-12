import mutation from './mutation';
import query from './query';
import subscription from './subscription';
import user from './user';

export default {
  ...query,
  ...mutation,
  ...user,
  ...subscription
};
