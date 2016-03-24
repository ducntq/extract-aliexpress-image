// ==UserScript==
// @name         Extract Aliexpress image
// @namespace    http://doiqua.co/
// @version      1.0
// @description  Extract product's images, and put into product's body
// @author       Duc Nguyen <ducntq@gmail.com>
// @match        http://www.aliexpress.com/store/product/*/*.html
// @grant        none
// @require      https://code.jquery.com/jquery-2.2.2.min.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function() {
    var $productDesc = $('#product-desc');
    
    var $uiBox = $('<div />').addClass('ui-box ui-box-normal product-images');
    $uiBox.prependTo($productDesc);
    
    $('<h2 />').addClass('ui-box-title').text('Product Images').appendTo($uiBox);
    
    var $body = $('<div />').addClass('ui-box-body').appendTo($uiBox);
    
    $('.image-nav img').each(function() {
        var $this = $(this),
            src = $this.attr('src');
        
        src = src.replace('_50x50.jpg', '');
        
        $('<img />').attr('src', src).appendTo($body);
    });
})(jQuery);
