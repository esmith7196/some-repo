export default ({ city, state, street, zip }) => {
  return `${street}, ${city} ${state}, ${zip}`;
};
