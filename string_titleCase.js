function titleCase(str) {

    var array = str.toLowerCase().split(" ");
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
    }
    var string = array.join(" ");

    return string;
}
var sentence = 'good afternoon, mr mike.';
console.log(titleCase(sentence));