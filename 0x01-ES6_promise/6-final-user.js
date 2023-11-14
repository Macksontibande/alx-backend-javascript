import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  /**
  * A code to export a function named handleProfileSignup.
  * accept arguments the strings: firstName, lastName, and fileName.
  * Takes in an array of Promises.
  * Returns a new Promise.
  */
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => (
      results.map((out) => ({
        status: out.status,
        value: out.status === 'fulfilled' ? out.value : String(out.reason),
      }))
    ));
}
