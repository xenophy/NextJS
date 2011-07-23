/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');

// }}}
// {{{ NX.Date Class Tests

module.exports = {

    // {{{ 'test add#pattern1'

    'test add#pattern1': function() {

        var dt = NX.Date.add(new Date('10/29/2006'), NX.Date.DAY, 5);
        dt.getDate().should.equal(3);
        dt.getMonth().should.equal(10);

        var dt2 = NX.Date.add(new Date('10/1/2006'), NX.Date.DAY, -5);
        dt2.getDate().should.equal(26);
        dt2.getMonth().should.equal(8);

        var dt3 = NX.Date.add(new Date('10/1/2006'), null, -5);
        dt3.getDate().should.equal(1);
        dt3.getMonth().should.equal(9);

        var dt4 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.MILLI, 5);
        dt4.getMilliseconds().should.equal(5);

        var dt5 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.SECOND, 5);
        dt5.getSeconds().should.equal(5);

        var dt6 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.MINUTE, 5);
        dt6.getMinutes().should.equal(5);

        var dt7 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.HOUR, 5);
        dt7.getHours().should.equal(5);

        var dt8 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.MONTH, 5);
        dt8.getMonth().should.equal(2);
        dt8.getFullYear().should.equal(2007);

        var dt9 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.YEAR, 5);
        dt9.getFullYear().should.equal(2011);

    },

    // }}}
    // {{{ 'test between#pattern1'

    'test between#pattern1': function() {

       NX.Date.between(new Date('2011/05/16'), new Date('2011/05/01'), new Date('2011/05/20')).should.equal(true);

    },

    // }}}
    // {{{ 'test clearTime#pattern1'

    'test clearTime#pattern1': function() {

        var dt = NX.Date.clearTime(new Date('2011/05/16 09:12:54'));
        dt.getHours().should.equal(0);
        dt.getMinutes().should.equal(0);
        dt.getSeconds().should.equal(0);

        var dt2 = new Date('2011/05/16 09:12:54');
        var dt3 = NX.Date.clearTime(dt2, true);

        dt3.should.not.equal(dt2);

    },

    // }}}
    // {{{ 'test format#pattern1'

    'test format#pattern1': function() {

        var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');

        NX.Date.format(dt, 'Y-m-d').should.equal('2007-01-11');
        NX.Date.format(dt, 'F j, Y, g:i a').should.equal('January 11, 2007, 6:05 am');
        NX.Date.format(dt, 'l, \\t\\he jS \\of F Y h:i:s A').should.equal('Thursday, the 11th of January 2007 06:05:01 AM');
        NX.Date.format(dt, 'c').should.equal('2007-01-11T06:05:01+09:00');
        NX.Date.format(dt, 'MS').should.equal("\\/Date(1168463101000)\\/");
        NX.Date.format(dt, 'D').should.equal('Thu');

    },

    // }}}
    // {{{ 'test parse#pattern1'

    'test parse#pattern1': function() {

        var dt = new Date();

        dt = NX.Date.parse("2006", "Y");
        NX.Date.format(dt, 'Y').should.equal('2006');

        dt = NX.Date.parse("2011/01/01", "Y/m/d");
        NX.Date.format(dt, 'Y/m/d').should.equal('2011/01/01');

        dt = NX.Date.parse('00:01:00 m is month', "H:m:s \\m \\i\\s\ \\m\\o\\n\\t\\h");
        NX.Date.format(dt, "H:m:s \\m \\i\\s\ \\m\\o\\n\\t\\h").should.equal('00:01:00 m is month');

        dt = NX.Date.parse("2006-01-15", "Y-m-d");
        NX.Date.format(dt, 'Y-m-d').should.equal('2006-01-15');

        dt = NX.Date.parse("2006-01-15 3:20:01 PM", "Y-m-d g:i:s A");
        NX.Date.format(dt, 'Y-m-d g:i:s A').should.equal('2006-01-15 3:20:01 PM');

        dt = NX.Date.parse("2006-02-29 03:20:01", "Y-m-d H:i:s", true);
        assert.equal(dt, null);

        dt = NX.Date.parse("2006-01-01 Sun", "Y-m-d D");
        NX.Date.format(dt, 'Y-m-d D').should.equal('2006-01-01 Sun');

        dt = NX.Date.parse("2006-01-01 Sunday", "Y-m-d l");
        NX.Date.format(dt, 'Y-m-d l').should.equal('2006-01-01 Sunday');

        dt = NX.Date.parse("2006 January", "Y F");
        NX.Date.format(dt, 'Y F').should.equal('2006 January');

        dt = NX.Date.parse("2006 Jan", "Y M");
        NX.Date.format(dt, 'Y M').should.equal('2006 Jan');

        dt = NX.Date.parse("2006", "o");
        NX.Date.format(dt, 'o').should.equal('2006');

        dt = NX.Date.parse("2006-01-01 12:43:12", "Y-m-d h:i:s");
        NX.Date.format(dt, 'Y-m-d h:i:s').should.equal('2006-01-01 12:43:12');

        dt = NX.Date.parse("2006-01-01 12:43:12 +02:00", "Y-m-d h:i:s P");
        NX.Date.format(dt, 'Y-m-d h:i:s P').should.equal('2006-01-01 07:43:12 +09:00');

        dt = NX.Date.parse("2006-01-01 12:43:12 +0200", "Y-m-d h:i:s O");
        NX.Date.format(dt, 'Y-m-d h:i:s O').should.equal('2006-01-01 07:43:12 +0900');

        dt = NX.Date.parse("2004-02-12T15:19:21+00:00", "c");
        NX.Date.format(dt, 'c').should.equal('2004-02-13T00:19:21+09:00');

    },

    // }}}
    // {{{ 'test getFormatCode#pattern1'

    'test getFormatCode#pattern1': function() {

        NX.Date.formatCodes.x = "NX.util.Format.leftPad(this.getDate(), 2, '0')";

        NX.Date.format(new Date('2006-01-01'), 'X').should.equal('X');
        NX.Date.format(new Date('2006-01-01'), 'x').should.equal('01');

    },

    // }}}
    // {{{ 'test formatContainsDateInfo#pattern1'

    'test formatContainsDateInfo#pattern1': function() {

        NX.Date.formatContainsDateInfo('2006-01-01').should.equal(false);
        NX.Date.formatContainsDateInfo('Y-m-d').should.equal(true);

    },

    // }}}
    // {{{ 'test formatContainsHourInfo#pattern1'

    'test formatContainsHourInfo#pattern1': function() {

        NX.Date.formatContainsHourInfo('2006-01-01').should.equal(false);
        NX.Date.formatContainsHourInfo('Y-m-d').should.equal(false);
        NX.Date.formatContainsHourInfo('Y-m-d h:i:s').should.equal(true);

    },

    // }}}
    // {{{ 'test getDayOfYear#pattern1'

    'test getDayOfYear#pattern1': function() {

        var dt = new Date('2011-01-15');
        NX.Date.getDayOfYear(dt).should.equal(14);

        var dt = new Date('2011-11-11');
        NX.Date.getDayOfYear(dt).should.equal(314);

    },

    // }}}
    // {{{ 'test getElapsed#pattern1'

    'test getElapsed#pattern1': function() {

        var dt = new Date('2011-01-15');
        var dt2 = new Date('2011-01-17');
        NX.Date.getElapsed(dt, dt2).should.equal(172800000);
    },

    // }}}
    // {{{ 'test getFirstDayOfMonth#pattern1'

    'test getFirstDayOfMonth#pattern1': function() {

        var dt = new Date('1/10/2007'),
        firstDay = NX.Date.getFirstDayOfMonth(dt);
        NX.Date.dayNames[firstDay].should.equal('Monday');
    },

    // }}}
    // {{{ 'test getLastDayOfMonth#pattern1'

    'test getLastDayOfMonth#pattern1': function() {

        var dt = new Date('1/10/2007'),
        lastDay = NX.Date.getLastDayOfMonth(dt);
        NX.Date.dayNames[lastDay].should.equal('Wednesday');
    },

    // }}}
    // {{{ 'test getMonthNumber#pattern1'

    'test getMonthNumber#pattern1': function() {

        NX.Date.getMonthNumber('Jan').should.equal(0);
        NX.Date.getMonthNumber('Feb').should.equal(1);
        NX.Date.getMonthNumber('Mar').should.equal(2);
        NX.Date.getMonthNumber('Apr').should.equal(3);
        NX.Date.getMonthNumber('May').should.equal(4);
        NX.Date.getMonthNumber('Jun').should.equal(5);
        NX.Date.getMonthNumber('Jul').should.equal(6);
        NX.Date.getMonthNumber('Aug').should.equal(7);
        NX.Date.getMonthNumber('Sep').should.equal(8);
        NX.Date.getMonthNumber('Oct').should.equal(9);
        NX.Date.getMonthNumber('Nov').should.equal(10);
        NX.Date.getMonthNumber('Dec').should.equal(11);

    },

    // }}}
    // {{{ 'test getShortMonthName#pattern1'

    'test getShortMonthName#pattern1': function() {

        NX.Date.getShortMonthName(0).should.equal('Jan');
        NX.Date.getShortMonthName(1).should.equal('Feb');
        NX.Date.getShortMonthName(2).should.equal('Mar');
        NX.Date.getShortMonthName(3).should.equal('Apr');
        NX.Date.getShortMonthName(4).should.equal('May');
        NX.Date.getShortMonthName(5).should.equal('Jun');
        NX.Date.getShortMonthName(6).should.equal('Jul');
        NX.Date.getShortMonthName(7).should.equal('Aug');
        NX.Date.getShortMonthName(8).should.equal('Sep');
        NX.Date.getShortMonthName(9).should.equal('Oct');
        NX.Date.getShortMonthName(10).should.equal('Nov');
        NX.Date.getShortMonthName(11).should.equal('Dec');

    },

    // }}}
    // {{{ 'test getShortDayName#pattern1'

    'test getShortDayName#pattern1': function() {

        NX.Date.getShortDayName(0).should.equal('Sun');
        NX.Date.getShortDayName(1).should.equal('Mon');
        NX.Date.getShortDayName(2).should.equal('Tue');
        NX.Date.getShortDayName(3).should.equal('Wed');
        NX.Date.getShortDayName(4).should.equal('Thu');
        NX.Date.getShortDayName(5).should.equal('Fri');
        NX.Date.getShortDayName(6).should.equal('Sat');

    },

    // }}}
    // {{{ 'test getSuffix#pattern1'

    'test getSuffix#pattern1': function() {

        var dt = new Date('1/10/2007');
        NX.Date.getSuffix(dt).should.equal('th');

        var dt = new Date('1/31/2007');
        NX.Date.getSuffix(dt).should.equal('st');

        var dt = new Date('1/22/2007');
        NX.Date.getSuffix(dt).should.equal('nd');

        var dt = new Date('1/23/2007');
        NX.Date.getSuffix(dt).should.equal('rd');

    },

    // }}}
    // {{{ 'test getTimezone#pattern1'

    'test getTimezone#pattern1': function() {

        var dt = new Date('1/23/2007');
        NX.Date.getTimezone(dt).should.equal('JST');

    },

    // }}}
    // {{{ 'test getWeekOfYear#pattern1'

    'test getWeekOfYear#pattern1': function() {

        var dt = new Date('1/23/2007');
        NX.Date.getWeekOfYear(dt).should.equal(4);

    },

    // }}}
    // {{{ 'test isDST#pattern1'

    'test isDST#pattern1': function() {

        var dt = new Date('1/23/2007');
        NX.Date.isDST(dt).should.equal(false);

    },

    // }}}
    // {{{ 'test parseFunctions#pattern1'

    'test parseFunctions#pattern1': function() {

        var pf = NX.Date.parseFunctions['MS'];

        var dt = pf('\/Date(1238606590509+0800)\/');

        NX.Date.format(dt, 'Y-m-d h:i:s').should.equal('2009-04-02 02:23:10');

    }

    // }}}

}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
