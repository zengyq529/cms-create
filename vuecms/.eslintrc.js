const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended',
  ],
  rules: {
    //eqeqeq: 'off',

    'linebreak-style': 0,
    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],

    // 仅在开发模式允许使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 仅在开发模式下允许使用alert
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 允许使用console(以后规范日志打印之后应该在绝大部分地方也不让用了，或者仅限开发模式可以用)
    'no-console': 0,
    // 2格缩进
    indent: ['error', 2],
    // 声明函数时，函数名和括号间要有空格
    'space-before-function-paren': ['error', 'always'],
    // require的参数可以是表达式
    'import/no-dynamic-require': 0,
    // 只允许在for里面出现++ --
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 允许动态require
    'global-require': 0,
    // 强制执行对象解构，而不执行数组解构
    'prefer-destructuring': ['error', { object: true, array: false }],
    // 覆盖airbnb每行最大长度的限制，默认的100是针对2格缩进的，改成4格缩进后适当加长一些
    'max-len': ['error', {
      code: 1000,
      // tabWidth: 2,
      // ignoreUrls: true,
      // ignoreComments: false,
      // ignoreRegExpLiterals: true,
      // ignoreStrings: true,
      // ignoreTemplateLiterals: true,
    }],

    'class-methods-use-this': [0],

    // 代码注释中有 TODO: 在提交时给个警告
    // 'no-warning-comments': [process.env.NODE_ENV === 'production' ? 'error' : 'off', {
    // terms: ['TODO', 'todo', 'fixme', 'xxx'],
    // }],

    /**
     * 取消airbnb规则中对for-of, for-in的限制
     *
     * @see https://github.com/airbnb/javascript/blob/a510095acf20e3d96a94e6d0d0b26cfac71d2c7f/packages/eslint-config-airbnb-base/rules/style.js#L332
     */
    'no-restricted-syntax': [
      'error', {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      }, {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    /**
     * 覆盖airbnb不允许对参数赋值的规则，可以对参数的属性进行修改
     *
     * @see https://github.com/airbnb/javascript/issues/1217
     * @see https://github.com/airbnb/javascript#functions--mutate-params
     */
    'no-param-reassign': [
      'error', {
        props: false,
      },
    ],

    // 部分变量允许使用下划线开头和结尾定义变量（主要是因为__INITIAL_STATE__没法改）
    'no-underscore-dangle': ['error', {
      allow: [
        '__INITIAL_STATE__', // Vue同步状态
        '__VUE_SSR_CONTEXT__', // Vue服务端渲染context
        '_data', // jsMind变量
      ],
    }],

    /**
     * 覆盖vue的规则
     *
     * @see https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md
     */
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: false,
      baseIndent: 0,
      ignores: [],
    }],

    /**
     * 多个attr必须换行，且不能在tag的同一行写第一个attr
     *
     * @see https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
     */
    'vue/max-attributes-per-line': [2, {
      singleline: 5,
      multiline: {
        max: 5,
        allowFirstLine: true,
      },
    }],

    // 不允许空函数，确实需要空函数的话，需要在函数内部加个注释
    'no-empty-function': ['error', { allow: [] }],

    // 禁止不必要的fn.call调用
    'no-useless-call': 'error',

    // 禁止难以理解的箭头函数
    'no-confusing-arrow': 'error',

    // 函数嵌套层数，最大3层
    'max-nested-callbacks': ['error', 3],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }], // 关闭对iview end-tag 检查
    // "import/no-unresolved": [2, { "ignore": ["fastclick", "vconsole"] }]

    // 强制jsDoc注释
    // 'require-jsdoc': ['error', {
    //     'require': {
    //         'FunctionDeclaration': true,
    //         'MethodDefinition': true,
    //         'ArrowFunctionExpression': true,
    //         'ClassDeclaration': true
    //     }
    // }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.vue', '.json', '.ts'],
            alias: {
              '@': path.resolve('./src'),
            },
          },
        },
      },
    },
  },
};
