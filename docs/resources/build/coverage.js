
require('../../../lib/NX');
var path = require('path');
var fs = require('fs');
var LF = String.fromCharCode(10);


var log = fs.readFileSync('./coverage.log').toString('utf8');

log = log.split(LF);

var start = false;
var lines = [];
var toal = {};
log.forEach(function(line) {

    if(start && line.substr(0,'   | '.length) === '   | ') {

        // ライン解析
        line = line.split('|');

        var o = {};

        line.forEach(function(part, i) {

            part = NX.String.trim(part);

            if(i == 0) {
            } else if(i == 1) {
                o.filename = part;
            } else if(i == 2) {
                o.coverage = part;
                o.coveragedec = Math.floor(part);
            } else if(i == 3) {
                o.loc = part;
            } else if(i == 4) {
                o.sloc = part;
            } else if(i == 5) {
                o.missed = part;
            }

        });

        lines.push(o);


    } else if(start && line.substr(0, '                                              |'.length) === '                                              |') {

        // ライン解析
        line = line.split('|');

        var o = {};

        line.forEach(function(part, i) {

            part = NX.String.trim(part);

            if(i == 0) {
            } else if(i == 1) {
                o.coverage = part;
            } else if(i == 2) {
                o.loc = part;
            } else if(i == 3) {
                o.sloc = part;
            } else if(i == 4) {
                o.missed = part;
            }

        });

        total = o;

    }


    if(line === '   +------------------------------------------+----------+------+------+--------+') {
        start = true;
    }
});


var output = [
    //'<table border="1" width="100%" cellpadding="5" cellspacing="0" style="border:solid 1px #999999;">',
    '<table width="100%">',
    '<tr>',
    '     <th>filename</th>',
    '     <th>graph</th>',
    '     <th>coverage</th>',
    '     <th>loc</th>',
    '     <th>sloc</th>',
    '     <th>missed</th>',
    '</tr>'
].join(LF);

lines.forEach(function(o) {

     var line = [
        '<tr>',
        '     <td width="312">%s</td>',
        '     <td width="550"><img width="%s%" height="16" alt="graph" src="%s" /></td>',
        '     <td width="36" align="right">%s</td>',
        '     <td width="36" align="right">%s</td>',
        '     <td width="36" align="right">%s</td>',
        '     <td width="36" align="right">%s</td>',
        '</tr>'
    ].join(LF);

    var img = 'http://art24.photozou.jp/pub/253/198253/photo/64702984.gif';
    if(o.coveragedec == 100) {
        img = 'http://art17.photozou.jp/pub/253/198253/photo/65891416.gif';
    }

    line = NX.String.format(line, o.filename, o.coveragedec, img, o.coverage, o.loc, o.sloc, o.missed);

    output += line;

});

var line = [
    '<tr>',
    '     <td width="862" colspan="2"> </td>',
    '     <td width="36" align="right"><strong>%s</strong></td>',
    '     <td width="36" align="right"><strong>%s</strong></td>',
    '     <td width="36" align="right"><strong>%s</strong></td>',
    '     <td width="36" align="right"><strong>%s</strong></td>',
    '</tr>'
].join(LF);

line = NX.String.format(line, total.coverage, total.loc, total.sloc, total.missed);

output += line;

output += '</table>';


fs.writeFileSync('./coverage.html', output);
