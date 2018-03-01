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
});
