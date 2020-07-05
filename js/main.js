//form
function display() {
    document.getElementById("block").style.display = "block";
}
window.addEventListener("load", display, "false");

function fexit() {

    document.getElementById("block").style.display = "none";

}
// false bubbling 
document.getElementById("exit-form").addEventListener("click", fexit, "false");
function submit_exit() {

    document.getElementById("text").innerHTML= "Thanks for submit";
    document.getElementById("text").style.fontSize="30px";
    document.getElementById("text").style.padding="15%";
    document.getElementById("text").style.textAlign="center";
    document.getElementById("text").style.color="#00c6d7";
}

//slide show
var img = [];
var i = 0;
var time = 3000;
img[0] = "url('header.jpg')";
img[1] = "url('header1.jpg')";
img[2] = "url('header2.jpg')";

function change() {

    document.getElementById("image").style.backgroundImage = img[i];

    if (i < img.length - 1 ) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("change()", time);
}

window.onload = change();
//end slide
//model
//selection
function display_selection() {
    document.getElementById("selection").style.display = "block";

}
document.getElementById("selection_click").addEventListener("click", display_selection, "false");

function exit_selection() {

    document.getElementById("selection").style.display = "none";

}
document.getElementById("exit_selection").addEventListener("click", exit_selection, "false");

function selection() {
    var n = document.getElementById("size_selection").value;
    var string = document.getElementById("array_selection").value;
    var arr = string.split(',');
    for (var i = 0; i < n - 1; i++) {
        var min = i;
        //searching for smallest element in ever iteration in list
        for (var j = i + 1; j < n; j++) {

            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        //swap the arr[i] with smallest element
        var temp;
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    document.getElementById("selection_output").innerHTML = "your array after sort:" + arr;
}
document.getElementById("selection_result").addEventListener("click", selection, "false");
//javascript
function javascriptSelection() {
    document.getElementById("javascript_selection_model").style.display = "block";

}
document.getElementById("selection_javascript").addEventListener("click", javascriptSelection, "false");

function exitJs() {

    document.getElementById("javascript_selection_model").style.display = "none";

}
document.getElementById("javascript_selection_exit").addEventListener("click", exitJs, "false");
//java
function javaSelection() {
    document.getElementById("java_selection_model").style.display = "block";

}
document.getElementById("selection_java").addEventListener("click", javaSelection, "false");

function exitJ() {

    document.getElementById("java_selection_model").style.display = "none";

}
document.getElementById("java_selection_exit").addEventListener("click", exitJ, "false");
//c++
function c_selection() {
    document.getElementById("c_selection_model").style.display = "block";

}
document.getElementById("selection_c++").addEventListener("click", c_selection, "false");

function c_selection_exit() {

    document.getElementById("c_selection_model").style.display = "none";

}
document.getElementById("c_selection_exit").addEventListener("click", c_selection_exit, "false");
//description
function selection_description() {

    document.getElementById("selection_description").style.display = "block";
}
document.getElementById("selection_des").addEventListener("click", selection_description, "false");

function selection_description_exit() {

    document.getElementById("selection_description").style.display = "none";

}
document.getElementById("selection_description_exit").addEventListener("click", selection_description_exit, "false");

//bubble
function display_bubble() {
    document.getElementById("bubble").style.display = "block";

}
document.getElementById("bubble_click").addEventListener("click", display_bubble, "false");

function exit_bubble() {

    document.getElementById("bubble").style.display = "none";

}
document.getElementById("exit_bubble").addEventListener("click", exit_bubble, "false");

function bubbleSort() {
    var n = document.getElementById("size_bubble").value;
    var string = document.getElementById("array_bubble").value;
    var arr = string.split(',');
    for (var i = 0; i < n - 1; i++) {
        //Compare adjacent elements
        //exchange them if out of order
        for (var j = 0; j < n - 1 - i; j++) {

            if (arr[j + 1] < arr[j]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    document.getElementById("bubble_output").innerHTML = "your array after sort:" + arr;
}
document.getElementById("bubble_result").addEventListener("click", bubbleSort, "false");
//javascript
function javascriptSBubble() {
    document.getElementById("js_bubble_model").style.display = "block";

}
document.getElementById("bubble_javascript").addEventListener("click", javascriptSBubble, "false");

function js_bubble_exit() {

    document.getElementById("js_bubble_model").style.display = "none";

}
document.getElementById("js_bubble_exit").addEventListener("click", js_bubble_exit, "false");
//java
function javaBubble() {
    document.getElementById("java_bubble_model").style.display = "block";

}
document.getElementById("bubble_java").addEventListener("click", javaBubble, "false");

function java_bubble_exit() {

    document.getElementById("java_bubble_model").style.display = "none";

}
document.getElementById("java_bubble_exit").addEventListener("click", java_bubble_exit, "false");
//c++
function cBubble() {
    document.getElementById("c_bubble_model").style.display = "block";

}
document.getElementById("bubble_c++").addEventListener("click", cBubble, "false");

function c_bubble_exit() {

    document.getElementById("c_bubble_model").style.display = "none";

}
document.getElementById("c_bubble_exit").addEventListener("click", c_bubble_exit, "false");
c_bubble_model
//description
function bubble_description() {

    document.getElementById("bubble_description").style.display = "block";
}
document.getElementById("bubble_des").addEventListener("click", bubble_description, "false");

function bubble_description_exit() {

    document.getElementById("bubble_description").style.display = "none";

}
document.getElementById("bubble_description_exit").addEventListener("click", bubble_description_exit, "false");

//insertion
function display_insertion() {
    document.getElementById("insertion").style.display = "block";

}
document.getElementById("insertion_click").addEventListener("click", display_insertion, "false");

function exit_insertion() {

    document.getElementById("insertion").style.display = "none";

}

document.getElementById("exit_insertion").addEventListener("click", exit_insertion, "false");

function insertionSort() {
    var n = document.getElementById("size_insertion").value;
    var string = document.getElementById("array_insertion").value;
    var arr = string.split(',')
    for (var i = 0; i < n; i++) {
        var value = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr[j + 1] = value;
    }
    document.getElementById("insertion_output").innerHTML = "your array after sort:" + arr;
}
document.getElementById("insertion_result").addEventListener("click", insertionSort, "false");
//javascript
function javascriptInserction() {
    document.getElementById("js_insertion_model").style.display = "block";

}
document.getElementById("insertion_javascript").addEventListener("click", javascriptInserction, "false");

function js_insertion_exit() {

    document.getElementById("js_insertion_model").style.display = "none";

}
document.getElementById("js_insertion_exit").addEventListener("click", js_insertion_exit, "false");
//java
function javaInsertion() {
    document.getElementById("java_insertion_model").style.display = "block";

}
document.getElementById("insertion_java").addEventListener("click", javaInsertion, "false");

function java_insertion_exit() {

    document.getElementById("java_insertion_model").style.display = "none";

}
document.getElementById("java_insertion_exit").addEventListener("click", java_insertion_exit, "false");
//c++
function cInsertion() {
    document.getElementById("c_insertion_model").style.display = "block";

}
document.getElementById("insertion_c++").addEventListener("click", cInsertion, "false");

function c_insertion_exit() {

    document.getElementById("c_insertion_model").style.display = "none";

}
document.getElementById("c_insertion_exit").addEventListener("click", c_insertion_exit, "false");
//description
function insertion_description() {

    document.getElementById("insertion_description").style.display = "block";
}
document.getElementById("insertion_des").addEventListener("click", insertion_description, "false");

function insertion_description_exit() {

    document.getElementById("insertion_description").style.display = "none";

}
document.getElementById("insertion_description_exit").addEventListener("click", insertion_description_exit, "false");
 //merge
 function display_merge() {
    document.getElementById("merge").style.display = "block";

}
document.getElementById("merge_click").addEventListener("click", display_merge, "false");

function exit_merge() {

    document.getElementById("merge").style.display = "none";

}
document.getElementById("exit_merge").addEventListener("click", exit_merge, "false");
function merge(left, right) {
    const arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift()); 
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}
function mergeSort(array, half = array.length / 2) {
    if (array.length < 2) {
        return array 
    }
    const left = array.splice(0, half); 
    return merge(mergeSort(left), mergeSort(array))
}
function print(){
    var n = document.getElementById("size_merge").value;
    var string = document.getElementById("array_merge").value;
    var arr = string.split(',');
    var result= mergeSort(arr);
   
    document.getElementById("merge_output").innerHTML = "your array after sort:" + result ;

}
document.getElementById("merge_result").addEventListener("click", print, "false");
//javascript
function javascriptMerge() {
    document.getElementById("javascript_merge_model").style.display = "block";

}
document.getElementById("merge_javascript").addEventListener("click", javascriptMerge, "false");

function exitJsMerge() {

    document.getElementById("javascript_merge_model").style.display = "none";

}
document.getElementById("javascript_merge_exit").addEventListener("click", exitJsMerge, "false");
//java
function javaMerge() {
    document.getElementById("java_merge_model").style.display = "block";

}
document.getElementById("merge_java").addEventListener("click", javaMerge, "false");

function exitJMerge() {

    document.getElementById("java_merge_model").style.display = "none";

}
document.getElementById("java_merge_exit").addEventListener("click", exitJMerge, "false");
//c++
function c_merge() {
    document.getElementById("c_merge_model").style.display = "block";

}
document.getElementById("merge_c++").addEventListener("click", c_merge, "false");

function c_merge_exit() {

    document.getElementById("c_merge_model").style.display = "none";

}
document.getElementById("c_merge_exit").addEventListener("click", c_merge_exit, "false");
//description
function merge_description() {

    document.getElementById("merge_description").style.display = "block";
}
document.getElementById("merge_des").addEventListener("click", merge_description, "false");

function merge_description_exit() {

    document.getElementById("merge_description").style.display = "none";

}
document.getElementById("merge_description_exit").addEventListener("click", merge_description_exit, "false");
//quick
function display_quick() {
    document.getElementById("quick").style.display = "block";

}
document.getElementById("quick_click").addEventListener("click", display_quick, "false");

function exit_quick() {

    document.getElementById("quick").style.display = "none";

}
document.getElementById("exit_quick").addEventListener("click", exit_quick, "false");
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
function printQuick(){
    var n = document.getElementById("size_quick").value;
    var string = document.getElementById("array_quick").value;
    var arr = string.split(',');
    var result= quickSort(arr,0,n-1);
   
    document.getElementById("quick_output").innerHTML = "your array after sort:" + result ;

}
document.getElementById("quick_result").addEventListener("click", printQuick, "false");

//javascript
function javascriptQuick() {
    document.getElementById("javascript_quick_model").style.display = "block";

}
document.getElementById("quick_javascript").addEventListener("click", javascriptQuick, "false");

function exitJsQuick() {

    document.getElementById("javascript_quick_model").style.display = "none";

}
document.getElementById("javascript_quick_exit").addEventListener("click", exitJsQuick, "false");
//java
function javaQuick() {
    document.getElementById("java_quick_model").style.display = "block";

}
document.getElementById("quick_java").addEventListener("click", javaQuick, "false");

function exitJQuick() {

    document.getElementById("java_quick_model").style.display = "none";

}
document.getElementById("java_quick_exit").addEventListener("click", exitJQuick, "false");
//c++
function c_quick() {
    document.getElementById("c_quick_model").style.display = "block";

}
document.getElementById("quick_c++").addEventListener("click", c_quick, "false");

function c_quick_exit() {

    document.getElementById("c_quick_model").style.display = "none";

}
document.getElementById("c_quick_exit").addEventListener("click", c_quick_exit, "false");
//description
function quick_description() {

    document.getElementById("quick_description").style.display = "block";
}
document.getElementById("quick_des").addEventListener("click", quick_description, "false");

function quick_description_exit() {

    document.getElementById("quick_description").style.display = "none";

}
document.getElementById("quick_description_exit").addEventListener("click", quick_description_exit, "false");
//search
function display_search() {
    document.getElementById("search").style.display = "block";

}
document.getElementById("search_click").addEventListener("click", display_search, "false");

function exit_search() {

    document.getElementById("search").style.display = "none";

}
document.getElementById("exit_search").addEventListener("click", exit_search, "false");
//java
function javaSearch() {
    document.getElementById("java_search_model").style.display = "block";

}
document.getElementById("search_java").addEventListener("click", javaSearch, "false");

function exitJSearch() {

    document.getElementById("java_search_model").style.display = "none";

}
document.getElementById("java_search_exit").addEventListener("click", exitJSearch, "false");
//c++
function c_search() {
    document.getElementById("c_search_model").style.display = "block";

}
document.getElementById("search_c++").addEventListener("click", c_search, "false");

function c_search_exit() {

    document.getElementById("c_search_model").style.display = "none";

}
document.getElementById("c_search_exit").addEventListener("click", c_search_exit, "false");
function search(items, element, size) {
    for (var i = 0; i < size; i++) {
        if (items[i] == element) {
            return (i + 1);
        }
    }
    return -1;
}
function printSearch(){
    var n = document.getElementById("size_search").value;
    var string = document.getElementById("array_search").value;
    var arr = string.split(',');
    var index = document.getElementById("key_search").value;
    var result= search(arr, index, n);
    if (result == -1) {
        output="not found";
    } else {
        output="your element at index : " + result;
    }
   
    document.getElementById("search_output").innerHTML =   output ;

}




document.getElementById("search_result").addEventListener("click", printSearch, "false");

//javascript
function javascriptSearch() {
    document.getElementById("javascript_search_model").style.display = "block";

}
document.getElementById("search_javascript").addEventListener("click", javascriptSearch, "false");

function exitJsSearch() {

    document.getElementById("javascript_search_model").style.display = "none";

}
document.getElementById("javascript_search_exit").addEventListener("click", exitJsSearch, "false");
//description
function search_description() {

    document.getElementById("search_description").style.display = "block";
}
document.getElementById("search_des").addEventListener("click", search_description, "false");

function search_description_exit() {

    document.getElementById("search_description").style.display = "none";

}
document.getElementById("search_description_exit").addEventListener("click", search_description_exit, "false");
