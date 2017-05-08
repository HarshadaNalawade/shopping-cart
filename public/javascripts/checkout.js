Stripe.setPublishableKey('pk_test_V64N49WkexqKWaZMkTfNHDOG');
var $form = $('checkout-form');
$form.submit(function(event){
    $form.find('button').prop('disabled',true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    }, stripeResponseHandler);
    return false;
});

function stripeResponseHandler(){
    
}