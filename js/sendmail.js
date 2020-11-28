var _0x3c63 = ['<button\x20style=\x22background-color:\x20#4CAF50;\x20border:\x20none;\x20color:\x20white;\x20padding:\x2015px\x2032px;\x20text-align:\x20center;\x20text-decoration:\x20none;\x20display:\x20inline-block;\x20font-size:\x2016px;\x20margin:\x204px\x202px;\x20cursor:\x20pointer;\x22><a\x20href=\x22', '\x22>Download\x20File</a></button>\x20<br>\x20<strong>This\x20File\x20is\x20Wipe\x20After\x206\x20Months<strong>', 'then', 'getElementById', 'value', 'subject', 'send', 'smtp.gmail.com', 'dedar3000@gmail.com', '01719972285'];
(function (_0x196350, _0xa608e0) {
    var _0xa5418b = function (_0x1dc21f) {
        while (--_0x1dc21f) {
            _0x196350['push'](_0x196350['shift']());
        }
    };
    _0xa5418b(++_0xa608e0);
}(_0x3c63, 0x1a7));
var _0x5e50 = function (_0x59c880, _0x43293d) {
    _0x59c880 = _0x59c880 - 0x0;
    var _0x562f66 = _0x3c63[_0x59c880];
    return _0x562f66;
};

function sendmail() {
    var _0x48a415 = document[_0x5e50('0x0')]('email')[_0x5e50('0x1')];
    var _0x31c879 = document['getElementById'](_0x5e50('0x2'))[_0x5e50('0x1')];
    Email[_0x5e50('0x3')]({
        'Host': _0x5e50('0x4'),
        'Username': _0x5e50('0x5'),
        'Password': _0x5e50('0x6'),
        'To': _0x48a415,
        'From': 'dedar3000@gmail.com',
        'Subject': _0x31c879,
        'Body': _0x5e50('0x7') + downloadlink + _0x5e50('0x8')
    })[_0x5e50('0x9')](_0x27164e => alert(_0x27164e));
}