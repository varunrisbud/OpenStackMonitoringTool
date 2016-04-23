/**
 * Created by sameer on 12/13/15.
 */
var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var request = require('request');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var options = {
        uri: 'http://130.65.159.58:5000/v3/auth/tokens',
        headers: {
            'Content-Type': 'application/json'
        },
        json: true,
        body: {
            "auth": {
                "identity": {
                    "methods": [
                        "password"
                    ],
                    "password": {
                        "user": {
                            "id": "a1f99ef4b4b64409b9ded45186bb4b44",
                            "password": "keystoneuseradmin"
                        }
                    }
                },
                "scope": {
                    "project": {
                        "id": "d6812e9d3572441b83bf79a8abac323e"
                    }
                }
            }
        }
    };

    request.post(options, function (err, httpResponse, body) {
        var resp = JSON.stringify(body);
        console.log(body);
        //var resp = "{\"token\":{\"methods\":[\"password\"],\"roles\":[{\"id\":\"9fe2ff9ee4384b1894a90878d3e92bab\",\"name\":\"_member_\"},{\"id\":\"fddb442b78334599ae36fe916199aa09\",\"name\":\"admin\"},{\"id\":\"5aff8bd8d67e4cdb891f5382ae57cd59\",\"name\":\"heat_stack_owner\"}],\"expires_at\":\"2015-12-14T07:23:31.364778Z\",\"project\":{\"domain\":{\"id\":\"default\",\"name\":\"Default\"},\"id\":\"df92585287d44d50bf484b56b79d6264\",\"name\":\"admin\"},\"catalog\":[{\"endpoints\":[{\"url\":\"http://192.168.56.101:8773/services/Cloud\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"26426f4587bd4e3c8340aa7cc44e0db1\"},{\"url\":\"http://192.168.56.101:8773/services/Admin\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"7bf3ff54d0ab4a0ba6b5d300e843c32a\"},{\"url\":\"http://192.168.56.101:8773/services/Cloud\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"a7049d52b2f347c989cab58490729768\"}],\"type\":\"ec2\",\"id\":\"12bfdc5c436d41528a24e112626359ee\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:8776/v1/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"023180d4ba2546629990e406d5a0b108\"},{\"url\":\"http://192.168.56.101:8776/v1/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"04aa374bbc8f4ffbb6b770319d6b40b6\"},{\"url\":\"http://192.168.56.101:8776/v1/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"e4a160ec93c94d4c84e253674ad982e6\"}],\"type\":\"volume\",\"id\":\"243629b0f39a4d5885a9d141081da7de\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:8000/v1\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"4bdbd2cd2428404e808de3e0826112f2\"},{\"url\":\"http://192.168.56.101:8000/v1\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"8093e6e6f7f34ede9d3369dfbe8a9c85\"},{\"url\":\"http://192.168.56.101:8000/v1\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"80b57b163c344b3e99629dd87ed39cc6\"}],\"type\":\"cloudformation\",\"id\":\"2449bc307dfd45aca657a35831b7fa78\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:8774/v2/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"188e56c990b743e5aa6da882cc5bdcdc\"},{\"url\":\"http://192.168.56.101:8774/v2/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"c908f757ebe244cf877b577654fa72e9\"},{\"url\":\"http://192.168.56.101:8774/v2/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"d227b5ae5530406dbe1e87bda30799fb\"}],\"type\":\"compute\",\"id\":\"434349ded68744b7a230bf96075606e4\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:8776/v2/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"10f78f4c78454bbe8a065da304088ca5\"},{\"url\":\"http://192.168.56.101:8776/v2/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"4673d950ba454f97a70b2d29291a8974\"},{\"url\":\"http://192.168.56.101:8776/v2/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"8a4601a1dac643af832bdda374b07e25\"}],\"type\":\"volumev2\",\"id\":\"54f47245b7184dd0ab423f9cc16aff0f\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:3333\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"0925ce48853549c298b741617001e1d2\"},{\"url\":\"http://192.168.56.101:3333\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"7ee2455ca0a4418892d18f5277d208d9\"},{\"url\":\"http://192.168.56.101:3333\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"eb7e8b65ca5d472ab63d605a50b14ab2\"}],\"type\":\"s3\",\"id\":\"85885f30e1394dbab837992c57b45015\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:9696/\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"11d9ea9a519749d0a79975a5eb90f24c\"},{\"url\":\"http://192.168.56.101:9696/\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"6d7641cfd9894dbc93cf78c58cede9d3\"},{\"url\":\"http://192.168.56.101:9696/\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"99077a01444e4b7d93fe61a3df5ae703\"}],\"type\":\"network\",\"id\":\"b2c10cdccf82417aa59b434a5166c7dc\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:9292\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"4a2bdadaf1684d60bb670b03a0efb351\"},{\"url\":\"http://192.168.56.101:9292\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"a9257ecb88db4921aa75ed65d915fbc7\"},{\"url\":\"http://192.168.56.101:9292\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"bd4c7073d0ec44cca502090b6c88e23e\"}],\"type\":\"image\",\"id\":\"d0d5e9ff999e47bb992b73aa1ea9b096\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:8004/v1/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"122c65bb5dd2413a948168cdde7c7538\"},{\"url\":\"http://192.168.56.101:8004/v1/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"92601476dfea4b9781a6fd7b1ee8670a\"},{\"url\":\"http://192.168.56.101:8004/v1/df92585287d44d50bf484b56b79d6264\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"b40642e6ff1549f8b247c545a3d11286\"}],\"type\":\"orchestration\",\"id\":\"d5814acec3f54c36b8180ad210410017\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:5000/v2.0\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"0036fd90aac047d5a3103cf3546295ed\"},{\"url\":\"http://192.168.56.101:35357/v2.0\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"568004670ef14db69741b87935d2d264\"},{\"url\":\"http://192.168.56.101:5000/v2.0\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"6e4b490be20442219a9e8a14d90e6f10\"}],\"type\":\"identity\",\"id\":\"f9c561c7f1674fd7a97eb730e571647c\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:8777/\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"3667ba6331d84ee8ac2d1610f9c32d8d\"},{\"url\":\"http://192.168.56.101:8777/\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"3c6f9c1cd56146b0bc6f83bb4c5d84da\"},{\"url\":\"http://192.168.56.101:8777/\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"69bac9ef8a9640d791967a5e6ef45505\"}],\"type\":\"metering\",\"id\":\"fbd7377602424d3884d4c9fef0b89e43\"},{\"endpoints\":[{\"url\":\"http://192.168.56.101:8774/v3\",\"region\":\"RegionOne\",\"interface\":\"admin\",\"id\":\"2f3c7fe1f9424130bc5535ce60ac9b05\"},{\"url\":\"http://192.168.56.101:8774/v3\",\"region\":\"RegionOne\",\"interface\":\"internal\",\"id\":\"36d11eb85ff749518d8a08b2bbbf4db2\"},{\"url\":\"http://192.168.56.101:8774/v3\",\"region\":\"RegionOne\",\"interface\":\"public\",\"id\":\"a98a3b6fbacd47118e3079acf193c1fd\"}],\"type\":\"computev3\",\"id\":\"ffb383c0603249369aa25d5921329049\"}],\"extras\":{},\"user\":{\"domain\":{\"id\":\"default\",\"name\":\"Default\"},\"id\":\"040d7060a671448481ccb4d9e8612961\",\"name\":\"admin\"},\"issued_at\":\"2015-12-14T06:23:31.364820Z\"}}"
        var jsonres = JSON.parse(resp);
        var catalog = jsonres.token.catalog;
        // console.log(catalog);
        var result = [];
        for (var i in catalog) {
            var servicesMap = new Object();
            var typeValue = catalog[i].type;
            var endpointsValue = catalog[i].endpoints[0].url;
            servicesMap["type"] = typeValue;
            servicesMap["url"] = endpointsValue;

            //console.log("Endpoint Values\n" +endpointsValue);
            endpointsValue = endpointsValue.split('/');
            //  console.log(endpointsValue);
            //console.log("Endpoint Value after split\n" +endpointsValue);

            var ipPort = endpointsValue[2].split(':');
            // console.log(servicesMap["ipaddr"]);
            // console.log(servicesMap["port"]);

            servicesMap["ipaddr"] = ipPort[0];
            servicesMap["port"] = ipPort[1];
            //console.log("IP Addr: " + ipPort[0]);
            //console.log("Port" + ipPort[1]);
            result.push(servicesMap);
        }
        console.log("Result is " + result);
        res.json({services: result});
    });
});

router.get('/createinstance', function (req, res, next) {
    var options = {
        uri: 'http://130.65.159.58:5000/v2.0/tokens',
        headers: {
            'Content-Type': 'application/json'
        },
        json: true,
        body: {
            "auth": {
                "tenantName": "admin",
                "passwordCredentials": {
                    "username": "admin",
                    "password": "keystoneuseradmin"
                }
            }
        }
    };

    request.post(options, function (err, httpResponse, body) {

        var keyStoneAuthToken = body.access.token.id;

        createServer(keyStoneAuthToken, function(data){

            console.log(data.body);

            if(data.statusCode == 202) {
                var serverID = data.body.server.id;
                checkServerStatus(keyStoneAuthToken, serverID, function(status) {
                    console.log("In IF");
                    res.send(status);
                });
            }
            else {
                console.log("In else");
                res.json(data);
            }
        });
    });
    //res.render('glance');
});

var createServer = function(keyStoneAuthToken, callback) {
    var options = {
        uri: 'http://130.65.159.58:8774/v2.1/d6812e9d3572441b83bf79a8abac323e/servers',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': keyStoneAuthToken,
            'Cache-Control': 'no-cache'
        },
        json: true,
        body: {
            "server": {
                "name": "new-server-test",
                "imageRef": "http://130.65.159.58:9292/images/c6fe6e17-8054-41c0-81b3-bd2ef8375497",
                "flavorRef": "http://130.65.159.58:9292/flavors/1",
                "networks": [{"uuid": "c39bedd0-1d41-4536-8b7c-9ef2ea8f06c9"}],
                "metadata": {
                    "My Server Name": "CurlTestServer"
                }
            }
        }
    };

    request.post(options, function (req, res, body) {
        callback(res);
    });
}

var checkServerStatus = function(keyStoneAuthToken, serverId, callback) {
    var options = {
        uri: 'http://130.65.159.58:8774/v2.1/d6812e9d3572441b83bf79a8abac323e/servers/' + serverId,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': keyStoneAuthToken,
            'Cache-Control': 'no-cache'
        },
        method: 'GET'
    };

    request(options, function(req, res, body) {
        callback(body);
    });
}

module.exports = router;