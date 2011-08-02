/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.prototype.initConfig

module.exports = function(config) {

    if (!this.$configInited) {
        this.config = NX.Object.merge({}, this.config || {}, config || {});
        this.applyConfig(this.config);
        this.$configInited = true;
    }

    return this;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
