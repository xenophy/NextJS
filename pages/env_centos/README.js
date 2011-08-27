Ext.data.JsonP.env_centos({
    "guide": [
        '<h1>Next JS 環境構築ガイド</h1>',
        '<h2>開発環境構築 - CentOS(The Community ENTerprise Operating System)</h2>',
        '<p>',
        'まず、CentOSをインストールする必要があります。',
        'ここでは、CentOS 6を使ってインストール手順を紹介します。',
        'CentOS自体は、<a href="http://www.centos.org/modules/tinycontent/index.php?id=32">ミラーリスト一覧</a>から選択してダウンロードしてください。',
        '</p>',
        '<h3>インストール</h3>',
        '<p>',
        'ディスクを挿入して、サーバーを起動すると、次のような画面が表示されます。',
        '</p>',

        '<p><strong>Step.1</strong></p>',
        '<img src="pages/env_centos/images/step1.jpg" />',
        '<p><em>Install or upgrade an existing system</em>を選択して進みます。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.2</strong></p>',
        '<img src="pages/env_centos/images/step2.jpg" />',
        '<p>インストールディスクのチェックを行う場合は、<em>OK</em>を選択します。通常は必要ないで<em>Skip</em>を選択し、次に進みます。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.3</strong></p>',
        '<img src="pages/env_centos/images/step3.jpg" />',
        '<p>インストールを開始するため、<em>Next</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.4</strong></p>',
        '<img src="pages/env_centos/images/step4.jpg" />',
        '<p>インストール中の言語を選択します。ここでは、<em>Japanese(日本語)</em>を選択し、<em>Next</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.5</strong></p>',
        '<img src="pages/env_centos/images/step5.jpg" />',
        '<p>キーボード種別を選択します。ここでは、<em>日本語</em>を選択し、<em>次</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.6</strong></p>',
        '<img src="pages/env_centos/images/step6.jpg" />',
        '<p>ストレージデバイスを選択します。ここでは、<em>基本ストレージデバイス</em>を選択し、<em>次</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.7</strong></p>',
        '<img src="pages/env_centos/images/step7.jpg" />',
        '<p>ディスクに対して初めてインストールを行う場合、次のようなメッセージが表示されます。</p>',
        '<p>必要に応じて選択してください。ここでは、<em>全てを再初期化</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.8</strong></p>',
        '<img src="pages/env_centos/images/step8.jpg" />',
        '<p>次に、ネットワーク設定を行います。インストール後にネットワークの設定を行ってもよいのですが、可能であればインストール時点で設定しておくと便利です。</p>',
        '<p>ホスト名を入力するフォームの下に<em>ネットワークの設定</em>というボタンがありますので、選択します。</p>',

        '<img src="pages/env_centos/images/step8-2.jpg" />',
        '<p>選択すると、上記のようなダイアログが表示されます。</p>',
        '<p><em>System eth0</em>を選択して<em>編集...</em>を選択してください。</p>',
        '<p>ただし、サーバーに設置されているNICの構成により表示は変わります。上記の場合、1つのNICしか存在しないサーバーを例にしていますので、環境に応じて読み替えてください。</p>',

        '<img src="pages/env_centos/images/step8-3.jpg" />',
        '<p>選択すると、上記のようなダイアログが表示されます。',
        'まず、サーバー起動時にNICが接続されるように<em>自動接続する</em>にチェックをいれます。',
        'そして、<em>IPv4のセッティング</em>タブを選択して、方式を<em>手動</em>に設定します。</p>',
        '<p>次に、アドレスの<em>追加</em>ボタンを選択して、IPアドレスの設定を行います。',
        'ここでは、例としてサーバーのアドレスを<em>192.168.1.20</em>と設定しました。',
        'そして、DNSサーバーのIPアドレスを設定します。プロバイダから提供されているDNSや、GoogleのDNS(8.8.8.8)を利用します。',
        'お使いの環境に合わせて設定してください。',
        '入力が完了したら<em>適用</em>ボタンを選択します。</p>',
        '<p>先ほどの<em>ネットワーク接続</em>ダイアログに戻りますので、<em>閉じる</em>を選択し、<em>次</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.9</strong></p>',
        '<img src="pages/env_centos/images/step9.jpg" />',
        '<p>タイムゾーンの設定を行います。通常初期設定のままで問題ありませんので<em>次</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.10</strong></p>',
        '<img src="pages/env_centos/images/step10.jpg" />',
        '<p>rootユーザーのパスワードを設定します。2回入力して、<em>次</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.11</strong></p>',
        '<img src="pages/env_centos/images/step11.jpg" />',
        '<p>インストールタイプを選択します。今回は新規でインストールを行うため、デフォルトの<em>既存の Linux システムを入れ替える</em>選択したまま、<em>次</em>を選択します。',
        '既存の Linux システムが存在して、全てクリアしてインストールを行う場合は、<em>すべての領域を使用する</em>を選択してください。</p>',

        '<img src="pages/env_centos/images/step11-2.jpg" />',
        '<p>上記のようなダイアログが表示されます。',
        '<em>変更をディスクに書き込む(<u>W</u>)</em>を選択します。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.12</strong></p>',
        '<img src="pages/env_centos/images/step12.jpg" />',
        '<p>インストール構成を選択します。デフォルトでは、Minimal（最小構成）が選択されています。',
        'ここでは、このままMinimalでインストールを行います。<em>次</em>を選択します。',
        'Minimalでインストールすると、実は何もできないくらいいろいろなツールが入っていません。',
        '例えば、wgetさえもできないのです。必要なツールは後ほどyumを使ってインストールします。</p>',
        '<br /><br /><br />',

        '<p><strong>Step.13</strong></p>',
        '<img src="pages/env_centos/images/step13.jpg" />',
        '<p>しばらく待っているとインストールが完了し、上記の画面が表示されます。',
        'インストールディスクを抜き出して<em>再起動</em>を選択し再起動を行います。</p>',
        '<br /><br /><br />',

        '<h3>初期設定</h3>',
        '<p>',
        '無事インストールが完了したところで、これからはSSHで接続をして初期設定を行っていきます。',
        'ターミナルから(Windowsの場合PuttyやTeraTermなど)、SSHで接続を行います。',
        '</p>',
        '<code>',
        'ssh root@192.168.1.20',
        '</code>',
        '<p>',
        'インストール時に設定したパスワードでログインを行います。',
        '</p>',

        '<h4>パッケージのアップデート</h4>',
        '<p>',
        'まず、インストールされているパッケージを最新版にアップデートします。',
        'インターネットに接続されている必要がありますので、注意してください。',
        '</p>',
        '<code>',
        'yum -y update;',
        '</code>',

        '<h4>root宛メールの転送設定</h4>',

        '<h4>SELinuxの無効化</h4>',

        '<h4>ファイアウォール停止</h4>',

        '<h4>必要パッケージの追加</h4>',
        '<code>',
        'yum -y mainx wget perl git gcc gcc-c++ openssl openssl-devel zlib-devel;',
        '</code>',

        '<h4>NTPサーバーインストール</h4>',

        '<h4>VMWare Toolsのインストール(VMWare上の場合)</h4>',


        '<h3>nave/node/npmのインストール</h3>',

        '<h4>nave経由でnode.jsのインストール</h4>',

        '<h4>npmのインストール</h4>',
        '<code>',
        'curl http://npmjs.org/install.sh | sh',
        '</code>',

        '<h3>Next JSのインストール</h3>',
        '<code>',
        'npm install nx;',
        '</code>',


    ].join("")
});
