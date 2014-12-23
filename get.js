var page = require('webpage').create();
 
page.open('http://manezhka.com/', function(status) {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        console.log(page.evaluate(function() {
            return $('a')
                .map(function() {
                    return this.href;})
                .get()
                .join();
        }));
        phantom.exit()
    });
});
