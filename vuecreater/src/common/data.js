
export const componentType = [
    {
        value:'element-ui',
        label:'element-ui组件'
    },
    {
        value:'custom-element-ui',
        label:'custom-element-ui组件'
    },
    {
        value:'base-elem',
        label:'基础组件'
    },
    {
        value:'base-elem',
        label:'基础组件'
    },
    {
        value:'form-elem',
        label:'表单组件'
    },
    {
        value:'list-elem',
        label:'列表组件'
    },
    {
        value:'container-elem',
        label:'布局组件'
    },
]


export const moduleType = [
    {
        value:'form',
        label:'表单组件'
    },
    {
        value:'list',
        label:'列表组件'
    }
]

export const checkformType = [
    {
        value:'any',
        label:'任意'
    },
    {
        value:'not-empty',
        label:'非空'
    },
    {
        value:'is-number',
        label:'数字'
    }
]


// export const showType = [
//     {
//         value:'alert',
//         label:'弹出框'
//     },
//     {
//         value:'page',
//         label:'页面'
//     },
//     {
//         value:'drawer',
//         label:'抽屉'
//     },
//     {
//         value:'page-elem',
//         label:'页面元素'
//     },
// ]


export const ajaxMethodType = [
    {
        value:'get',
        label:'get'
    },
    {
        value:'post',
        label:'post'
    },
    {
        value:'postForm',
        label:'postForm'
    },
]

export const transferMethodType = [
    {
        value:'',
        label:'不处理'
    },
    {
        value:'number',
        label:'Number(param)'
    },
    {
        value:'array2strbycomma',
        label:'array.join(,)'
    },
    {
        value:'array2strbysemicolon',
        label:'array.join(;)'
    },
    {
        value:'fixed',
        label:'固定值'
    },
    {
        value:'yyyy-mm-dd hh:MM:ss',
        label:'yyyy-mm-dd HH:MM:ss'
    },
    {
        value:'yyyy-mm-dd',
        label:'yyyy-mm-dd'
    },
    {
        value:'date10',
        label:'10位时间戳'
    },
    {
        value:'date13',
        label:'13位时间戳'
    },
    {
        value:'custom',
        label:'自定义方法'
    },
]
 

export const actType = [
    {
        value:'showModel',
        label:'触发显示另外一个模块'
    },
    {
        value:'linkToPage',
        label:'跳转到其他页面'
    },
]

 


export default {
    componentType,
    moduleType,
    //showType,
    checkformType,
    transferMethodType,
    ajaxMethodType,
    actType
}