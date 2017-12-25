/*eslint-disable*/
/**
 * @file: 公用方法
 * @Author:wangmeng
 * @Date:   2017-12-12
 * @用法: import Util from '../assets/js/util.js';
 *        Util.getFestival(month,day);
 */
export default {
    /**
     * 转换千分符
     *
     * @param {number，string} 数字金额
     * @return {string} 千分符 
     */
    thousandthCharacter: function(param) {
        if (!param || isNaN(param)) {
            return ''
        }
        if (param == 0) {
            return 0
        }
        let str = param + ''
        let head = ''
        let end = ''
        if (str.includes('.')) {
            end = str.split('.')[1]
            head = str.split('.')[0]
            return head.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + `.${end}`
        } else {
            return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        } 
    // 返回数组中最大值
    arrayMax: arr => Math.max(...arr),
    // 返回数组中最小值
    arrayMin: arr => Math.min(...arr),
    // 将数组块划分成指定大小的较小数组
    chunk: (arr, size) => Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size)),
    //从数组中移除 falsey 值
    compact: arr => arr.filter(Boolean),
    // 计算数组中值的出现次数
    countOccurrences: (arr, value) => arr.reduce((total, v) => v === value ? a + 1 : a + 0, 0),
    // 深度拼合数组
    deepFlatten: arr => [].concat(...array.map(v => Array.isArray(v) ? deepFlatten(v) : v)),
    // 折合指定层数

    // 比较两个数组之间的差异 数组a有而b没有
    defference: (a,b) =>{const s = new Set(a) return a.filter(x =>!s.has(x))},
    // difference([1,2,3], [1,2,4]) -> [3]
    // 返回数组的所有不同值。
    flattenDepth：(arr, depth = 1) =>
        depth != 1 ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), [])
        : arr.reduce((a, v) => a.concat(v), []);
    // flattenDepth([1,[2],[[[3],4],5]], 2) -> [1,2,[3],4,5]
    distinctValuesOfArray： arr => [...new Set(arr)],
    // 若深度去重 
    deepDistinctValuesOfArray: arr =>{
        let hash = {}
        let newArr = []
        arr.forEach(item =>{
            hash[JSON.stringify(item)] = item
        })
        return newArr = Object.keys(hash).map(item => {
           return JSON.parse(item)
        })
    },
    // 移除数组中的元素, 直到传递的函数返回true。返回数组中的其余元素。
    dropElements: (arr, func) => {
        while (arr.length > 0 && !func(arr[0])) arr.shift();
        return arr;
    },
    // dropElements([1, 2, 3, 4], n => n >= 3) -> [3,4]
    // 返回数组中的每个第 n 个元素
    everyNth: (arr,n) =>{
        arr.filter(item,index) => i % n === 0
    },
    // 删除掉出现多次的item
    filterNonUnique：arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i)),
}
