// Your code here
function sturdayFun (activity='roller-skate'){
  return `This saturday,I want to ${activity}!`
}

const mondayWork = function(activity= 'go to the office'){
  return `This Monday I will ${activity}.`
}

function wrapAdjective (wrap='*'){
  return function (adjective = 'special'){
    return `You are ${wrap}${adjective}${wrap}!`
  }
}
