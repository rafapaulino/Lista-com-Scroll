(function ( $ ) {
 
    $.fn.dropdownScrollable = function() {

        var $dropdown = this;
        var $search = $dropdown.find('input.form-control');

        //search dropdown
        $search.on('keyup', function(){
            var $this = $(this);
            var value = $this.val();
            value = value.toLowerCase();
            var parent = $this.parent();
            var elem = parent.find('li.dropdown-item');

            elem.each(function( index ) {
                var item = $(this);
                var a = item.find('a').text();
                if (a.toLowerCase().indexOf(value) > -1) {
                    item.removeClass('d-none');
                } else {
                    item.addClass('d-none');
                }
            });

        });

        //parte de acessibilidade
        $dropdown.bind('keydown', function (event) {
            var $element = $(this);
            $element.addClass("show");
            var $menu = $element.find('.dropdown-menu');
            $menu.addClass('show');

            switch(event.keyCode) {
                case 13: // Enter key
                case 38: // Up arrow
                case 27: // Escape key
                $element.removeClass("show");
                $menu.removeClass('show');
                $element.blur();
                break;
            }
        });

        //parte do botao que faz aparecer e desaparecer a lista
        $('.dropdown-toggle').on('click', function(event){
            event.preventDefault();
            var $this = $(this);
            var $menu = $this.next('.dropdown-menu');

            $menu.toggleClass('show');
        });

        //pega o valor do elemento selecionado e coloca no botão para simular um campo select selected do html
        if( $('.dropdown-item.selected a').length > 0 ) {
            var $selected = $('.dropdown-item.selected a').text();
            $('.dropdown-toggle > span').text($selected);
        }

        return this;
 
    };
 
}( jQuery ));