function setupApi(app, gossipManager) {

    var metaDataManager = require('../../meta-data/meta-data_manager');

    // adds a service entry in the meta-data of the specified node
    app.put('/meta-data/add-service/:service', function(req, res) {
        var callback = function(err) {
            if (err) {
                res.json({ err: err });
            }
            else {
                res.json({ service: req.params.service });
            }
        };

        metaDataManager.updateServices(
            {
                service: req.params.service,
                on: true
            },
            callback
        );
    });

    app.get('/nodes/alive', function(req, res) {
        res.json( { alivePeers: gossipManager.livePeers() } );
    });

    return app;
}

module.exports.setupApi = setupApi;

