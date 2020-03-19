let Utils = function () { }

Utils.scrollTop = () => {
  let root = document.getElementById("root");
  if (!root) return;
  root.scrollIntoView();
}

Utils.greet = () => {
  let hour = (new Date()).getHours();
  if (hour >= 5 && hour < 12) {
    return 'Good morning!';
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon!';
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return 'Good evening!';
  }
}

Utils.rand = () => {
  return Math.floor(Math.random() * 1000000000);
}

Utils.prettyNumber = (num) => {
  if (typeof num !== 'number') throw new TypeError('Expected a number');
  if (num > 1e19) throw new RangeError('Input expected to be < 1e19');
  if (num < -1e19) throw new RangeError('Input expected to be > -1e19');
  if (Math.abs(num) < 1000) return num;

  num = Math.abs(num);
  let size = Math.floor(num).toString().length;
  let exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
  let shortNumber = Math.round(10 * (num / Math.pow(10, exponent))) / 10;

  let suffixes = { K: 6, M: 9, B: 12, T: 16 }
  for (let suffix in suffixes) {
    if (exponent < suffixes[suffix]) {
      shortNumber += suffix;
      break;
    }
  }
  let sign = num < 0 ? '-' : '';
  return sign + shortNumber;
}

Utils.prettyName = (name, length) => {
  if (!length) length = 15;
  if (name.length > length) return name.slice(0, length - 1) + '...';
  return name;
}

export default Utils;