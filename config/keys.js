// Keys.js Production 
let keys;

if (process.env.NODE_ENV === 'production') {
  keys = await import('./prod.js');
} else {
  keys = await import('./dev.js');
}

export default keys.default;