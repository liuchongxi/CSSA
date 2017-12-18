//FreshmenManual
$('.sidebar-menu').localScroll();
(function(){
    var navLinks = $('.sidebar ol li'),
        navH = $('.sidebar').height(),
        section= $('section'),
        documentEl = $(document);
    documentEl.on('scroll', function() {
        var currentScrollPos = documentEl.scrollTop();
        section.each(function(){
            var self =$(this);
            if (self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ){
                var target = 'a[href="#' + self.attr('id') + '"] li';
                navLinks.removeClass('active');
                $(target).addClass('active');
            }
        });
    })
})();
