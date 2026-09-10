<?php
/**
 * Header template.
 *
 * @package the-fabrique
 */

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'the-fabrique' ); ?></a>

<header class="tf-header" id="tf-header">
	<div class="tf-container tf-header__inner">
		<div class="tf-brand">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<a class="tf-brand__text" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
			<?php endif; ?>
		</div>

		<button class="tf-menu-toggle" id="tf-menu-toggle" aria-expanded="false" aria-controls="tf-nav" aria-label="<?php esc_attr_e( 'Toggle menu', 'the-fabrique' ); ?>">
			<span></span><span></span><span></span>
		</button>

		<nav class="tf-nav" id="tf-nav" aria-label="<?php esc_attr_e( 'Primary', 'the-fabrique' ); ?>">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'container'      => false,
						'depth'          => 1,
					)
				);
			} else {
				the_fabrique_default_menu();
			}
			?>
		</nav>
	</div>
</header>

<main id="main" class="tf-main">
