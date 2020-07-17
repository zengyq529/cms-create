const user = {
    addBtn: '添加用户',
    search: [
        {
            name: 'user',
            value: '',
            defaultValie: '', //目前不支持
            component: 'el-input',
            placeholder: '按用户查询',
            props: {},
        },
    ],
    addTitle: '添加用户信息',
    updateTitle: '修改用户信息',
    addParam: {
        user: {
            label: '用户名',
            defaultValue: "",
            component: 'el-input',
            placeholder: '请输入用户名',
            check: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
        },
        password: {
            label: '用户密码',
            component: 'el-input',
            defaultValue: "",
            placeholder: '请输入用户密码',
            required: true,
            check: [{ required: true, message: '请输入用户密码', trigger: 'blur' }]
        },
        type: {
            label: '用户类型',
            component: 'global-type-select',
            placeholder: '请输入用户类型',
            defaultValue: 1,
            required: true,
            check: [{ required: true, message: '请输入用户密码', trigger: 'change' }],
            props: {
                type: 'user'
            }
        }
    },
    tableParam: [
        { label: '用户ID', value: 'id' },
        { label: '用户名', value: 'name' },
        { label: '用户类型', value: 'type', component: 'global-type-get', props: { type: 'user' } },
    ]
}

 
export default {
    user
}