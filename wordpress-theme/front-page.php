<?php
/**
 * One-page front page.
 *
 * @package the-fabrique
 */

get_header();

$hero_title    = get_theme_mod( 'the_fabrique_hero_title', __( 'A creative studio for brands in motion', 'the-fabrique' ) );
$hero_text     = get_theme_mod( 'the_fabrique_hero_text', __( 'Branding, design and content production that make ambitious brands impossible to ignore.', 'the-fabrique' ) );
$cta_label     = get_theme_mod( 'the_fabrique_cta_label', __( 'Request a quote', 'the-fabrique' ) );
$cta_url       = get_theme_mod( 'the_fabrique_cta_url', '#contact' );
$contact_email = get_theme_mod( 'the_fabrique_contact_email', get_option( 'admin_email' ) );
$contact_phone = get_theme_mod( 'the_fabrique_contact_phone', '' );

$sections = array(
	'work'      => array(
		'eyebrow' => __( 'Selected work', 'the-fabrique' ),
		'title'   => get_theme_mod( 'the_fabrique_work_title', __( 'Work that moves people', 'the-fabrique' ) ),
		'text'    => get_theme_mod( 'the_fabrique_work_text', __( 'Campaigns, brand systems and films built for audiences across the continent.', 'the-fabrique' ) ),
	),
	'services'  => array(
		'eyebrow' => __( 'Services', 'the-fabrique' ),
		'title'   => get_theme_mod( 'the_fabrique_services_title', __( 'What we do', 'the-fabrique' ) ),
		'text'    => get_theme_mod( 'the_fabrique_services_text', __( 'From strategy to the final frame, we handle every stage in-house.', 'the-fabrique' ) ),
	),
	'solutions' => array(
		'eyebrow' => __( 'Solutions', 'the-fabrique' ),
		'title'   => get_theme_mod( 'the_fabrique_solutions_title', __( 'Built around your goals', 'the-fabrique' ) ),
		'text'    => get_theme_mod( 'the_fabrique_solutions_text', __( 'Flexible engagements, from a single launch to a full year of content.', 'the-fabrique' ) ),
	),
	'about'     => array(
		'eyebrow' => __( 'About', 'the-fabrique' ),
		'title'   => get_theme_mod( 'the_fabrique_about_title', __( 'A small team with a long reach', 'the-fabrique' ) ),
		'text'    => get_theme_mod( 'the_fabrique_about_text', __( 'Designers, writers and directors working as one crew on every project.', 'the-fabrique' ) ),
	),
);

$services = array(
	array( __( 'Branding', 'the-fabrique' ), __( 'Identity systems, naming and brand guidelines.', 'the-fabrique' ) ),
	array( __( 'Design', 'the-fabrique' ), __( 'Static and motion design for every channel.', 'the-fabrique' ) ),
	array( __( 'Production', 'the-fabrique' ), __( 'Film, photography and post-production.', 'the-fabrique' ) ),
	array( __( 'Copywriting', 'the-fabrique' ), __( 'Concepts, scripts and campaign lines.', 'the-fabrique' ) ),
);
?>

<section class="tf-section tf-hero" id="home">
	<div class="tf-container">
		<h1 class="tf-reveal"><?php echo wp_kses_post( the_fabrique_split_words( $hero_title ) ); ?></h1>
		<p class="tf-reveal"><?php echo esc_html( $hero_text ); ?></p>
		<?php if ( $cta_label ) : ?>
			<a class="tf-button tf-reveal" href="<?php echo esc_url( $cta_url ); ?>"><?php echo esc_html( $cta_label ); ?> <span aria-hidden="true">&rarr;</span></a>
		<?php endif; ?>
	</div>
</section>

<?php foreach ( $sections as $id => $section ) : ?>
	<section class="tf-section" id="<?php echo esc_attr( $id ); ?>">
		<div class="tf-container">
			<p class="tf-eyebrow tf-reveal"><?php echo esc_html( $section['eyebrow'] ); ?></p>
			<h2 class="tf-reveal"><?php echo wp_kses_post( the_fabrique_split_words( $section['title'] ) ); ?></h2>
			<p class="tf-reveal"><?php echo esc_html( $section['text'] ); ?></p>

			<?php if ( 'services' === $id ) : ?>
				<div class="tf-grid">
					<?php foreach ( $services as $service ) : ?>
						<article class="tf-card tf-reveal">
							<h3><?php echo esc_html( $service[0] ); ?></h3>
							<p><?php echo esc_html( $service[1] ); ?></p>
						</article>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<?php
			if ( 'work' === $id ) :
				$work = new WP_Query(
					array(
						'posts_per_page'      => 6,
						'ignore_sticky_posts' => true,
					)
				);
				if ( $work->have_posts() ) :
					?>
					<div class="tf-grid">
						<?php
						while ( $work->have_posts() ) :
							$work->the_post();
							?>
							<article class="tf-card tf-reveal">
								<?php if ( has_post_thumbnail() ) : ?>
									<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium_large' ); ?></a>
								<?php endif; ?>
								<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
								<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 20 ) ); ?></p>
							</article>
						<?php endwhile; ?>
					</div>
					<?php
				endif;
				wp_reset_postdata();
			endif;
			?>
		</div>
	</section>
<?php endforeach; ?>

<section class="tf-section" id="contact">
	<div class="tf-container">
		<p class="tf-eyebrow tf-reveal"><?php esc_html_e( 'Contact', 'the-fabrique' ); ?></p>
		<h2 class="tf-reveal"><?php echo wp_kses_post( the_fabrique_split_words( get_theme_mod( 'the_fabrique_contact_title', __( 'Let us build something together', 'the-fabrique' ) ) ) ); ?></h2>
		<p class="tf-reveal"><?php echo esc_html( get_theme_mod( 'the_fabrique_contact_text', __( 'Tell us about your project and we will get back to you within two working days.', 'the-fabrique' ) ) ); ?></p>

		<div class="tf-contact__links tf-reveal">
			<?php if ( $contact_email ) : ?>
				<a href="mailto:<?php echo esc_attr( sanitize_email( $contact_email ) ); ?>"><?php echo esc_html( $contact_email ); ?></a>
			<?php endif; ?>
			<?php if ( $contact_phone ) : ?>
				<a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', $contact_phone ) ); ?>"><?php echo esc_html( $contact_phone ); ?></a>
			<?php endif; ?>
		</div>
	</div>
</section>

<?php
get_footer();
