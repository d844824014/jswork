//
function bubbleSort(str) {
    //
    let arr = str.split(',')
    //声明排序步骤记录数组sortlog数组的数据用于动画展示
    let sortLog = []
    //
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            //把比较前的数组状态和定位指针保存到sortlog中，为保持演示效果，多加两行
            sortLog.push([arr.concat(), [j, j + 1]])
            sortLog.push([arr.concat(), [j, j + 1]])
            sortLog.push([arr.concat(), [j, j + 1]])
            //
            if (arr[j] > arr[j + 1]) {
                //
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                //把比较之后的数组状态和定位指针保存到sortlog中
                sortLog.push([arr.concat(), [j, j + 1]])
            }
        }
    }
    //
    return arr
}

function insertSort(str) {
    let arr = str.split(',')
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }
    return arr
}