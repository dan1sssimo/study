
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<h1>Підготовка до нового року</h1>
<form style="margin: 25px" id="form">
    <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input type="date" class="form-control" id="date" name="date" value="<?= date("Y-m-d") ?>">
    </div>
    <div class="mb-3" id="inner">
    </div>
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="city" id="selectedCity">
        <option selected>Виберіть місто</option>
        <option value="1">Житомир</option>
        <option value="2">Хмельницьк</option>
    </select>
    <div class="mb-3" id="inner2" style="display: none">
    </div>
    <div class="mb-3" id="inner3">
    </div>
    <button type="submit" class="btn btn-primary" id="submit" name="submit">Submit</button>

</form>

<script>
    $("#date").change(function () {
        $.ajax({
            url: 'update.php',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function (data) {
                $('#inner').html(data);
            }
        });
    });
</script>
<script>
    $("#selectedCity").change(function () {
        $.ajax({
            url: 'updatecity.php',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function (data) {
                $('#inner2').html(data);
                $('#inner2').css("display", "inherit");
            }
        });
    });
</script>
<script>
    $("#form").on("submit", function () {
        $.ajax({
            url: 'feedback.php',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function (data) {
                $('#inner3').html(data);
            }
        });
    });
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"></script>
</body>
</html>
