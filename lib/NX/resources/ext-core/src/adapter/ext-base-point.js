/*!
 * Ext Core Library 3.0
 * http://extjs.com/
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * 
 * MIT Licensed - http://extjs.com/license/mit.txt
 */
	Ext.lib.Point = function(x, y) {
        if (Ext.isArray(x)) {
            y = x[1];
            x = x[0];
        }
        var me = this;
        me.x = me.right = me.left = me[0] = x;
        me.y = me.top = me.bottom = me[1] = y;
    };

    Ext.lib.Point.prototype = new Ext.lib.Region();
