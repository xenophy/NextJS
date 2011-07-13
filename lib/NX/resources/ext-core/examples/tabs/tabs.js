/*!
 * Ext Core Library 3.0
 * http://extjs.com/
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * 
 * MIT Licensed - http://extjs.com/license/mit.txt
 */
Ext.onReady(function(){
   Ext.select('.tab-buttons-panel').on('click', function(e, t) {
       Ext.fly(t).radioClass('tab-show');
       Ext.get('content' + t.id.slice(-1)).radioClass('tab-content-show');
   }, null, {delegate: 'li'});
});