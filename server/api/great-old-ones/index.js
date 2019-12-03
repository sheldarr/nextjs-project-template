const { getGreatOldOnes } = require('../../db');

module.exports = (req, res) => {
  const mythos = getGreatOldOnes();

  return res.send(mythos);
};
