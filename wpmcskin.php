<?php

    /*
    Plugin Name: MC Skin Viewer
    Plugin URI: http://seblor.fr
    description: test
    Version: 0.1
    Author: Seblor
    Author URI: http://seblor.fr
    License: GPL2
    */

    add_shortcode( 'skin-preview', 'skin_preview' );

    function skin_preview( $atts ) {

        static $skincounter = 0;
        if (!$skincounter) { // If first skin in page, add resources
            $html = '<script type="text/javascript" src="' . plugin_dir_url( __FILE__ ) . 'resources/three.min.js"></script>';
            $html .= '<script type="text/javascript" src="' . plugin_dir_url( __FILE__ ) . 'resources/skinview3d.min.js"></script>';
            $html .= '<script type="text/javascript" src="' . plugin_dir_url( __FILE__ ) . 'resources/main.js"></script>';
        }

        // Default skin (Steve)
        extract( shortcode_atts( array(
            'url' => 'https://i.imgur.com/Ip5v39f.png',
        ), $atts ) );
        $html .= "<div id='skin_container_$skincounter++'></div><script>addSkin('$url', 'skin_container_$skincounter++')</script>";

        return $html;
    }

    // Include the TinyMCE plugin
    include_once 'add-skin-preview-class.php';

?>