<?php
/**
 * Main template — blog list fallback and general archive/single output.
 *
 * @package the-fabrique
 */

get_header();
?>

<section class="tf-section" id="posts">
	<div class="tf-container">
		<?php if ( have_posts() ) : ?>

			<?php if ( is_home() && ! is_front_page() ) : ?>
				<h1 class="tf-reveal"><?php echo wp_kses_post( the_fabrique_split_words( get_the_title( get_option( 'page_for_posts' ) ) ) ); ?></h1>
			<?php elseif ( is_archive() ) : ?>
				<h1 class="tf-reveal"><?php echo wp_kses_post( the_fabrique_split_words( wp_strip_all_tags( get_the_archive_title() ) ) ); ?></h1>
			<?php elseif ( is_search() ) : ?>
				<h1 class="tf-reveal"><?php printf( esc_html__( 'Search results for %s', 'the-fabrique' ), esc_html( get_search_query() ) ); ?></h1>
			<?php endif; ?>

			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<article id="post-<?php the_ID(); ?>" <?php post_class( 'tf-post tf-reveal' ); ?>>
					<?php if ( has_post_thumbnail() && ! is_singular() ) : ?>
						<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'large' ); ?></a>
					<?php endif; ?>

					<?php if ( is_singular() ) : ?>
						<h1><?php the_title(); ?></h1>
						<div class="tf-post__content"><?php the_content(); ?></div>
					<?php else : ?>
						<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 32 ) ); ?></p>
						<a class="tf-button" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Read more', 'the-fabrique' ); ?></a>
					<?php endif; ?>
				</article>
				<?php
				if ( is_singular() && ( comments_open() || get_comments_number() ) ) {
					comments_template();
				}
			endwhile;
			?>

			<div class="tf-pagination">
				<?php
				the_posts_pagination(
					array(
						'prev_text' => esc_html__( 'Previous', 'the-fabrique' ),
						'next_text' => esc_html__( 'Next', 'the-fabrique' ),
					)
				);
				?>
			</div>

		<?php else : ?>
			<h1 class="tf-reveal"><?php esc_html_e( 'Nothing found', 'the-fabrique' ); ?></h1>
			<p class="tf-reveal"><?php esc_html_e( 'No content matched your request. Try another search.', 'the-fabrique' ); ?></p>
			<?php get_search_form(); ?>
		<?php endif; ?>
	</div>
</section>

<?php
get_footer();
