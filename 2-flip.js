function flip(arr) {
    var start = 0;
    var end = arr.length - 1
    reverseArray(arr, start, end)
    console.log(arr)
}

function reverseArray(arr, i, j) {
    if (i < j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        reverseArray(arr, ++i, --j)
    }
}

flip(["h", "e", "l", "l", "o"])