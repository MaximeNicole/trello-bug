var Trello = require("node-trello"),
    t,
    idBoard,
    idList;

var init = function (key, token, member, board, list, cb) {
    t = new Trello(key, token);

    t.get("/1/members/" + member + "/boards", function (err, data) {
        if (err) {
            cb(err);
        } else {
            data.forEach(function (item) {
                if (item.name == board) {
                    idBoard = item.id;
                    t.get("/1/boards/" + idBoard + "/lists", function (err, data) {
                        if (err) {
                            cb(err);
                        } else {
                            data.forEach(function (item) {
                                if (item.name == list) {
                                    idList = item.id;
                                    cb(false);
                                }
                            });
                        }
                    });
                }
            });
        }
    });

};
exports.init = init;

var sendBug = function (code, name, text, cb) {
    if (typeof (idList) !== 'undefined') {
        t.post("/1/cards", {
            name: name + ' (' + code + ')',
            desc: text,
            pos: 'bottom',
            idList: idList,
            due: null
        }, function (err, data) {
            if (err) {
                cb(err, {});
            } else {
                cb(false, data.id);
            }
        });
    } else {
        throw "Please use init function before send your bug!";
    }

};
exports.sendBug = sendBug;
