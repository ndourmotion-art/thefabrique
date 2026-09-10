/* Live preview bindings for the Customizer. */
(function ($) {
  'use strict';

  wp.customize('blogname', function (value) {
    value.bind(function (to) {
      $('.tf-brand__text').text(to);
    });
  });

  wp.customize('blogdescription', function (value) {
    value.bind(function (to) {
      $('.tf-site-description').text(to);
    });
  });
})(jQuery);
