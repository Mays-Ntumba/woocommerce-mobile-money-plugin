(function($) {

    $(document).ready(function () {
        $(document.body).on('updated_checkout', function() {
            var defaultValue = $('#mm_operator_field select').val();
            checkValue(defaultValue);
    
            $('#mm_operator_field select').on('change', function() {
               checkValue(this.value);
            });
        })
    })

    function checkValue(value){
        var code;
        if(value == "Airtel Money"){
            code = mmpayment_data.Airtelmoney_ussd_code;
        }
        if(value == "Orange Money"){
            code = mmpayment_data.orangemoney_ussd_code;
        }
        if(value == "M-pesa Money"){
            code = mmpayment_data.Mpesa_ussd_code;
        }
        if(code != ""){
            var message = "Composez <b>" +  code + "</b>";
            $("#mm_instruction").html(message);
        }
    }

})( jQuery );
