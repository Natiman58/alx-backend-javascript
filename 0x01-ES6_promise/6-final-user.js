import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return result.map((key) => ({
    status: key.status,
    value: key.status === 'fulfilled' ? key.value : String(key.reason),
  }));
}
