var levelOrder = function(root) {
    if(root === null) return []

    let result = []
    let queue = []
    result.push(root.val)
    queue.push(root)
    while(queue.length){
        let _root = queue[0]
        if(_root.left){
            result.push(_root.left.val)
            queue.push(_root.left)
        }
        if(_root.right){
            result.push(_root.right.val)
            queue.push(_root.right)
        }
        queue.shift()
    }

    return result

}