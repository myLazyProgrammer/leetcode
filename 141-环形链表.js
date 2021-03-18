var hasCycle = function(head) {
    let slow = head
    let fast = head

    while(fast){
        if(fast.next){
            fast = fast.next.next
        }else{
            fast = fast.next
        }
        if(slow === fast){
            return true
        }
        slow = slow.next
    }

    return false
};