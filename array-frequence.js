var arr = [3, 'a', 'a', 'a',2, 3, 'a', 2, 4, 9, 3];   
var countEle = arr.reduce(function (allEle, ele) {
  if (ele in allEle) {
      allEle[ele]++;
  }
  else {
      allEle[ele] = 1;
  }
  return allEle;
}, {});
console.log(countEle);//输出元素以及出现次数，以对象的形式
var scountEle=Object.keys(countEle).sort(function(a,b) {
    return countEle[b]-countEle[a]
});
console.log(scountEle);//对对象的属性按值的大小进行排序
console.log(scountEle[0]);


