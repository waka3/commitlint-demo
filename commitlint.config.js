module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      'always',
      'error',
      [
        // 'build', // 构建执行
        // 'chore', // 构建工具相关
        // 'ci', // CI 相关
        // 'docs', // 文档更新
        // 'feat', // 新功能
        // 'fix', // bug 修复
        // 'perf', // 性能优化
        // 'refactor', // 功能重构
        // 'revert', // 回滚操作
        // 'style', // 样式变动
        // 'test' // 单元测试
        // 'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ]
  }
}

