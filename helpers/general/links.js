const getTarget = url => {
  const isExternalURL = url.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';

  return target;
};

module.exports = {
  getTarget,
};
