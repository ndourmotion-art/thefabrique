<?php
/**
 * The FABRIQUE theme functions.
 *
 * @package the-fabrique
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'THE_FABRIQUE_VERSION', '1.0.0' );

/**
 * Theme supports and menus.
 */
function the_fabrique_setup() {
	load_theme_textdomain( 'the-fabrique', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script', 'navigation-widgets' ) );
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 294,
			'width'       => 736,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	register_nav_menus(
		array(
			'primary' => __( 'Primary one-page menu', 'the-fabrique' ),
		)
	);
}
add_action( 'after_setup_theme', 'the_fabrique_setup' );

/**
 * Content width.
 */
function the_fabrique_content_width() {
	$GLOBALS['content_width'] = 1400;
}
add_action( 'after_setup_theme', 'the_fabrique_content_width', 0 );

/**
 * Enqueue styles and scripts.
 */
function the_fabrique_assets() {
	wp_enqueue_style(
		'the-fabrique-fonts',
		'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;800&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'the-fabrique-style',
		get_stylesheet_uri(),
		array( 'the-fabrique-fonts' ),
		THE_FABRIQUE_VERSION
	);

	wp_enqueue_script(
		'the-fabrique-main',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		THE_FABRIQUE_VERSION,
		true
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'the_fabrique_assets' );

/**
 * Inline accent color from the Customizer.
 */
function the_fabrique_custom_colors() {
	$accent  = get_theme_mod( 'the_fabrique_accent_color', '#08c165' );
	$primary = get_theme_mod( 'the_fabrique_primary_color', '#1f3deb' );

	$css = sprintf( ':root{--tf-accent:%1$s;--tf-primary:%2$s;}', esc_attr( $accent ), esc_attr( $primary ) );
	wp_add_inline_style( 'the-fabrique-style', $css );
}
add_action( 'wp_enqueue_scripts', 'the_fabrique_custom_colors', 20 );

/**
 * Widget area in the footer.
 */
function the_fabrique_widgets_init() {
	register_sidebar(
		array(
			'name'          => __( 'Footer', 'the-fabrique' ),
			'id'            => 'footer-1',
			'description'   => __( 'Widgets shown in the site footer.', 'the-fabrique' ),
			'before_widget' => '<div id="%1$s" class="tf-widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h3 class="tf-widget__title">',
			'after_title'   => '</h3>',
		)
	);
}
add_action( 'widgets_init', 'the_fabrique_widgets_init' );

/**
 * Split a heading into animated words.
 *
 * @param string $text Heading text.
 * @return string Escaped markup.
 */
function the_fabrique_split_words( $text ) {
	$words  = preg_split( '/\s+/', trim( wp_strip_all_tags( $text ) ) );
	$output = '';

	foreach ( $words as $index => $word ) {
		if ( '' === $word ) {
			continue;
		}
		$output .= sprintf(
			'<span class="tf-word" style="transition-delay:%1$dms"><span style="transition-delay:%1$dms">%2$s</span></span> ',
			$index * 70,
			esc_html( $word )
		);
	}

	return trim( $output );
}

/**
 * Fallback menu when no menu is assigned.
 */
function the_fabrique_default_menu() {
	$links = array(
		'#work'      => __( 'Work', 'the-fabrique' ),
		'#services'  => __( 'Services', 'the-fabrique' ),
		'#solutions' => __( 'Solutions', 'the-fabrique' ),
		'#about'     => __( 'About', 'the-fabrique' ),
		'#contact'   => __( 'Contact', 'the-fabrique' ),
	);

	echo '<ul>';
	foreach ( $links as $href => $label ) {
		printf(
			'<li><a href="%1$s"><span><span>%2$s</span><span aria-hidden="true">%2$s</span></span></a></li>',
			esc_url( $href ),
			esc_html( $label )
		);
	}
	echo '</ul>';
}

require_once get_template_directory() . '/inc/customizer.php';
