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
      index = index + 1;

      var newNode = {
        value:value,
        next: null
      };

      if(head === null){
        head = newNode;

        tail = newNode;
      }
      else{
        getTail().next = newNode;

        tail = newNode;
      }
      return newNode;
    };

    function remove(number) {
      var upOne = number + 1;
      var downOne = number - 1;
      var thisNode = get(number);
      var prevNode = get(downOne);
      var nextNode = get(upOne);
      index = index - 1;

      if(number <= index){
        if(number > 0 && number < index){
          prevNode.next = nextNode;
        }
        else if(number === index){
          tail = prevNode;

          prevNode.next = null;
        }
        else{
          head = getHead().next;
        }
      }else{
         return false;
       }
     };


     function get(number) {
      var nextNode = getHead();
      if(number < index){
        for (var i = 0; i < number; i++) {
          nextNode = nextNode.next;
        }
       return nextNode;
      }
      else{
        return false;
      }
     };

     function insert(value, number) {
      var upOne = number + 1;
      var downOne = number - 1;
      var thisNode = get(number);
      var prevNode = get(downOne);
      var nextNode = get(upOne);
      index = index + 1;

      var newNode = {
        value:value,
        next: null
      };

      if(number >= 0 && number < index) {
        if(number === 0){
          head = newNode;

          newNode.next = thisNode;
        }
        else if (number > 0 && number < index) {
          prevNode.next = newNode;

          newNode.next = thisNode;
        }
      }
      else{
        return false;
      }

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




