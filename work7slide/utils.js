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
    //把排序最终状态的数组和取消定位指针保存到sortlog中 因为动画的最后状态是不显示比较数据的。
    sortLog.push([arr.concat(), [-1, -1]])
    //调试时请认真分析sortlog数据结构
    //
    return sortLog
}
//显示排序的每一个步骤
function showLog(logValues, showElement) {
    let str = ''
    //解构赋值的方式，从排序日志遍历器去去除一条结果
    let {
        done,
        value: [row, pos]
    } = logValues.next()
    //对比一下ruow和pos的值是否与排序时保存一致


    for (const key in row) {
        //根据定位。。。
        let color = pos.indexOf(Number(key)) > -1 ? 'color:red;' : ''
        //设置字体
        str += '<span style="font-size:' + row[key] * 20 + 'px;' +
                color + '">' + row[key] + '</span>'
    }
//把html代码显示到
showElement.innerHTML = str
//
//
if (pos[0] != -1)
    setTimeout("showLog(logValues,showDiv)", 500)

}
function insertSort(str) {
 //
 let arr = str.split(',')
 //声明排序步骤记录数组sortlog数组的数据用于动画展示
 let sortLog = []
 //
 for (let i = 1; i < arr.length ; ++i) {

     for (let j = i; j > 0; j--) {
         //把比较前的数组状态和定位指针保存到sortlog中，为保持演示效果，多加两行
         sortLog.push([arr.concat(), [ j - 1, j]])
         sortLog.push([arr.concat(), [ j - 1, j]])
         sortLog.push([arr.concat(), [ j - 1, j]])
         //比较相邻的两个元素，如果左面的大，那就把大的交换到右边
         if (arr[j - 1] > arr[j]) {
             //使用。。方法，把两个元素交换位置
             [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
             //把比较之后的数组状态和定位指针保存到sortlog中
             sortLog.push([arr.concat(), [j - 1,j]])
         }
     }
 }
 //把排序最终状态的数组和取消定位指针保存到sortlog中 因为动画的最后状态是不显示比较数据的。
 sortLog.push([arr.concat(), [-1, -1]])
 //调试时请认真分析sortlog数据结构
 //
 return sortLog
}
//显示排序的每一个步骤
function showLog(logValues, showElement) {
 let str = ''
 //解构赋值的方式，从排序日志遍历器去去除一条结果
 let {
     done,
     value: [row, pos]
 } = logValues.next()
 //对比一下ruow和pos的值是否与排序时保存一致


 for (const key in row) {
     //根据定位。。。
     let color = pos.indexOf(Number(key)) > -1 ? 'color:red;' : ''
     //设置字体
     str += '<span style="font-size:' + row[key] * 20 + 'px;' +
             color + '">' + row[key] + '</span>'
 }
//把html代码显示到
showElement.innerHTML = str
//
//
if (pos[0] != -1)
 setTimeout("showLog(logValues,showDiv)", 500)



}