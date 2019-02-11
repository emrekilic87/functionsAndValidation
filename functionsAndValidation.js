 /*input just letter validation*/
 $(input).on('keypress keyup blur', function (e) {
    var val = $(this).val();
  
  if (val.match(/[^a-zA-ZŞşÜüİiIıÇçÖöĞğ ]/g)) {
      $(this).val(val.replace(/[^a-zA-ZŞşÜüİiIıÇçÖöĞğ ]/g, ''));
    }
});

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*input just number validation*/
$(input).on("keypress keyup blur", function (event) {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
});

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*email validation*/
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*input keyboard validation*/
var namePart = $("input[name=NameSurname]");
var phoneNumPart = $("input[name=Phone]");
var emailPart = $("input[name=Email]");
var partName = "";

function partValidate(part, errorPartClass) {
    var newErrorPart = $("#error" + errorPartClass)
    //console.log(part)
    if (part[0].name == "NameSurname") {
        if (part[0].value === null || part[0].value === "") {
            $(part).addClass('alert');
            $(newErrorPart).html("Lütfen Adınızı ve Soyadınızı Giriniz!")
        }
        else {
            $(part).removeClass('alert');
            $(newErrorPart).html("");
        }
    }
    if (part[0].name == "Phone") {
        $(part[0]).val($(part[0]).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if (part[0].value === null || part[0].value === "" || part[0].value.length < 10) {
            $(part).addClass('alert');
            $(newErrorPart).html("Lütfen en az 10 Haneli Telefon Numarası Giriniz!")
        }
        else {
            $(part).removeClass('alert');
            $(newErrorPart).html("");
        }
    }

    if (part[0].name == "Email") {
        if (!validateEmail(part[0].value)) {
            $(part).addClass('alert');
            $(newErrorPart).html("Lütfen E-Posta Adresinizi Giriniz!");
        }
        else {
            $(part).removeClass('alert');
            $(newErrorPart).html("");
        }
    }

}

$("form input").on("keypress keyup blur", function () {
    var $this = $(this);
    //console.log($this[0].name);
    if ($this[0].name == namePart[0].name) {
        partName = "Name";
    } else if ($this[0].name == phoneNumPart[0].name) {
        partName = "Phone"
    } else if ($this[0].name == emailPart[0].name) {
        partName = "Email"
    }

    partValidate($this, partName)
})


/*----------------------------------------------------------------------------------------------------------------------------------------------------*/


/*information checkbox validation for form */
if ($(checkbox).prop('checked') == false) {
    $(errorMessage).html("* Lütfen Bilgilendirmeyi Okuyup  Onaylayınız!");
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*phone mask*/
document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });


/*----------------------------------------------------------------------------------------------------------------------------------------------------*/


/*menu active*/
function menuActive(){
    var pathName = location.pathname;

    $('.partialMenuArea .partialMenu .item .linkArea a[href*="' + pathName + '"]').each(function () {
        $(this).addClass("active")
    });
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/
 

/*add point after 3 char from right to number*/
var number = "1200000";
function reverseString(str) {
    return str.split("").reverse().join("");
}
var reverseNum = reverseString(number);

function chunk(str, n) {
    var ret = [];
    var i;
    var len;

    for(i = 0, len = str.length; i < len; i += n) {
        ret.push(str.substr(i, n))
    }
    return ret
};

var pointAddedNum = chunk(reverseNum, 3).join('.');
var result = reverseString(pointAddedNum);
console.log(result);

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*password first show then hide and replace with "*"       */
function createstars(n) {
    var stars = "";
    for (var i = 0; i < n; i++) {
        stars += "*";
    }
    return stars;
}


$(document).ready(function () {

    var timer = "";

    $(".panel").append($('<input type="hidden" class="hidpassw" />'));

    $(".hidpassw").attr("name", $(".pass").attr("name"));

    $(".pass").attr("type", "text").removeAttr("name");

    $("body").on("keypress", ".pass", function (e) {
        var code = e.which;
        if (code >= 32 && code <= 127) {
            var character = String.fromCharCode(code);
            $(".hidpassw").val($(".hidpassw").val() + character);
        }


    });

    $("body").on("keyup", ".pass", function (e) {
        var code = e.which;

        if (code == 8) {
            var length = $(".pass").val().length;
            $(".hidpassw").val($(".hidpassw").val().substring(0, length));
        } else if (code == 37) {

        } else {
            var current_val = $('.pass').val().length;
            $(".pass").val(createstars(current_val - 1) + $(".pass").val().substring(current_val - 1));
        }

        clearTimeout(timer);
        timer = setTimeout(function () {
            $(".pass").val(createstars($(".pass").val().length));
        }, 200);

    });

    //console.log($('input[name=password]').val())

});

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/


/*ie9 placeholder add*/

$("[placeholder]").each(function () {
    var initial_value, input;
    input = $(this);
    initial_value = input.attr("placeholder");
    // Assign placeholder as the value attribute
    input.val(initial_value);
    // When focused
    input.focus(function () {
        if (input.val() === input.attr("placeholder")) {
            return input.val("");
        }
    });
    // When blurred
    return input.blur(function () {
        if (input.val() === "") {
            return input.val(initial_value);
        }
    });
});

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/