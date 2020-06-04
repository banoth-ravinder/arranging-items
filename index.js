const arrange = {
  /**
   *
   * @param {Array} [int]
   */
  insertionSort(arr) {
    var i, j;
    for (i = 0; i < arr.length; i++) {
      let toCmp = arr[i];
      for (j = i; j > 0 && toCmp < arr[j - 1]; j--) arr[j] = arr[j - 1];
      arr[j] = toCmp;
    }
    return arr;
  },

  /**
   * 
   * @param {Array} [int] 
   */
  bubbleSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        if (arr[j - 1] > arr[j]) {
          var temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  },

  /**
   * 
   * @param {Array} [int] 
   */
  selectionSort(arr) {
    var minIdx,
      temp,
      len = arr.length;
    for (var i = 0; i < len; i++) {
      minIdx = i;
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
  },

  /**
   * 
   * @param {Array} [int] 
   */
  mergeSort(arr) {
    if (arr.length < 2) return arr;

    let middle = parseInt(arr.length / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);

    return subFunctions.merge(arrange.mergeSort(left), arrange.mergeSort(right));
  },

  /**
   * 
   * @param {Array} [int] 
   */
  quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = Math.floor((arr.length - 1) / 2);
    let val = arr[pivot],
      less = [],
      more = [];

    arr.splice(pivot, 1);
    arr.forEach(function(e, i, a) {
      e < val ? less.push(e) : more.push(e);
    });

    return arrange.quickSort(less).concat([val], arrange.quickSort(more));
  },

  /**
   * 
   * @param {Array} [int] 
   */
  heapSort(arr) {
    var len = arr.length,
      end = len - 1;

    subFunctions.heapify(arr, len);

    while (end > 0) {
      subFunctions.swap(arr, end--, 0);
      subFunctions.siftDown(arr, 0, end);
    }
    return arr;
  },
}

/**
 * Sub functions
 */

const subFunctions = {
  // isAllInt(arr){
  //   for(i=0; i< arr.length ; i++){
  //     if(arr[i] )
  //   }
  // },

  merge(left, right) {
    let result = [];

    while (left.length && right.length) {
      left[0] <= right[0]
        ? result.push(left.shift())
        : result.push(right.shift());
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
  },

  heapify(arr, len) {
    // break the array into root + two sides, to create tree (heap)
    var mid = Math.floor((len - 2) / 2);
    while (mid >= 0) {
      subFunctions.siftDown(arr, mid--, len - 1);
    }
  },

  siftDown(arr, start, end) {
    var root = start,
      child = root * 2 + 1,
      toSwap = root;
    while (child <= end) {
      if (arr[toSwap] < arr[child]) {
        subFunctions.swap(arr, toSwap, child);
      }
      if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
        subFunctions.swap(arr, toSwap, child + 1);
      }
      if (toSwap != root) {
        subFunctions.swap(arr, root, toSwap);
        root = toSwap;
      } else {
        return;
      }
      toSwap = root;
      child = root * 2 + 1;
    }
  },

  swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

}

var arr = [1, 4434, 34, "e",-10, -19, -425, 523524, 53, 5234, 4, 3, 4, 9];
// console.log("insertionSort--", arrange.insertionSort(arr));
console.log("insertionSort--", arrange.insertionSort(arr));
console.log("bubbleSort--", arrange.bubbleSort(arr));
console.log("selectionSort--", arrange.selectionSort(arr));
console.log("mergeSort--", arrange.mergeSort(arr));
console.log("quickSort--", arrange.quickSort(arr));
console.log("heapSort--", arrange.heapSort(arr));

module.exports.arrange = arrange;
