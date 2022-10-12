export default (imgID, data) => data.find(img => img.poweredId.toLowerCase() === imgID);
