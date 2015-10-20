export default (node, {nextSibling, parentNode}) => parentNode.insertBefore(node, nextSibling);
