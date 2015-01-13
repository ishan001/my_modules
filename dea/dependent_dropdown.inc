<?php



function restaurant_special_dropdown_callback() {
$form = restaurant_callback_helper();
  $changed_elements = $form['field_school_about_us'];

  // Prevent duplicate wrappers.
  unset($changed_elements['#prefix'], $changed_elements['#suffix']);

  $output = theme('status_messages') . drupal_render($changed_elements);

  drupal_json(array(
    'status'   => TRUE,
    'data'     => $output,
  ));
}


