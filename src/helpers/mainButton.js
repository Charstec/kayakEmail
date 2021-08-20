module.exports = function(options) {
  var button = `<a href="http://www.google.com/">${options.fn(this)}</a>`;
  return button;
};
