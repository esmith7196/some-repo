export default ({ city, state, street, zip, name }) =>
  `https://www.google.com/maps/dir/?api=1&destination=${convertString(name)}+${convertString(
    street
  )}+${convertString(city)}+${convertString(state)}+${convertString(zip)}`;

const convertString = str => str.split(' ').join('+');
