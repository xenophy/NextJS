
module.exports = {

    execute : function() {

        this.set('data', {
            string: 'string',
            html: '<h1>Header 1</h1>',
            text: [
                'line1',
                'line2',
                'line3'
            ].join("\n"),
            number: 3000,
            bool: true,
            fruit: [
                { name: 'apple', price: 1200 },
                { name: 'orange', price: 1100 },
                { name: 'peach', price: 2510 }
            ]
        });

        this.end();
    }

};
