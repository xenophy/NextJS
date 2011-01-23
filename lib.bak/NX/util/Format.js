
NX.util.Format = function() {

    var trimRe         = /^\s+|\s+$/g,
        stripTagsRE    = /<\/?[^>]+>/gi,
        stripScriptsRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,
        nl2brRe        = /\r?\n/g;

    return {

        trim : function(value) {
            return String(value).replace(trimRe, "");
        },

    }

}();
