<?php
  header("Status: 301 Moved Permanently");
  header("Location:https://www.minecraft.net/profile/skin/remote?". $_SERVER['QUERY_STRING']);
  exit;
?>