//获取当前年份
let year = new Date().getFullYear()
//调用。。函数，设置cal内容显示年里
document.getElementById("cal").innerHTML = calendar(year)

function setCalendar(year){
    eachFor(1900,2051,function(val){
        var option = document.createElement("option");
        option.innerHTML = val;
        option.value = val;
        if(curDate.getFullYear() == val){
            option.selected = true;
        }
        oYear.appendChild(option);
    });
    eachFor(0,11,function(val){
        var option = document.createElement("option");
        option.innerHTML = parseInt(val) +1;
        option.value = val;
        if(curDate.getMonth() == val){
            option.selected = true;
        }
        oMonth.appendChild(option);
    });
 
    // 对函数的封装应该考虑掺入的参数，大小类型等
    function eachFor(start, end, callback){
        for(var i = start; i <= end ; i++){
            callback(i);
        }
    }
    function query(){
        var year = oYear.value ;
        var month = oMonth.value ; 
        // console.log(year +"--"+month);
        // oday.innerHTML = '';
        if(year && month){
            console.log(year +"--"+month);
            // 获取月份的第一天
            var firstDate = new Date(year,month,1);
            // 第一天对应是周几
            var dayOfWeek = firstDate.getDay();
            // 该月份有多少天
            var conutDay =  getMonthDays(year,month);
            console.log("countDay="+conutDay);
            oLi.forEach(function(el,index){
                el.innerHTML = '';
            })
            eachFor(1,conutDay,function(val){
                oLi[dayOfWeek + val - 1].innerHTML = val;
            });
        }else{
            alert('请先选择年份和月份');
        }
    }
    // 是否为闰年 整百年份必须被400整除 非整百年份被4整除就都是闰年
    function getMonthDays(year,month){
        var datas = [];
        if(year%400 ==0 || (year%4==0 && year%100!=0)){
            // console.log(year + '是闰年');
            datas = [31,29,31,30,31,30,31,31,30,31,30.31];
        
        }else{
            // console.log(year + '不是闰年');
            datas = [31,28,31,30,31,30,31,31,30,31,30.31];
        }
        console.log(year +"--"+ month +"--"+ datas[month]);
        return datas[month];
    }
    // 初始默认当前时间的年和月进行搜索
    query();

}