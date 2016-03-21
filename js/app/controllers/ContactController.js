angular.module('app')
  .controller('ContactController', ContactController);

  function ContactController(){
    var vm = this;
    this.name = 'Shmuli';
    this.email = 'shmuel.markel@gmail.com';
    this.phone = '(818) 555-1212';

    this.changeName = function(){
      vm.name = 'Something else!';
    }
  }