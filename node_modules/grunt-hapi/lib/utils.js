var cleanPath = function(string) {
  var separator = '/';

  if (string.charAt(string.length - 1) !== separator) {
    return string + separator;
  }
   
  return string;
};

module.exports = {
  cleanPath: cleanPath
}
