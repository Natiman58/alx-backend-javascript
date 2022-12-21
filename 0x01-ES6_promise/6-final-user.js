import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .all([signUpUser, uploadPhoto]).then(['{ status: status_of_the_promise, value: value or error returned by the Promise}']);
}
