export default (node, ref) => {
  const parent = ref.parentNode;
  let next = ref.nextSibling;
  while (next && next.nodeType > 1) next = next.nextSibling;
  if (!next) return parent.appendChild(node);
  return parent.insertBefore(node, next);
};
