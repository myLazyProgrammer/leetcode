var groupAnagrams = function(strs) {
    let map = new Map();
    strs.forEach(item => {
        const sort = item.split('').sort().join('')
        if (map.has(sort)) {
            map.get(sort).push(item)
        } else {
            map.set(sort, [item])
        }
    });
    return [...map.values()];
}