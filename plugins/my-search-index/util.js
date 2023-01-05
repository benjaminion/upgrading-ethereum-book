const attributesAreEqual = (att1, att2) => {
  return (att1.name === att2.name && att1.value === att2.value)
}

const isExcluded = (node, exclude) => {

  if (exclude.tags.indexOf(node.tagName) != -1) {
    return true
  }

  if (node.attrs) {
    for (let i = 0; i < node.attrs.length; i++) {
      for (let j = 0; j < exclude.attributes.length; j++) {
        if (attributesAreEqual(node.attrs[i], exclude.attributes[j])) {
          return true
        }
      }
    }
  }

  return false
}

const getId = (node) => {
  if (node.attrs !== undefined) {
    const x = node.attrs.filter(attr => (attr.name === 'id'))
    if (x.length > 0) {
      return x[0].value
    }
  }
}

const addIdToTags = (node, tagMatch, exclude, totalDone = 0) => {

  if (isExcluded(node, exclude)) {
    return totalDone
  }

  if (node.tagName !== undefined
      && node.tagName.search(tagMatch) !== -1
      && getId(node) === undefined) {
    node.attrs.push({name: 'id', value: node.tagName + '_' + totalDone})
    totalDone++;
  }

  for (let i = 0; i < node.childNodes?.length; i++) {
    totalDone = addIdToTags(node.childNodes[i], tagMatch, exclude, totalDone)
  }

  return totalDone
}

const findBody = (node) => {

  if (node.tagName === 'body') {
    return node
  }

  for (let i = 0; i < node.childNodes?.length; i++) {
    const body = findBody(node.childNodes[i])
    if(body !== undefined) {
      return body
    }
  }
}

module.exports = { isExcluded, getId, addIdToTags, findBody }
