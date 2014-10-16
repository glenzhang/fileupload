<?php

    $ftmp = $_FILES['myFiles']['tmp_name'];
    $oname = $_FILES['myFiles']['name'];

    $imgname    =   $_FILES['myFiles']['name'];
    $fname      =   'upload/'.$imgname;
    if(move_uploaded_file($ftmp, $fname)){

    }

    $size = getimagesize ($fname);
    
    $originalw  =   $size[0];
    $originalh  =   $size[1];
    $expected_max_height    =   110;
    $expected_max_width     =   110;

    if ($originalh<$expected_max_height) {
        if ($originalw<$expected_max_width) {
            $imgwidth   =   $originalw;
            $imgheight  =   $originalh;
        } else {
            $imgheight  =   ($expected_max_width * $originalh)/ $originalw;
            $imgwidth   =   $expected_max_width;
        }
    } else {
        $new_height     =   $expected_max_height;
        $new_width      =   ($expected_max_height * $originalw)/ $originalh;

        if ($new_width>$expected_max_width) {
            $new_height =   ($expected_max_width * $expected_max_height) / $new_width;
            $new_width  =   $expected_max_width;
        }

        $imgwidth   =   $new_width;
        $imgheight  =   $new_height;
    }


    echo "http://www.pw.com/fileupload/".$fname;

?>