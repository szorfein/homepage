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
    $.getJSON('rss-feeds.json', function(datas) {
        $.each(datas, function(entryIndex, rssfeed) {
            var yql = rssfeed.url;
            var html = ''
            var rss = ''
            $.getJSON(yql, function(res) {
                data = res.query.results.item
                html += '<div>'
                html += '<h4>'+rssfeed.name+'</h4>';
                html += '<p>'
                $.each(data, function(entryIndex, entry) {
                    html += '<a href="'+entry.link+'">'+entry.title + '</a><br />';
                });
                html += '</p>'
                html += '</div>'
                $('#rss-feeds').append(html)
            }, "jsonp");
            $('#rss-feeds').html(html)
        });
    });
});
