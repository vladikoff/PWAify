const got = require('got');
const debug = require('debug')('manifest');
const Xray = require('x-ray');

module.exports = {
  fetchManifestDetails: function fetchManifestDetails (appUrl, manifestUrl) {
    return new Promise(function (resolve, reject) {
      if (manifestUrl) {
        return resolve({
          manifestTarget: manifestUrl
        });
      }
      var xray = Xray();
      xray(appUrl, 'link[rel=manifest]@href')(function(err, manifestTarget) {
        debug(err, manifestTarget);

        if (err) {
          return reject(err);
        }

        return resolve({
          manifestTarget: manifestTarget
        });
      });
    }).then(function (result) {
      if (result.manifestTarget) {
        // found manifest via html
        return got(result.manifestTarget)
      } else {
        // no manifest in html, fetch at root
        return got(appUrl + '/manifest.json')
      }
    }).then(function (result) {
      var manifestResponse = result.body;
      var manifestJson = null;
      try {
        manifestJson = JSON.parse(manifestResponse);
      } catch (e) {
        throw new Error('Failed to parse manifest.json')
      }

      return manifestJson;
    })
    .catch(function (err) {
      throw err;
    });
  }
}
