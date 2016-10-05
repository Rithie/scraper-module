var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

//where to search
var host    = 'http://dl.acm.org/';
var route   = 'tab_references.cfm?id='
var id      = '1646043'
var uri     = host + route + id;

request(uri, function (error, response, html) {

  if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);   // carrega a pagina

        var url, title;

        var json = []

        //varre a pagina filtrando as referencias do artigo
        $('tr').each(function(i, element){
             var data = $(this);

             // pega o titulo da lista de artigos
             title = data.children().children().children().text().replace(/[\t\n\r]+/g,' ');

             // pega a url do titulo acima
             url   = data.children().children().children().attr('href');

            // adiciona em um objeto
            var metadata = {
              title: title,
              url: host+url,
            }
            // Push meta-data into parsedResults array
            json.push(metadata)

      });
  }
  console.log(json);
  fs.writeFile("../references/" + id + '.json', JSON.stringify(json, null, 4), function(err){
  console.log('File successfully written! - Check your project directory for the fileid.json file');
  })
});
