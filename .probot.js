on('issues.labeled')
  .comment('Test test 123')

on('issues.labeled')
  .filter(event => event.payload.issue.labels.find(label => label.name === 'Usage Question'))
  .comment(autoreply('usage_question'))
  .close()

on('issues.labeled')
  .filter(event => event.payload.issue.labels.find(label => label.name === 'Needs Test Case'))
  .comment(autoreply('needs_test_case'))

function autoreply(name) {
  return contents('.github/' + name.toUpperCase() + '_AUTOREPLY.md')
}
