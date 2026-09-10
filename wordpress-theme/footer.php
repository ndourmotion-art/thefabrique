<?php
/**
 * Footer template.
 *
 * @package the-fabrique
 */

?>
</main>

<footer class="tf-footer">
	<div class="tf-container">
		<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
			<div class="tf-footer__widgets"><?php dynamic_sidebar( 'footer-1' ); ?></div>
		<?php endif; ?>

		<div class="tf-footer__inner">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<span class="tf-brand__text"><?php bloginfo( 'name' ); ?></span>
			<?php endif; ?>

			<small>
				<?php
				printf(
					/* translators: 1: year, 2: site name */
					esc_html__( '© %1$s %2$s. All rights reserved.', 'the-fabrique' ),
					esc_html( gmdate( 'Y' ) ),
					esc_html( get_bloginfo( 'name' ) )
				);
				?>
			</small>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
