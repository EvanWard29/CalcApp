let logic = require("./logic");

function coinFlipRoute(request, response) {
  let flip = logic.flipCoin();

  if (flip) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
}

function addNumbersRoute(request, response) {
let number1 = Number(request.params.number1);
let number2 = Number(request.params.number2);
response.send(logic.addNumbers(number1, number2).toString());
}

module.exports.addNumbersRoute = addNumbersRoute;
module.exports.coinFlipRoute = coinFlipRoute;