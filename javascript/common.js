/**
 * 代码封装。
 * @param {*} element 
 * @param {*} oldstr 
 * @param {*} newStr 
 */ 
function replaceClass(element,oldstr,newStr){
                element.className=element.className.replace(oldstr,newStr);
            }