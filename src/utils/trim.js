// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().

function trim(s) {
  return s.toString().replace(/^\s+|\s+$/g, '');
}

module.exports = trim;
