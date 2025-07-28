export const clsx = (...args: (string | number | string[] |{[key: string]: boolean})[]) => {
  if (args.length === 0) return '';
  
  return args.reduce((acc, arg) => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      return acc + ' ' + arg;
    } else if (Array.isArray(arg)) {
      return acc + ' ' + clsx(...arg);
    } else if (typeof arg === 'object') {
      return acc + ' ' + Object.keys(arg).filter(key => arg[key]).reduce((acc, curr) => {acc += `${curr} `; return acc}, '');
    }
    return acc;
  }, '')
}

