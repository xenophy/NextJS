/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.MarkDown

/**
 * @class NX.util.MarkDown
 */
NX.util.MarkDown = function() {

    var urls;
    var titles;
    var htmlBlock;
    var listLevel = 0;

    // {{{ stripLinkDefinitions

    function stripLinkDefinitions(text) {

        var text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|\Z)/gm, function (wholeMatch,m1,m2,m3,m4) {
            m1 = m1.toLowerCase();
            urls[m1] = encodeAmpsAndAngles(m2);
            if (m3) {
                return m3+m4;
            } else if (m4) {
                titles[m1] = m4.replace(/"/g,"&quot;");
            }
            return "";
        });

        return text;
    }

    // }}}
    // {{{ hashHTMLBlocks

    function hashHTMLBlocks(text) {

        text = text.replace(/\n/g,"\n\n");

        var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del"
        var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math"

        text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,hashElement);
        text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,hashElement);
        text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,hashElement);

        text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,hashElement);
        text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,hashElement);

        text = text.replace(/\n\n/g,"\n");
        return text;
    }

    // }}}
    // {{{ hashElement

    function hashElement(wholeMatch,m1) {

        var blockText = m1;

        blockText = blockText.replace(/\n\n/g,"\n");
        blockText = blockText.replace(/^\n/,"");
        blockText = blockText.replace(/\n+$/g,"");
        blockText = "\n\n~K" + (htmlBlock.push(blockText)-1) + "K\n\n";

        return blockText;
    };

    // }}}
    // {{{ runBlockGamut

    function runBlockGamut(text) {

        text = doHeaders(text);

        var key = hashBlock("<hr />");
        text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,key);
        text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,key);
        text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,key);

        text = doLists(text);
        text = doCodeBlocks(text);
        text = doBlockQuotes(text);

        text = hashHTMLBlocks(text);
        text = formParagraphs(text);

        return text;
    }

    // }}}
    // {{{ runSpanGamut

    function runSpanGamut(text) {

        text = doCodeSpans(text);
        text = escapeSpecialCharsWithinTagAttributes(text);
        text = encodeBackslashEscapes(text);

        text = doImages(text);
        text = doAnchors(text);

        text = doAutoLinks(text);
        text = encodeAmpsAndAngles(text);
        text = doItalicsAndBold(text);

        text = text.replace(/  +\n/g," <br />\n");

        return text;
    }

    // }}}
    // {{{ escapeSpecialCharsWithinTagAttributes

    function escapeSpecialCharsWithinTagAttributes(text) {
        var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

        text = text.replace(regex, function(wholeMatch) {
            var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g,"$1`");
            tag = escapeCharacters(tag,"\\`*_");
            return tag;
        });

        return text;
    }

    // }}}
    // {{{ doAnchors

    function doAnchors(text) {

        text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);
        text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);
        text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

        return text;
    }

    // }}}
    // {{{ writeAnchorTag

    function writeAnchorTag(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {

        if (m7 == undefined) {
            m7 = "";
        }

        var whole_match = m1;
        var link_text   = m2;
        var link_id = m3.toLowerCase();
        var url = m4;
        var title = m7;

        if (url == "") {
            if (link_id == "") {
                link_id = link_text.toLowerCase().replace(/ ?\n/g," ");
            }
            url = "#"+link_id;

            if (urls[link_id] != undefined) {
                url = urls[link_id];
                if (titles[link_id] != undefined) {
                    title = titles[link_id];
                }
            }
            else {
                if (whole_match.search(/\(\s*\)$/m)>-1) {
                    url = "";
                } else {
                    return whole_match;
                }
            }
        }

        url = escapeCharacters(url,"*_");
        var result = "<a href=\"" + url + "\"";

        if (title != "") {
            title = title.replace(/"/g,"&quot;");
            title = escapeCharacters(title,"*_");
            result +=  " title=\"" + title + "\"";
        }

        result += ">" + link_text + "</a>";

        return result;
    }

    // }}}
    // {{{ doImages

    function doImages(text) {

        text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeImageTag);
        text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeImageTag);

        return text;
    }

    // }}}
    // {{{ writeImageTag

    function writeImageTag(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {

        var whole_match = m1;
        var alt_text   = m2;
        var link_id	 = m3.toLowerCase();
        var url		= m4;
        var title	= m7;

        if (!title) {
            title = "";
        }

        if (url == "") {
            if (link_id == "") {
                link_id = alt_text.toLowerCase().replace(/ ?\n/g," ");
            }
            url = "#"+link_id;

            if (urls[link_id] != undefined) {
                url = urls[link_id];
                if (titles[link_id] != undefined) {
                    title = title[link_id];
                }
            }
            else {
                return whole_match;
            }
        }

        alt_text = alt_text.replace(/"/g,"&quot;");
        url = escapeCharacters(url,"*_");
        var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";

        title = title.replace(/"/g,"&quot;");
        title = escapeCharacters(title,"*_");
        result +=  " title=\"" + title + "\"";

        result += " />";

        return result;
    }

    // }}}
    // {{{ doHeaders

    function doHeaders(text) {

        text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(wholeMatch,m1){return hashBlock("<h1>" + runSpanGamut(m1) + "</h1>");});
        text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(matchFound,m1){return hashBlock("<h2>" + runSpanGamut(m1) + "</h2>");});
        text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(wholeMatch,m1,m2) {
            var h_level = m1.length;
            return hashBlock("<h" + h_level + ">" + runSpanGamut(m2) + "</h" + h_level + ">");
        });

        return text;
    }

    // }}}
    // {{{ doLists

    function doLists(text) {

        text += "~0";

        var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

        if(listLevel) {

            text = text.replace(whole_list,function(wholeMatch,m1,m2) {
                var list = m1;
                var list_type = (m2.search(/[*+-]/g)>-1) ? "ul" : "ol";

                list = list.replace(/\n{2,}/g,"\n\n\n");;
                var result = processListItems(list);

                result = result.replace(/\s+$/,"");
                result = "<"+list_type+">" + result + "</"+list_type+">\n";
                return result;
            });

        } else {

            whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;

            text = text.replace(whole_list,function(wholeMatch,m1,m2,m3) {

                var runup = m1;
                var list = m2;
                var list_type = (m3.search(/[*+-]/g)>-1) ? "ul" : "ol";
                var list = list.replace(/\n{2,}/g,"\n\n\n");;
                var result = processListItems(list);
                result = runup + "<"+list_type+">\n" + result + "</"+list_type+">\n";

                return result;
            });
        }

        text = text.replace(/~0/,"");

        return text;
    }

    // }}}
    // {{{ processListItems

    function processListItems(list_str) {

        listLevel++;

        list_str = list_str.replace(/\n{2,}$/,"\n");
        list_str += "~0";

        list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(wholeMatch,m1,m2,m3,m4){

            var item = m4;
            var leading_line = m1;
            var leading_space = m2;

            if (leading_line || (item.search(/\n{2,}/)>-1)) {
                item = runBlockGamut(outdent(item));
            }
            else {
                item = doLists(outdent(item));
                item = item.replace(/\n$/,"");
                item = runSpanGamut(item);
            }

            return  "<li>" + item + "</li>\n";
        });

        list_str = list_str.replace(/~0/g,"");
        listLevel--;

        return list_str;
    }

    // }}}
    // {{{ doCodeBlocks

    function doCodeBlocks(text) {

        text += "~0";

        text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(wholeMatch,m1,m2) {

            var codeblock = m1;
            var nextChar = m2;

            codeblock = encodeCode( outdent(codeblock));
            codeblock = detab(codeblock);
            codeblock = codeblock.replace(/^\n+/g,"");
            codeblock = codeblock.replace(/\n+$/g,"");
            codeblock = "<pre><code>" + codeblock + "\n</code></pre>";

            return hashBlock(codeblock) + nextChar;
        });

        text = text.replace(/~0/,"");

        return text;
    }

    // }}}
    // {{{ hashBlock

    function hashBlock(text) {

        text = text.replace(/(^\n+|\n+$)/g,"");

        return "\n\n~K" + (htmlBlock.push(text)-1) + "K\n\n";
    }

    // }}}
    // {{{ doCodeSpans

    function doCodeSpans(text) {

        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch,m1,m2,m3,m4) {

            var c = m3;
            c = c.replace(/^([ \t]*)/g,"");
            c = c.replace(/[ \t]*$/g,"");
            c = encodeCode(c);

            return m1+"<code>"+c+"</code>";
        });

        return text;
    }

    // }}}
    // {{{ encodeCode

    function encodeCode(text) {

        text = text.replace(/&/g,"&amp;");
        text = text.replace(/</g,"&lt;");
        text = text.replace(/>/g,"&gt;");
        text = escapeCharacters(text,"\*_{}[]\\",false);

        return text;
    }

    // }}}
    // {{{ doItalicsAndBold

    function doItalicsAndBold(text) {

        text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>");
        text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>");

        return text;
    }

    // }}}
    // {{{ doBlockQuotes

    function doBlockQuotes(text) {

        text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(wholeMatch,m1) {

            var bq = m1;

            bq = bq.replace(/^[ \t]*>[ \t]?/gm,"~0");
            bq = bq.replace(/~0/g,"");
            bq = bq.replace(/^[ \t]+$/gm,"");
            bq = runBlockGamut(bq);
            bq = bq.replace(/(^|\n)/g,"$1  ");
            bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch,m1) {
                var pre = m1;
                pre = pre.replace(/^  /mg,"~0");
                pre = pre.replace(/~0/g,"");
                return pre;
            });

            return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
        });

        return text;
    }

    // }}}
    // {{{ formParagraphs

    function formParagraphs(text) {

        text = text.replace(/^\n+/g,"");
        text = text.replace(/\n+$/g,"");

        var grafs = text.split(/\n{2,}/g);
        var grafsOut = new Array();
        var end = grafs.length;

        for(var i=0; i<end; i++) {
            var str = grafs[i];

            if(str.search(/~K(\d+)K/g) >= 0) {
                grafsOut.push(str);
            } else if (str.search(/\S/) >= 0) {
                str = runSpanGamut(str);
                str = str.replace(/^([ \t]*)/g,"<p>");
                str += "</p>"
                grafsOut.push(str);
            }

        }

        end = grafsOut.length;

        for(var i=0; i<end; i++) {
            while(grafsOut[i].search(/~K(\d+)K/) >= 0) {
                var blockText = htmlBlock[RegExp.$1];
                blockText = blockText.replace(/\$/g,"$$$$");
                grafsOut[i] = grafsOut[i].replace(/~K\d+K/,blockText);
            }
        }

        return grafsOut.join("\n\n");
    }

    // }}}
    // {{{ encodeAmpsAndAngles

    function encodeAmpsAndAngles(text) {

        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");
        text = text.replace(/<(?![a-z\/?\$!])/gi,"&lt;");

        return text;
    }

    // }}}
    // {{{ encodeBackslashEscapes

    function encodeBackslashEscapes(text) {

        text = text.replace(/\\(\\)/g,escapeCharacters_callback);
        text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g,escapeCharacters_callback);

        return text;
    }

    // }}}
    // {{{ doAutoLinks

    function doAutoLinks(text) {

        text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,"<a href=\"$1\">$1</a>");
        text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(wholeMatch,m1) {
            return encodeEmailAddress(unescapeSpecialChars(m1));
        });

        return text;
    }

    // }}}
    // {{{ encodeEmailAddress

    function encodeEmailAddress(addr) {

        function char2hex(ch) {
            var hexDigits = '0123456789ABCDEF';
            var dec = ch.charCodeAt(0);
            return(hexDigits.charAt(dec>>4) + hexDigits.charAt(dec&15));
        }

        var encode = [
            function(ch){return "&#"+ch.charCodeAt(0)+";";},
            function(ch){return "&#x"+char2hex(ch)+";";},
            function(ch){return ch;}
        ];

        addr = "mailto:" + addr;

        addr = addr.replace(/./g, function(ch) {
            if (ch == "@") {
                ch = encode[Math.floor(Math.random()*2)](ch);
            } else if (ch !=":") {
                var r = Math.random();
                ch =  (r > .9 ? encode[2](ch) : r > .45 ? encode[1](ch) : encode[0](ch));
            }
            return ch;
        });

        addr = "<a href=\"" + addr + "\">" + addr + "</a>";
        addr = addr.replace(/">.+:/g,"\">");

        return addr;
    }

    // }}}
    // {{{ unescapeSpecialChars

    function unescapeSpecialChars(text) {

        text = text.replace(/~E(\d+)E/g, function(wholeMatch,m1) {
            var charCodeToReplace = parseInt(m1);
            return String.fromCharCode(charCodeToReplace);
        });

        return text;
    }

    // }}}
    // {{{ outdent

    function outdent(text) {

        text = text.replace(/^(\t|[ ]{1,4})/gm,"~0");
        text = text.replace(/~0/g,"")

        return text;
    }

    // }}}
    // {{{ detab

    function detab(text) {

        text = text.replace(/\t(?=\t)/g,"    ");
        text = text.replace(/\t/g,"~A~B");
        text = text.replace(/~B(.+?)~A/g, function(wholeMatch,m1,m2) {

            var leadingText = m1;
            var numSpaces = 4 - leadingText.length % 4;

            for(var i=0; i<numSpaces; i++) {
                leadingText+=" ";
            }

            return leadingText;
        });

        text = text.replace(/~A/g,"    ");
        text = text.replace(/~B/g,"");

        return text;
    }

    // }}}
    // {{{ escapeCharacters

    function escapeCharacters(text, charsToEscape, afterBackslash) {

        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g,"\\$1") + "])";

        if(afterBackslash) {
            regexString = "\\\\" + regexString;
        }

        var regex = new RegExp(regexString,"g");

        text = text.replace(regex,escapeCharacters_callback);

        return text;
    };

    // }}}
    // {{{ escapeCharacters_callback

    function escapeCharacters_callback(wholeMatch,m1) {

        var charCodeToEscape = m1.charCodeAt(0);

        return "~E"+charCodeToEscape+"E";
    };

    // }}}
    // {{{ return

    return {

        // {{{ parse

        /**
         * @method parse
         */
        parse : function(text) {

            urls = [];
            titles = [];
            htmlBlock = [];

            text = text.replace(/~/g,"~T");
            text = text.replace(/\$/g,"~D");
            text = text.replace(/\r\n/g,"\n");
            text = text.replace(/\r/g,"\n");
            text = "\n\n" + text + "\n\n";
            text = detab(text);
            text = text.replace(/^[ \t]+$/mg,"");
            text = hashHTMLBlocks(text);
            text = stripLinkDefinitions(text);
            text = runBlockGamut(text);
            text = unescapeSpecialChars(text);
            text = text.replace(/~D/g,"$$");
            text = text.replace(/~T/g,"~");

            return text;
        }

        // }}}

    };

    // }}}

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
