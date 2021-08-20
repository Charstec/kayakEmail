module.exports = function(options) {
  var bolder = `<strong>${options.fn(this)}</strong>`;
  return bolder;
};
