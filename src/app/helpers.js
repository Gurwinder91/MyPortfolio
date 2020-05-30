import selector from './selectors';
import moment from 'moment';

export const calculateExperience = () => {
  const startedCareer = moment('01/01/2016');
  const months = moment().diff(startedCareer, 'months') + 1;
  selector.overAllExperience.textContent= `${(months / 12).toFixed(1)} years`;
};