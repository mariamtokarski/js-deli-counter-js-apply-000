function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length<1){
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeliLine.shift()
    return "Currently serving " + serving + "."
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length<1) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var katzDeli = "The line is currently: "
      var position = i + 1
      var person = katzDeliLine[i]
      katzDeli += position + ". " + person + ", "
    }
  }
}
