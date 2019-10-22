function sort(method){
    
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)

    if(method=='bubble'){

        logs = bubbleSort(origin)
    }else if(method=='insert'){

        logs = insertSort(origin)
    }

    showDiv = document.getElementById('Anim')
    //生成排序日志数组的遍历对象
    logValues = logs.values()
    //尝试看一下log values。next（） 遍历器对象返回的数据数据结构
    console.log(logValues.next())
    //延时方式调用showlog（）函数显示排序步骤，50毫秒后调用
    setTimeout("showLog(logValues,showDiv)", 50)
}