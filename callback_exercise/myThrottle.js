
Function.prototype.myThrottle = function (interval) {
  let tooSoon = false;
  return () => {
    if (tooSoon === false) {
      tooSoon = true;
      setTimeout(function () {
        tooSoon = false;
      }, interval);
      this();
    }
  }
}

class Neuron {
  fire() {
    console.log("Firing!");
  }
};

const neuron = new Neuron;
// When we create a new Neuron, 
// we can call #fire as frequently as we want
neuron.fire = neuron.fire.myThrottle(500);
neuron.fire();
const interval = setInterval(() => {
  neuron.fire();
}, 10);