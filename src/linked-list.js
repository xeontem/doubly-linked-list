const Node = require('./node');

class LinkedList {
    constructor() {
    	this._head = null;
    	this._tail = null;
    	this.length = 0;
    }

    append(data) {

    	if(!this.length){
    		this._head = new Node(data);
            this._tail = this._head; //new Node(data);
            this.length++;
        } else {
        	var tail = this._tail;//backup
        	this._tail = new Node(data,tail);
        	tail.next = this._tail;
        	this.length++;
        }
        return this;
        
    }

    head() {
    	if(this._head) return this._head.data;
    	else return null;
    }

    tail() {
    	if(this._tail) return this._tail.data;
    	else return null;
    }
    //--------------------------NodeAt----------------------
    nodeAt(index){
    	var curNode = this._head;
    	for(var i = 0; i <= index; i++){
    		if(i>0)curNode = curNode.next;
    	}
    	return curNode;
	}
	//------------------------------------------------------
    at(index) {
    	if(!this.length){//if list is empty
    		return -1;
    	}
    	else{
    		var curNode = this._head;
    		for(var i = 0; i <= index; i++){
    			if(i>0)curNode = curNode.next;
    		}
    		return curNode.data;
    	}
    	return -1;	
    }

    insertAt(index, data) {
    	if(!this.length){//if list is empty
    		return -1;
    	}
    	else{
    		this.nodeAt(index).data = data;
    		return this;
    	}
    }

    isEmpty() {
    	if(!this.length) return true;
    	else return false;
    }

    clear() {
    	this._head = null;
    	this._tail = null;
    	this.length = 0;
    	return this;
    }

    deleteAt(index) {
    	if(!this.length){//if list is empty
    		return this;
    	}
    	else{	
    		var curNode = this.nodeAt(index);
    		var prevNode = curNode.prev;
    		var nextNode = curNode.next;
    		if(nextNode)nextNode.prev = prevNode;
    		if(prevNode)prevNode.next = nextNode;
    		curNode = null;
    		this.length--;
    		return this;
    	}	
    }

    reverse() {
    	if(!this.length){//if list is empty
    		return this;
    	}
    	else{	
    		var arr = [];
    		var curNode = this._head;
    		for(var i = 0; i < this.length; i++){
    			if(i>0)curNode = curNode.next;
    			arr.push(curNode.data);
    		}
    		this.clear();
    		for(var i = 0; i < arr.length; i++){
    			this.append(arr[arr.length-1-i]);
    		}
    		return this;
    	}	
    }

    indexOf(data) {
    	if(!this.length){//if list is empty
    		return -1;
    	}
    	else{
    		for(var i = 0; i < this.length; i++){
    			if(this.nodeAt(i).data == data) return i;
    		}
    		return -1;
    	}	
    }
}

module.exports = LinkedList;
