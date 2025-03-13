export default function Button() {
  const isNode = () =>
    typeof process !== 'undefined' &&
    !!process.versions &&
    !!process.versions.node;
  let dom = 'unknown domain';
  if (isNode()) {
    dom = `${process.env.NODE_ENV}`;
  }

  return <div style={{ background: 'red' }}>Domain=[{dom}]</div>;
}
