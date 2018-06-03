function takeANumber(lineList, name) {
  lineList.push(name)
  return `Welcome, ${name}. You are number ${lineList.length} in line.`
}

function nowServing(lineList) {
  if (lineList.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${lineList.shift()}.`
  }
}

function currentLine(lineList) {
  if (lineList.length === 0) {
    return "The line is currently empty."
  }
  else {
    list = []
    for (var i = 0; i<lineList.length; i++) {
      list.push(`${i+1}. ${lineList[i]}`)
    }
  }
}