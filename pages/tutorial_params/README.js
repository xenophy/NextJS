Ext.data.JsonP.tutorial_params({
    "guide": [

        '<h1>パラメータの取得と設定</h1>',
        '<p>',
        'サーバーの起動から、アクションの動作について理解してきました。',
        'ここでは、アクション内でリクエストパラメータの取得、設定について学んでいきます。',
        '</p>',

        '<h2>GET値の取得</h2>',
        '<p>',
        'GET値を取得するには、次のように<em>this.get</em>オブジェクトにアクセスします。',
        '</p>',

        '<pre>',
        'module.exports = [{' + "\n",
        '    execute: <span style="color:#000099;">function</span>() {' + "\n",
        '        <span style="color:#000099;">this</span>.<span style="color:#000099;">set</span>(<span style="color:#009900;">\'foo\'</span>, <span style="color:#000099;">this</span>.<span style="color:#000099;">get</span>[<span style="color:#009900;">\'bar\'</span>]);' + "\n",
        '        <span style="color:#000099;">this</span>.end();' + "\n",
        '    }' + "\n",
        '}];',
        '</pre>',

        '<p>',
        'ブラウザから次のようにアクセスすると、<em>bar</em>の値が取得できます。',
        '</p>',

        '<pre>',
        'http://localhost:3000/?bar=hoge',
        '</pre>',

        '<h2>POST値の取得</h2>',
        '<p>',
        'GETの場合は、<em>this.get</em>でしたが、POST値の場合は、<em>this.post</em>になります。',
        '</p>',

        '<h2>this.requestオブジェクト</h2>',
        '<p>',
        'アクションには、<em>this.req</em>と<em>this.request</em>の２種類が存在ますが、全くの別物です。',
        'this.reqは、アクションのデータ共有で使用したthis.resの対になるオブジェクトで、',
        'nodeのhttp/httpsクラスがコールバックの引数で渡す、リクエストされた情報が格納されているクラスオブジェクトです。',
        'それに対して、this.requestは、this.getとthis.postをマージしたオブジェクトです。',
        '同一のキーが存在する場合は、this.postの値で上書きされます。',
        'ちょうど、PHPでいう$_GET/$_POST/$_REQUESTの関係です。',
        '</p>',


        '<address>Copyright &copy; 2006 - 2011 <a href="http://www.xenophy.com/">Xenophy.CO.,LTD</a> All rights Reserved.</address>',

        ].join("")
    });
