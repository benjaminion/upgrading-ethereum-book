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

const addIdToTags = (node, tag, exclude, totalDone = 0) => {

  if (isExcluded(node, exclude)) {
    return totalDone
  }

  if (node.tagName === tag && getId(node) == undefined) {
    node.attrs.push({name: 'id', value: tag + '_' + totalDone})
    totalDone++;
  }

  for (let i = 0; i < node.childNodes?.length; i++) {
    totalDone = addIdToTags(node.childNodes[i], tag, exclude, totalDone)
  }

  return totalDone
}

module.exports = { isExcluded, getId, addIdToTags }
