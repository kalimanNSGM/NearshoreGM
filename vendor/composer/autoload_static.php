<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit058fb82c10399e51a380e1322e1bc4d5
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit058fb82c10399e51a380e1322e1bc4d5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit058fb82c10399e51a380e1322e1bc4d5::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
