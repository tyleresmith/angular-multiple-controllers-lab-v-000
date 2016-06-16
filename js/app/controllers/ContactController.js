function ContactController() {
  var vm = this;
  vm.name = "Default Name";
  vm.phone = "555-555-5555";
  vm.email = "faker@fake.usa";

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
	.module('app')
	.controller('ContactController', ContactController);
