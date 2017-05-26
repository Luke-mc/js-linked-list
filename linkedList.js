/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

   var head = null;

   var tail = null;

   var index = 0;



    function getHead() {

    return head;

    };

    function getTail() {
      return tail;

      };

    function add(value) {
      index++;

      var newNode = {
        value:value,
        next: null
      };


      if(head === null){

        head = newNode;

        tail = newNode;
      }
      else{


        tail.next = newNode.value;

        tail = newNode;


      }

      return newNode;

    };

    function remove() {

    };

     function get(number) {
      var i = 0;

      while (i < number) {

        head.value = head.next;



        i++;

      }
      return head;

     };

     function insert() {

    };


return {
  getHead,
  getTail,
  add,
  remove,
  get,
  insert

};


}

myLinkList.add('hi');

myLinkList.add('what');

myLinkList.add('hey');

myLinkList.add('luke');

console.log(myLinkList.getHead());

console.log(myLinkList.getTail());

console.log(myLinkList.get(1));





var myLinkList = linkedListGenerator();



