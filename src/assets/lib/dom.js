function extractTagName(tagName) {
  return tagName.match(/^\w+/)[0];
}

function extractClassesAndId(tagName) {
  const regexp = /[\#\.]{1}([\w\-\_]*)/gi;

  return Array.from(tagName.matchAll(regexp)).reduce(
    (acc, current) => {
      if (current[0].startsWith('.')) {
        acc.classes.push(current[1]);
      } else {
        acc.id.push(current[1]);
      }
      return acc;
    },
    {
      classes: [],
      id: [],
    },
  );
}

const isString = (value) => typeof value === 'string';

const toArray = (value) => (Array.isArray(value) ? value : [value]);

function isChildren(childrens) {
  return Array.isArray(childrens) || typeof childrens === 'string';
}

function normalizeChildrens(childrens) {
  if (isString(childrens)) {
    return [document.createTextNode(childrens)];
  }

  if (Array.isArray(childrens)) {
    return childrens.map(($children) =>
      isString($children) ? document.createTextNode($children) : $children,
    );
  }
  return childrens;
}

const autoSelfTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track ',
  'wbr',
];

export default function el(tag, attrsArr = {}, childrensArr = []) {
  if (typeof tag === 'function') return tag(attrsArr);

  const tagName = extractTagName(tag);

  const autoSelf = autoSelfTags.includes(tag);

  const { id, classes } = extractClassesAndId(tag);

  const attrs = !isChildren(attrsArr) ? attrsArr : {};

  if (id.length) {
    attrs.id = id.pop();
  }

  if (classes.length) {
    attrs.classNames = classes;
  }

  const childrens = toArray(isChildren(attrsArr) ? attrsArr : childrensArr);

  return {
    tagName,
    autoSelf,
    nodeType: 'element',
    attrs,
    childrens,
  };
}

export function renderServer(node) {
  if (isString(node)) return node;

  if (node.nodeType === 'fragment') {
    return node.childrens.map(renderServer).join('');
  }

  const { tagName, autoSelf, attrs, childrens } = node;

  const attrsHTML = Object.entries(attrs)
    .map(([attrKey, attrValue]) => {
      const values = Array.isArray(attrValue) ? attrValue.join(' ') : attrValue;
      return `${attrKey}="${values}"`;
    })
    .join(' ')
    .replaceAll('classNames', 'class');

  const startTag = `<${tagName}${attrsHTML && ' '}${attrsHTML}${
    autoSelf ? '/' : ''
  }>`;
  const endTag = autoSelf ? '' : `</${tagName}>`;

  const childrensHTML = childrens
    .map((children) => renderServer(children))
    .join('');

  const html = `${startTag}${childrensHTML}${endTag}`;

  return html;
}

export function render(node) {
  if (isString(node)) {
    return document.createTextNode(node);
  }

  const { tagName, attrs, childrens } = node;

  const $element =
    node.nodeType === 'fragment'
      ? document.createDocumentFragment()
      : document.createElement(tagName);

  Object.entries(attrs).forEach(function ([attrKey, attrValue]) {
    const values = Array.isArray(attrValue) ? attrValue.join(' ') : attrValue;
    $element.setAttribute(attrKey.replaceAll('classNames', 'class'), values);
  });

  childrens.forEach(function (children) {
    $element.appendChild(render(children));
  });

  return $element;
}

export function Fragment(childrens) {
  return {
    tagName: null,
    nodeType: 'fragment',
    attrs: {},
    childrens: childrens ? childrens : [],
  };
}
