import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => result.map((key) => ({
      status: key.status,
      value: key.status === 'fulfilled' ? key.value : String(key.reason),
    })));
}
