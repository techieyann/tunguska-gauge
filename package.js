Package.describe({
  name: 'tunguska:gauge',
  version: '1.0.18',
  summary: 'Highly configurable, reactive gauges',
  git: 'https://github.com/robfallows/tunguska-gauge.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('templating', 'client');
  api.addFiles('tunguska:gauge.js','client');
  api.export('TunguskaGauge','client');
});

Package.onTest(function(api) {
  api.use('templating', 'client');
  api.use('practicalmeteor:munit','client');
  api.use('tunguska:gauge','client');
  api.addFiles('tests/client-tests.js','client');
});
