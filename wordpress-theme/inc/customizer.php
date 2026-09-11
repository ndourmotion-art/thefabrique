<?php
/**
 * Customizer settings for The FABRIQUE.
 *
 * @package the-fabrique
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register panels, sections, settings and controls.
 *
 * @param WP_Customize_Manager $wp_customize Customizer instance.
 */
function the_fabrique_customize_register( $wp_customize ) {

	$wp_customize->get_setting( 'blogname' )->transport        = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

	$wp_customize->add_panel(
		'the_fabrique_panel',
		array(
			'title'    => __( 'One-page content', 'the-fabrique' ),
			'priority' => 20,
		)
	);

	/**
	 * Helper to add a text/textarea control.
	 *
	 * @param WP_Customize_Manager $wp_customize Manager.
	 * @param string               $section      Section id.
	 * @param string               $id           Setting id.
	 * @param string               $label        Label.
	 * @param string               $default      Default value.
	 * @param string               $type         Control type.
	 */
	$add_text = function ( $wp_customize, $section, $id, $label, $default, $type = 'text' ) {
		$wp_customize->add_setting(
			$id,
			array(
				'default'           => $default,
				'sanitize_callback' => 'textarea' === $type ? 'sanitize_textarea_field' : 'sanitize_text_field',
				'transport'         => 'refresh',
			)
		);
		$wp_customize->add_control(
			$id,
			array(
				'label'   => $label,
				'section' => $section,
				'type'    => $type,
			)
		);
	};

	/* ---------- Hero ---------- */
	$wp_customize->add_section(
		'the_fabrique_hero',
		array(
			'title' => __( 'Hero', 'the-fabrique' ),
			'panel' => 'the_fabrique_panel',
		)
	);
	$add_text( $wp_customize, 'the_fabrique_hero', 'the_fabrique_hero_title', __( 'Headline', 'the-fabrique' ), __( 'A creative studio for brands in motion', 'the-fabrique' ) );
	$add_text( $wp_customize, 'the_fabrique_hero', 'the_fabrique_hero_text', __( 'Intro text', 'the-fabrique' ), __( 'Branding, design and content production that make ambitious brands impossible to ignore.', 'the-fabrique' ), 'textarea' );
	$add_text( $wp_customize, 'the_fabrique_hero', 'the_fabrique_cta_label', __( 'Button label', 'the-fabrique' ), __( 'Request a quote', 'the-fabrique' ) );

	$wp_customize->add_setting(
		'the_fabrique_cta_url',
		array(
			'default'           => '#contact',
			'sanitize_callback' => 'the_fabrique_sanitize_link',
		)
	);
	$wp_customize->add_control(
		'the_fabrique_cta_url',
		array(
			'label'   => __( 'Button link', 'the-fabrique' ),
			'section' => 'the_fabrique_hero',
			'type'    => 'text',
		)
	);

	/* ---------- Sections ---------- */
	$sections = array(
		'work'      => array( __( 'Work section', 'the-fabrique' ), __( 'Work that moves people', 'the-fabrique' ), __( 'Campaigns, brand systems and films built for audiences across the continent.', 'the-fabrique' ) ),
		'services'  => array( __( 'Services section', 'the-fabrique' ), __( 'What we do', 'the-fabrique' ), __( 'From strategy to the final frame, we handle every stage in-house.', 'the-fabrique' ) ),
		'solutions' => array( __( 'Solutions section', 'the-fabrique' ), __( 'Built around your goals', 'the-fabrique' ), __( 'Flexible engagements, from a single launch to a full year of content.', 'the-fabrique' ) ),
		'about'     => array( __( 'About section', 'the-fabrique' ), __( 'A small team with a long reach', 'the-fabrique' ), __( 'Designers, writers and directors working as one crew on every project.', 'the-fabrique' ) ),
	);

	foreach ( $sections as $key => $data ) {
		$section_id = 'the_fabrique_' . $key;
		$wp_customize->add_section(
			$section_id,
			array(
				'title' => $data[0],
				'panel' => 'the_fabrique_panel',
			)
		);
		$add_text( $wp_customize, $section_id, 'the_fabrique_' . $key . '_title', __( 'Heading', 'the-fabrique' ), $data[1] );
		$add_text( $wp_customize, $section_id, 'the_fabrique_' . $key . '_text', __( 'Text', 'the-fabrique' ), $data[2], 'textarea' );
	}

	/* ---------- Contact ---------- */
	$wp_customize->add_section(
		'the_fabrique_contact',
		array(
			'title' => __( 'Contact section', 'the-fabrique' ),
			'panel' => 'the_fabrique_panel',
		)
	);
	$add_text( $wp_customize, 'the_fabrique_contact', 'the_fabrique_contact_title', __( 'Heading', 'the-fabrique' ), __( 'Let us build something together', 'the-fabrique' ) );
	$add_text( $wp_customize, 'the_fabrique_contact', 'the_fabrique_contact_text', __( 'Text', 'the-fabrique' ), __( 'Tell us about your project and we will get back to you within two working days.', 'the-fabrique' ), 'textarea' );
	$add_text( $wp_customize, 'the_fabrique_contact', 'the_fabrique_contact_phone', __( 'Phone number', 'the-fabrique' ), '' );

	$wp_customize->add_setting(
		'the_fabrique_contact_email',
		array(
			'default'           => get_option( 'admin_email' ),
			'sanitize_callback' => 'sanitize_email',
		)
	);
	$wp_customize->add_control(
		'the_fabrique_contact_email',
		array(
			'label'   => __( 'Email address', 'the-fabrique' ),
			'section' => 'the_fabrique_contact',
			'type'    => 'email',
		)
	);

	/* ---------- Colors ---------- */
	$wp_customize->add_setting(
		'the_fabrique_accent_color',
		array(
			'default'           => '#08c165',
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'the_fabrique_accent_color',
			array(
				'label'   => __( 'Accent color', 'the-fabrique' ),
				'section' => 'colors',
			)
		)
	);

	$wp_customize->add_setting(
		'the_fabrique_primary_color',
		array(
			'default'           => '#1f3deb',
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'the_fabrique_primary_color',
			array(
				'label'   => __( 'Primary color', 'the-fabrique' ),
				'section' => 'colors',
			)
		)
	);
}
add_action( 'customize_register', 'the_fabrique_customize_register' );

/**
 * Allow both URLs and in-page anchors.
 *
 * @param string $value Raw value.
 * @return string
 */
function the_fabrique_sanitize_link( $value ) {
	$value = trim( (string) $value );

	if ( 0 === strpos( $value, '#' ) ) {
		return '#' . sanitize_title( substr( $value, 1 ) );
	}

	return esc_url_raw( $value );
}

/**
 * Live preview script for the site title.
 */
function the_fabrique_customize_preview_js() {
	wp_enqueue_script(
		'the-fabrique-customizer',
		get_template_directory_uri() . '/assets/js/customizer.js',
		array( 'jquery', 'customize-preview' ),
		THE_FABRIQUE_VERSION,
		true
	);
}
add_action( 'customize_preview_init', 'the_fabrique_customize_preview_js' );
