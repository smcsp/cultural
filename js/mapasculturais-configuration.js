(function($){
    var MC = {};
    MC.apiURL = 'http://localhost/api';

    MC.createMultiselect = function(selector, url){
        $.getJSON(url, function(data){
             $.each(data, function(key, value){
                var option = $('<option value="' + value + '">' + value + '</option>');
                $(selector).append(option);
             });
             $(selector).attr('multiple', true);
             $(selector).multiselect();
        });
    };

    $(function(){
        MC.createMultiselect('#linguagens', MC.apiURL + '/term/list/linguagem');
    });
})(jQuery);