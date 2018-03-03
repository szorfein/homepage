$(document).ready(function() {
    /* Load social-link.json into #social-link div */
    $.getJSON('social-link.json', function(data) {
        console.log(data);
        var html = '';
        html += '<div>';
        $.each(data, function(entryIndex, entry) {
            html += '<a href="'+entry.url+'">';
            if (entry.icon) {
                html += '<i class="ion '+entry.icon+'"></i>';
            }
            html += '</a>';
        });
        html += '</div>';
        $('#social-link').html(html)
    });
    /* focus on #search at start */
    $('#search').focus();
    /* Github: https://developer.github.com/v3/#json-p-callbacks */
    /*
    $.ajaxSetup({
        url: 'https://api.github.com/users/szorfein',
        type: 'GET',
        dataType: 'jsonp'
    });

    $.ajax({
        success: function(res) {
            console.log('github request success')
            var html = ''
            html += '<div>';
            html += '<img src="'+res.data.avatar_url+'" />';
            html += '<p> Repos:'+res.data.public_repos+'</p>';
            html += '<p> Followers:'+res.data.followers+'</p>';
            html += '</div>';
            $('#github').html(html);
        },
        error: function (xhr, status) {
            console.log("error");
        }
    });
    */
    /* Rss */
    // src = https://www.raymondcamden.com/2015/12/08/parsing-rss-feeds-in-javascript-options/
    // Yahoo api : https://developer.yahoo.com/yql/?dataTypeRadios=JSON
    var yql = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%20from%20rss%20where%20url%3D%22http%3A%2F%2Fthreatpost.com%2Ffeed%2F%22%20limit%203&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yql, function(res) {
        data = res.query.results.item
        html = '<p>'
        console.log(res);
        $.each(data, function(entryIndex, entry) {
            html += '<a href="'+entry.link+'">'+entry.title + '</a><br />';
        });
        html += '</p>'
        $('#rss-feeds').html(html)
    }, "jsonp");
});
