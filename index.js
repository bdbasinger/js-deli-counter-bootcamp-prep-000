
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}


function currentLine(katzDeliLine) {
  var str = "The line is currently: "
  for (var i = 0; i < katzDeliLine; i++) {
    
  }
}

// str.slice(2, -1) extracts the third character through the 
// second to last character in the string.

