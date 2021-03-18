var isPalindrome = function(head) {
    let slow_pointer = head
    let fast_pointer = head
    let front = []
    let behind = []

    if(!head||!slow_pointer.next){
        return true
    }

    while(fast_pointer){
        front.push(slow_pointer.val) 
        behind.push(fast_pointer.val)
        slow_pointer = slow_pointer.next
        fast_pointer = fast_pointer.next
        if(fast_pointer){
            behind.push(fast_pointer.val)
            fast_pointer = fast_pointer.next
        }
    }

    behind = behind.slice(
        behind.length % 2 > 0 ? front.length-1 : front.length
        )
        .reverse()


    return front.toString() === behind.toString()
}