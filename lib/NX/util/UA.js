/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.util');

// }}}
// {{{ NX.util.UA

/**
 * @class NX.util.UA
 */
NX.util.UA = {

    // {{{ isMac

    /**
     * @method isMac
     */
    isMac : require('./UA/isMac'),

    // }}}
    // {{{ isWindows

    /**
     * @method isWindows
     */
    isWindows : require('./UA/isWindows'),

    // }}}
    // {{{ isLinux

    /**
     * @method isLinux
     */
    isLinux : require('./UA/isLinux'),

    // }}}
    // {{{ isOpera

    /**
     * @method isOpera
     */
    isOpera : require('./UA/isOpera'),

    // }}}
    // {{{ isChrome

    /**
     * @method isChrome
     */
    isChrome : require('./UA/isChrome'),

    // }}}
    // {{{ isWebkit

    /**
     * @method isWebkit
     */
    isWebkit : require('./UA/isWebkit'),

    // }}}
    // {{{ isSafari

    /**
     * @method isSafari
     */
    isSafari : require('./UA/isSafari'),

    // }}}
    // {{{ isSafari2

    /**
     * @method isSafari2
     */
    isSafari2 : require('./UA/isSafari2'),

    // }}}
    // {{{ isSafari3

    /**
     * @method isSafari3
     */
    isSafari3 : require('./UA/isSafari3'),

    // }}}
    // {{{ isSafari4

    /**
     * @method isSafari4
     */
    isSafari4 : require('./UA/isSafari4'),

    // }}}
    // {{{ isSafari5

    /**
     * @method isSafari5
     */
    isSafari5 : require('./UA/isSafari5'),

    // }}}
    // {{{ isIE

    /**
     * @method isIE
     */
    isIE : require('./UA/isIE'),

    // }}}
    // {{{ isIE7

    /**
     * @method isIE7
     */
    isIE7 : require('./UA/isIE7'),

    // }}}
    // {{{ isIE8

    /**
     * @method isIE8
     */
    isIE8 : require('./UA/isIE8'),

    // }}}
    // {{{ isIE6

    /**
     * @method isIE6
     */
    isIE6 : require('./UA/isIE6'),

    // }}}
    // {{{ isGecko

    /**
     * @method isGecko
     */
    isGecko : require('./UA/isGecko'),

    // }}}
    // {{{ isGecko2

    /**
     * @method isGecko2
     */
    isGecko2 : require('./UA/isGecko2'),

    // }}}
    // {{{ isGecko3

    /**
     * @method isGecko3
     */
    isGecko3 : require('./UA/isGecko3'),

    // }}}
    // {{{ isiPod

    /**
     * @method isiPod
     */
    isiPod : require('./UA/isiPod'),

    // }}}
    // {{{ isiPhone

    /**
     * @method isiPhone
     */
    isiPhone : require('./UA/isiPhone'),

    // }}}
    // {{{ isiPad

    /**
     * @method isiPad
     */
    isiPad : require('./UA/isiPad'),

    // }}}
    // {{{ isXperia

    /**
     * @method isXperia
     */
    isXperia : require('./UA/isXperia'),

    // }}}
    // {{{ isAndroid

    /**
     * @method isAndroid
     */
    isAndroid : require('./UA/isAndroid')

    // }}}



    /*
    *        // OS判定
        $isMac      = $this->_checkUA('/Mac/i')      ? true : false;
        $isWindows  = $this->_checkUA('/Win/i')      ? true : false;
        $isLinux    = $this->_checkUA('/linux/i')    ? true : false;


        // ブラウザ判定
        $isOpera    = $this->_checkUA('/opera/i')    ? true : false;
        $isChrome   = $this->_checkUA('/chrome/i')   ? true : false;
        $isWebKit   = $this->_checkUA('/webkit/i')   ? true : false;
        $isSafari   = !$isChrome && $this->_checkUA('/safari/i')
                      ? true
                      : false;
        $isSafari2  = $isSafari && $this->_checkUA('/applewebkit\/4/i')
                      ? true
                      : false;
        $isSafari3  = $isSafari && $this->_checkUA('/version\/3/i')
                      ? true
                      : false;
        $isSafari4  = $isSafari && $this->_checkUA('/version\/4/i')
                      ? true
                      : false;
        $isIE       = !$isOpera && $this->_checkUA('/msie/i')
                      ? true
                      : false;
        $isIE7      = $isIE && $this->_checkUA('/msie 7/i')
                      ? true
                      : false;
        $isIE8      = $isIE && $this->_checkUA('/msie 8/i')
                      ? true
                      : false;
        $isIE6      = $isIE && !$isIE7 && !$isIE8
                      ? true
                      : false;
        $isGecko    = !$isWebKit && $this->_checkUA('/gecko/i')
                      ? true
                      : false;
        $isGecko2   = $isGecko && $this->_checkUA('/rv:1\.8/i')
                      ? true
                      : false;
        $isGecko3   = $isGecko && $this->_checkUA('/rv:1\.9/i')
                      ? true
                      : false;

        $isiPod = $this->_checkUA('/iPod/i') ? true : false;
        $isiPhone = $this->_checkUA('/iPhone/i') ? true : false;
        $isiPad = $this->_checkUA('/iPad/i') ? true : false;
        $isXperia = $this->_checkUA('/SonyEricsson(SO-01B|X10i)/i') ? true : false;
        $isAndroid = $this->_checkUA('/Android/i') ? true : false;

        $this->smarty->assign('isOpera', $isOpera);
        $this->smarty->assign('isChrome', $isChrome);
        $this->smarty->assign('isWebKit', $isWebKit);
        $this->smarty->assign('isSafari', $isSafari);
        $this->smarty->assign('isSafari2', $isSafari2);
        $this->smarty->assign('isSafari3', $isSafari3);
        $this->smarty->assign('isSafari4', $isSafari4);
        $this->smarty->assign('isIE', $isIE);
        $this->smarty->assign('isIE7', $isIE7);
        $this->smarty->assign('isIE8', $isIE8);
        $this->smarty->assign('isIE6', $isIE6);
        $this->smarty->assign('isGecko', $isGecko);
        $this->smarty->assign('isGecko2', $isGecko2);
        $this->smarty->assign('isGecko3', $isGecko3);
        $this->smarty->assign('isiPod', $isiPod);
        $this->smarty->assign('isiPhone', $isiPhone);
        $this->smarty->assign('isiPad', $isiPad);
        $this->smarty->assign('isXperia', $isXperia);
        $this->smarty->assign('isAndroid', $isAndroid);


        /
    * */

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
