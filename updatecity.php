<?php
if ($_REQUEST['city'] == 1) {
    $arr = array(
        '1' => 'Чуднів',
        '2' => 'Бердичів'
    );
}
if ($_REQUEST['city'] == 2) {
    $arr = array(
        '1' => 'Старкон',
        '2' => 'Шепетівка'
    );
}
?>
<?php if (!empty($arr)) { ?>
<select name="innerRegCity" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
    <?php
    foreach ($arr as $key => $value) { ?>
        <option value="<?= $key ?>">
            <?= $value ?>
        </option>
    <? } ?>
    <? } ?>
