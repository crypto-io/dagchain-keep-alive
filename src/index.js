import IPFS from 'ipfs-api';

export const twelveHours = 43200000;
export default (published, {ipfs, time, once}, cb) => {
  if (!ipfs) {
    ipfs = new IPFS();
  }
	const aliveTimeout = () => {
    setTimeout(async () => {
      published = await ipfs.name.resolve(published['name'] || published);
      published = await ipfs.name.publish(published);
      if (cb) {
        cb(null, published);
      }
      if (!once) {
        return aliveTimeout();
      }
		}, time || twelveHours);
  }
  aliveTimeout();
};
