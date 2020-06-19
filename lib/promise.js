/*
 * @Author       : your name
 * @Date         : 2020-06-18 15:25:33
 * @LastEditTime : 2020-06-18 15:37:44
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \webGL-\lib\promise.js
 */ 
function promise(fn){
    let value= null,
        succcallbacks = [],
        failcallbacks = [];
    this.then =  function(fulfilled, rejected){
        succcallbacks.push(fulfilled)
        failcallbacks.psuh(rejected)
    }

    function resolve(value) {
        succcallbacks.forEach((callback)=> {
            callback(value)
        })
    }

    function reject(value) {
        failcallbacks.forEach((callback)={
            callback(value)
        })
    }

    fn(resolve, reject)

}