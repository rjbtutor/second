export default function Button() {
  // const isNode = () =>
  // typeof process !== 'undefined' &&
  // !!process.versions &&
  // !!process.versions.node;
  const dom = `${import.meta.env.PRODUCTION_DOMAIN}`;

  return <div style={{ background: 'red' }}>Domain=[{dom}]</div>;
}
