export default (node, ref) => {
  const parent = ref.parentNode;
  const next = ref.nextSibling;
  if (!next) return parent.appendChild(node);
  return parent.insertBefore(node, next);
};
