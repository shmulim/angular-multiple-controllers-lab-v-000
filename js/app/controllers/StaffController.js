angular.module('app')
  .controller('StaffController', StaffController);

  function StaffController(){
    this.name = 'shmuli';
    this.email = 'shmuel.markel@gmail.com';
    this.phone = '(818) 555-1212';
  }