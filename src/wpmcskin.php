<?php

    /*
    Plugin Name: MC Skin Viewer
    Plugin URI: https://github.com/Seblor/wp-mc-skin-viewer
    description: A Minecraft skin viewer for Wordpress
    Version: 1.1.1
    Author: Seblor
    Author URI: http://seblor.fr
    License: GPL2
    */

    // Lazy loading the resources
    function add_resources() {
        wp_register_script( 'threejs', plugin_dir_url( __FILE__ ) . 'resources/three.min.js');
        wp_register_script( 'skinview3d', plugin_dir_url( __FILE__ ) . 'resources/skinview3d.min.js');
        wp_register_script( 'skin_viewer_main', plugin_dir_url( __FILE__ ) . 'resources/main.js');
    }
    add_action( 'wp_enqueue_scripts', 'add_resources' );

    // Registering the shortcode
    add_shortcode( 'skin-preview', 'skin_preview' );

    function skin_preview( $atts ) {
        static $skincounter = 0;
        if (!$skincounter) { // If first skin in page, add resources
            wp_enqueue_script("threejs");
            wp_enqueue_script("skinview3d");
            wp_enqueue_script("skin_viewer_main");
        }

        $skincounter++;
        // Default skin (Steve)
        extract( shortcode_atts( array(
            'url' => 'https://i.imgur.com/Ip5v39f.png',
            'width' => 300,
            'height' => 300
        ), $atts ) );
        $html .= "<div id='skin_container_$skincounter' class='skin-preview-container' data-url='$url' data-width='$width' data-height='$height'></div>";

        return $html;
    }

    // Include the TinyMCE plugin
    include_once 'add-skin-preview-class.php';

?>