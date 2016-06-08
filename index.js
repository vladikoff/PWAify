const debug = require('debug')('index');
const packager = require('electron-packager');
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

const manifest = require('./lib/manifest');

module.exports = function (options) {
  options = options || {};
  debug('options', options);
  const appUrl = options.appUrl;
  return manifest.fetchManifestDetails(appUrl)
    .then(function(manifestJson) {
      debug('manifestJson', manifestJson);
      var name = manifestJson.name || manifestJson.short_name;
      var start_url = appUrl + manifestJson.start_url ;
      var appData = {
        appUrl: start_url
      };
      fs.writeFileSync(path.join(__dirname, 'template', 'prefs.json'), JSON.stringify(appData));
      var packagerOpts = {
        name: name,
        arch: 'all',
        overwrite: true,
        dir: path.join(__dirname, 'template'),
        platform: options.platforms || 'all'
      };

      if (options.icon) {
        packagerOpts.icon = options.icon
      }

      return new Promise(function (resolve) {
        packager(packagerOpts, function done_callback(err, appPaths) {
          if (err) {
            throw err;
          }

          resolve({
            appPaths: appPaths
          })
        })
      })

    })
    .then(function (result) {
      console.log(chalk.green('Your app is ready!'), result);
    }).catch(function (err) {
      throw err;
    })
};
