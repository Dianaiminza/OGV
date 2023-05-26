(function ($) {
    "use strict";
    /**
     * Add blog functionality
     */
    $(function () {

        /*
         * Opening the cart icon
         */
        $('body').on('click', '.smcw-close-lightbox', function () {
            var template = $(this).closest('.smcw-cart-wrapper').data('template');
            if (template == 'template-7' || template == 'template-10') {
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-7 smcw-close-effect-template-7');
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
            } else {
                if (template == 'template-1') {
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-1 smcw-close-effect-template-1');
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                } else if (template == 'template-2' || template == 'template-9') {
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-2 smcw-close-effect-template-2');
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                } else if (template == 'template-3' || template == 'template-6') {
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-3 smcw-close-effect-template-3');
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                } else if (template == 'template-4') {
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-4 smcw-close-effect-template-4');
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                } else if (template == 'template-5' || template == 'template-8') {
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-5 smcw-close-effect-template-5');
                    $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                }
            }
        });
        var icon_value = $('.smcw-cart-icon-inner-wrap span').attr('class');
        $('body').on('click', '.smcw-cart-icons', function () {
            var template = $(this).closest('.smcw-cart-wrapper').data('template');
            if (template == 'template-1') {
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-close-effect-template-1 smcw-open-effect-1');
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').toggleClass('smcw-lightbox-active');
            } else if (template == 'template-2' || template == 'template-9') {
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-close-effect-template-2 smcw-open-effect-2');
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').toggleClass('smcw-lightbox-active');
            } else if (template === 'template-3' || template === 'template-6') {
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-close-effect-template-3 smcw-open-effect-3');
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').toggleClass('smcw-lightbox-active');
            } else if (template == 'template-4') {
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-close-effect-template-4 smcw-open-effect-4');
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').toggleClass('smcw-lightbox-active');
            } else if (template == 'template-5') {
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-close-effect-template-5 smcw-open-effect-5');
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').toggleClass('smcw-lightbox-active');
                var icon_value = 'lnr lnr-cross';

            } else if (template == 'template-8') {
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-close-effect-template-5 smcw-open-effect-5');
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').toggleClass('smcw-lightbox-active');
            } else {
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-close-effect-template-7 smcw-open-effect-7');
                $(this).closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').toggleClass('smcw-lightbox-active');
            }
        });

        function cart_action() {
            var template = $('.smcw-cart-wrapper').data('template');
            $.ajax({
                type: 'post',
                url: smcw_frontend_js_params.ajax_url,
                data: {
                    action: 'smcw_cart_action',
                    _wpnonce: smcw_frontend_js_params.ajax_nonce,
                    template: template
                },
                beforeSend: function () {
                },
                success: function (response) {
                    $('.smcw-detail-box').html(response).slideDown('slow');
                    $('.smcw-cart-details-wrapper').mCustomScrollbar({
                        theme: 'dark-3',
                        mouseWheel: {enable: true},
                        axis: 'y'
                    });
                }
            });
        }
        function smcw_item_count() {
            var item_symbol = $('.smcw-total-price-wrapper').data('symbol');
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: smcw_frontend_js_params.ajax_url,
                data: {
                    action: 'smcw_count_action',
                    _wpnonce: smcw_frontend_js_params.ajax_nonce
                },
                beforeSend: function (xhr) {
                },
                success: function (response) {
                    $('.smcw-cart-wrapper').find('.smcw-product-quantity-wrap').text(response.total_count);
                    $('.smcw-total-price-wrapper').html('<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">' + item_symbol + '</span>' + response.total_price + '</span>');
                }
            });
        }

        var image_effect = $('.smcw-effect-main-wrap').data('effect');
        if (image_effect === 'fly_image_effects') {
            $('.woocommerce').flyto({
                item: '.attachment-woocommerce_thumbnail',
                target: '.smcw-cart-icons',
                button: '.product_type_simple.add_to_cart_button',
                shake: true
            });
            $('.woocommerce').flyto({
                item: '.product',
                target: '.smcw-cart-icons',
                button: '.single_add_to_cart_button',
                shake: true
            });
        }
        $(document).on('click', '.product_type_simple.add_to_cart_button', function (e) {
            e.preventDefault();
            var $thisbutton = $(this),
                    $form = $thisbutton.closest('form.cart'),
                    id = $thisbutton.val(),
                    product_qty = $form.find('input[name=quantity]').val() || 1,
                    product_id = $form.find('input[name=product_id]').val() || id,
                    variation_id = $form.find('input[name=variation_id]').val() || 0;

            var data = {
                action: 'smcw_woocommerce_ajax_add_to_cart',
                product_id: product_id,
                product_sku: '',
                quantity: product_qty,
                variation_id: variation_id
            };
            var image_effect = $('.smcw-effect-main-wrap').data('effect');
            var auto_effect = $('.smcw-effect-main-wrap').data('auto-effect');
            $(document.body).trigger('adding_to_cart', [$thisbutton, data]);
            $.ajax({
                type: 'POST',
                url: wc_cart_fragments_params.ajax_url,
                data: data,
                beforeSend: function (response) {
                    $thisbutton.removeClass('added').addClass('loading');
                },
                complete: function (response) {
                    $thisbutton.addClass('added').removeClass('loading');
                },
                success: function (response) {
                    if (response.error & response.product_url) {
                        window.location = response.product_url;
                        return;
                    } else {
                        if (image_effect === 'fly_image_effects') {
                            /*
                             * Fly effect
                             */
                            $('.woocommerce').flyto({
                                item: '.attachment-woocommerce_thumbnail',
//                              item: '.product',
                                target: '.smcw-cart-icons',
                                button: '.product_type_simple.add_to_cart_button',
                                shake: true
                            });
                            setTimeout(function () {
                                cart_action();
                                smcw_item_count();
                            }, 800
                                    );
                        } else {
                            $('.smcw-ajax-loader').show();
                            setTimeout(function () {
                                cart_action();
                                smcw_item_count();
                                $('.smcw-ajax-loader').hide();

                            }, 800
                                    );
                            if (auto_effect == '1') {
                                setTimeout(function () {
                                    $('.smcw-cart-icons').trigger("click");

                                }, 1000
                                        );
                            }
                        }
                        $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                        $('.smcw-cart-wrapper').find('.smcw-cart-container').removeClass('smcw-empty-wrap');
                    }
                }
            });

            return false;
        });
        $('body').on('click', '.smcw-delete-product', function ()
        {
            var selector = $(this);
            var product_key = $(this).data('product-key');
            var quantity = $(this).closest('.smcw-cart-wrapper').find('.smcw-product-quantity-wrap').text();
            var item_key = $(this).closest('.smcw-product-inner-wrap').data('item-key');
            var item_symbol = $('.smcw-price-container').data('symbol');
            if (quantity > 1) {
                if ($('.smcw-product-inner-wrap').is(':only-child')) {
                    var template = $('.smcw-cart-wrapper').data('template');
                    $.ajax({
                        type: 'post',
                        url: smcw_frontend_js_params.ajax_url,
                        data: {
                            action: 'smcw_no_product_action',
                            _wpnonce: smcw_frontend_js_params.ajax_nonce,
                            template: template,
                            product_key: product_key,
                            item_key: item_key
                        },
                        beforeSend: function () {
                            $('.smcw-ajax-inner-loader').show();
                        },
                        success: function (response) {
                            $('.smcw-ajax-inner-loader').hide();
                            $('.smcw-detail-box').html(response);
                            $('.smcw-product-quantity-wrap').text('0');
                            $('.smcw-total-price-wrapper').text('');
                        }
                    });
                } else {
                    $.ajax({
                        type: 'post',
                        dataType: "json",
                        url: smcw_frontend_js_params.ajax_url,
                        data: {
                            action: 'smcw_delete_action',
                            _wpnonce: smcw_frontend_js_params.ajax_nonce,
                            product_key: product_key,
                            item_key: item_key

                        },
                        beforeSend: function (xhr) {
                            $('.smcw-ajax-inner-loader').show();
                        },
                        success: function (response) {
                            $('.smcw-ajax-inner-loader').hide();
                            $('.smcw-product-quantity-wrap').text(response.total_count);
                            $('.smcw-total-price-wrap').text(item_symbol + response.total_price);
                            $('.smcw-total-price-wrapper').html('<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">' + item_symbol + '</span>' + response.total_price + '</span>');
                            $('.smcw-tax-price-wrap').text(item_symbol + response.tax_price);
                            $('.smcw-items-subtotal-price').text(item_symbol + response.sub_total);
                            $('[data-item-key="' + item_key + '"]').remove();
                        }
                    });
                }
            } else {

                var template = $('.smcw-cart-wrapper').data('template');
                $.ajax({
                    type: 'post',
                    url: smcw_frontend_js_params.ajax_url,
                    data: {
                        action: 'smcw_no_product_action',
                        _wpnonce: smcw_frontend_js_params.ajax_nonce,
                        template: template,
                        product_key: product_key,
                        item_key: item_key
                    },
                    beforeSend: function () {
                        $('.smcw-ajax-inner-loader').show();
                    },
                    success: function (response) {
                        $('.smcw-ajax-inner-loader').hide();
                        $('.smcw-detail-box').html(response);
                        $('.smcw-product-quantity-wrap').text('0');
                        $('.smcw-total-price-wrapper').text('');
                        $('.smcw-cart-wrapper').find('.smcw-cart-container').addClass('smcw-empty-wrap');
                    }
                });
            }
        });
        /*
         * Scroll Configuration
         */
        $('.smcw-cart-details-wrapper').mCustomScrollbar({
            theme: 'dark-3',
            mouseWheel: {enable: true},
            axis: 'y'
        });

        $('.smcw-max-width-wrap').mCustomScrollbar({
            theme: 'dark-3',
            mouseWheel: {enable: true},
            axis: 'x'
        });

        /*
         * Increase the items quantity
         */
        $('body').on('click', '.smcw-plus-button', function () {
            var $button = $(this);
            var item_key = $button.closest('.smcw-product-inner-wrap').data('item-key');
            var oldValue = $button.closest('.smcw-quantity').find("input.smcw-quantity-inputs").val();
            var newVal = parseFloat(oldValue) + 1;
            // Don't allow decrementing below zero
            $('[data-item-key="' + item_key + '"]').find("input.smcw-quantity-inputs").val(newVal);
            $('[data-item-key="' + item_key + '"]').find('.quantity').text(newVal);
            var item_symbol = $('.smcw-price-container').data('symbol');
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: smcw_frontend_js_params.ajax_url,
                data: {
                    action: 'smcw_plus_action',
                    _wpnonce: smcw_frontend_js_params.ajax_nonce,
                    item_key: item_key,
                    currentVal: newVal
                },
                beforeSend: function (xhr) {
                    $('.smcw-ajax-inner-loader').show();
                },
                success: function (response) {
                    $('.smcw-ajax-inner-loader').hide();
                    $('.smcw-product-quantity-wrap').text(response.total_count);
                    $('.smcw-tax-price-wrap').text(item_symbol + response.tax_price);
                    $('.smcw-total-price-wrap').text(item_symbol + response.total_price);
                    $('.smcw-total-price-wrapper').html('<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">' + item_symbol + '</span>' + response.total_price + '</span>');
                    $('.smcw-items-subtotal-price').text(item_symbol + response.sub_total);
                }
            });
        });
        /*
         * Decrease the items quantity
         */
        $('body').on('click', '.smcw-minus-button', function () {
            var $button = $(this);
            var oldValue = $button.closest('.smcw-quantity').find("input.smcw-quantity-inputs").val();
            var item_symbol = $('.smcw-price-container').data('symbol');
            if (oldValue > 1) {
                var item_key = $button.closest('.smcw-product-inner-wrap').data('item-key');
                $button.closest('.smcw-quantity').find('.smcw-hiden-wrap').hide();
                var newVal = parseFloat(oldValue) - 1;
                $('[data-item-key="' + item_key + '"]').find("input.smcw-quantity-inputs").val(newVal);
                $('[data-item-key="' + item_key + '"]').find('.quantity').text(newVal);
                $.ajax({
                    type: 'post',
                    dataType: 'json',
                    url: smcw_frontend_js_params.ajax_url,
                    data: {
                        action: 'smcw_minus_action',
                        _wpnonce: smcw_frontend_js_params.ajax_nonce,
                        item_key: item_key,
                        currentVal: newVal
                    },
                    beforeSend: function (xhr) {
                        $('.smcw-ajax-inner-loader').show();
                    },
                    success: function (response) {
                        $('.smcw-ajax-inner-loader').hide();
                        $('.smcw-product-quantity-wrap').text(response.total_count);
                        $('.smcw-tax-price-wrap').text(item_symbol + response.tax_price);
                        $('.smcw-total-price-wrap').text(item_symbol + response.total_price);
                        $('.smcw-total-price-wrapper').html('<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">' + item_symbol + '</span>' + response.total_price + '</span>');
                        $('.smcw-items-subtotal-price').text(item_symbol + response.sub_total);
                    }
                });
            } else {
                $button.closest('.smcw-quantity').find('.smcw-hiden-wrap').show();
                setTimeout(function () {
                    $button.closest('.smcw-quantity').find('.smcw-hiden-wrap').hide();
                }, 1000
                        );
            }
        });
        /*
         * Popup Images Gallery
         */

        $('body').on('click', '.smcw-lightbox-wrap', function () {
            $(".smcw-display-popup").addClass('smcw-active');
            var selector = $(this);
            var product_id = selector.closest('.smcw-product-inner-wrap').data('product-key');
            $.ajax({
                url: smcw_frontend_js_params.ajax_url,
                data: {
                    product_id: product_id,
                    _wpnonce: smcw_frontend_js_params.ajax_nonce,
                    action: 'smcw_view_lightbox',
                    beforeSend: function () {
//                        $('.smcw-lightbox-loader').show();
                          $('.smcw-ajax-inner-loader').show();
                    }
                },
                type: "POST",
                success: function (response) {
//                    $('.smcw-lightbox-loader').hide();
                    $('.smcw-ajax-inner-loader').hide();
                    $(".smcw-display-popup").html(response);
                    smcw_slider_function();
                }

            });
        });
        /*
         * Details lightbox
         */

        var smcw_lightbox_slider = [];
        var smcw_thumb_slider = [];
        function smcw_slider_function() {
            $(".smcw-slider-wrap").each(function () {
                var selector = $(this);
                var id = $(this).data('id');
                var next_text = '<i class="lnr lnr-chevron-right"></i>';
                var pre_text = '<i class="lnr lnr-chevron-left"></i>';
                smcw_lightbox_slider[id] = $(this).bxSlider({
                    auto: false,
                    control: true,
                    speed: 2000,
                    pager: true,
                    infiniteLoop: true,
                    nextText: next_text,
                    prevText: pre_text,
                    touchEnabled: false,
                    mode: 'horizontal',
                    pagerCustom: '#smcw-pager-' + id,
                    useCSS: false,
                    onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                        $('.smcw-lbx-image-conatiner').closest('.smcw-each-thumb').find('.active').removeClass("active");
                        $('.smcw-lbx-image-conatiner').closest('.smcw-each-thumb').find('a[data-slide-index="' + newIndex + '"]').addClass("active");
                        var slider = smcw_thumb_slider[id];
                        if (slider.getSlideCount() - newIndex >= count)
                            slider.goToSlide(newIndex);
                        else
                            slider.goToSlide(slider.getSlideCount() - count);
                    }
                });
            });
            var count = 0;
            $(".smcw-thumb-slider").each(function () {
                var id = $(this).data('id');
                var next_text = '<i class="lnr lnr-chevron-right"></i>';
                var pre_text = '<i class="lnr lnr-chevron-left"></i>';
                smcw_thumb_slider[id] = $(this).bxSlider({
                    minSlides: 1,
                    maxSlides: 4,
                    slideWidth: 100,
                    slideMargin: 10,
                    moveSlides: 1,
                    auto: false,
                    touchEnabled: false,
                    pager: false,
                    infiniteLoop: true,
                    nextText: next_text,
                    prevText: pre_text
                });
            });
        }
        $('body').on('click', '.smcw-close-variation .smcw-close', function () {
            $('.smcw-display-popup').empty();
        });

        /*
         *Template 2 variations effects
         */
        $('body').on('click', '.smcw-attribute-down', function () {
            $(this).closest('.smcw-items-variation-wrap').find('.smcw-variation-wrapper').slideToggle('slow');
        });

        /*
         *Template 9 variations effects
         */
        $('body').on('click', '.smcw-items-more-down', function () {
            $(this).closest('.smcw-items-variation-wrap').find('.smcw-variation-container').slideToggle('slow');
            $(this).find('span').toggleClass('dashicons-arrow-down-alt2 dashicons-arrow-up-alt2');
            $('.smcw-items-more-down').closest('.smcw-product-inner-wrap').find('.smcw-each-item-wrapper').toggleClass('smcw-active-mode');
        });
        /*
         * single product page ajax add to cart
         */
        $(document).on('click', '.single_add_to_cart_button', function (e) {
            e.preventDefault();
            var $thisbutton = $(this),
                    $form = $thisbutton.closest('form.cart'),
                    id = $thisbutton.val(),
                    product_qty = $form.find('input[name=quantity]').val() || 1,
                    product_id = $form.find('input[name=product_id]').val() || id,
                    variation_id = $form.find('input[name=variation_id]').val() || 0;

            var data = {
                action: 'smcw_woocommerce_ajax_add_to_cart',
                product_id: product_id,
                product_sku: '',
                quantity: product_qty,
                variation_id: variation_id
            };
            var image_effect = $('.smcw-effect-main-wrap').data('effect');
            var auto_effect = $('.smcw-effect-main-wrap').data('auto-effect');
            $(document.body).trigger('adding_to_cart', [$thisbutton, data]);
            $.ajax({
                type: 'POST',
                url: wc_cart_fragments_params.ajax_url,
                data: data,
                beforeSend: function (response) {
                    $thisbutton.removeClass('added').addClass('loading');
                },
                complete: function (response) {
                    $thisbutton.addClass('added').removeClass('loading');
                },
                success: function (response) {
                    if (response.error & response.product_url) {
                        window.location = response.product_url;
                        return;
                    } else {

                        if (image_effect === 'fly_image_effects') {
                            /*
                             * Fly effect
                             */
                            $('.woocommerce').flyto({
                                item: '.product',
                                target: '.smcw-cart-icons',
                                button: '.single_add_to_cart_button',
                                shake: true
                            });
                            setTimeout(function () {
                                $('.smcw-cart-icons').effect("shake", {
                                    times: 1
                                }, 100);
                                cart_action();
                                smcw_item_count();

                            }, 800
                                    );
                        } else {
                            $('.smcw-ajax-loader').show();
                            setTimeout(function () {
                                cart_action();
                                smcw_item_count();
                                $('.smcw-ajax-loader').hide();
                            }, 800
                                    );
                            if (auto_effect == '1') {
                                setTimeout(function () {
                                    $('.smcw-cart-icons').trigger("click");
                                }, 1000
                                        );
                            }
                        }
                        $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                        $('.smcw-cart-wrapper').find('.smcw-cart-container').removeClass('smcw-empty-wrap');
                    }
                }
            });

            return false;
        });
        $('body').on('click', '.single_add_to_cart_button', function () {
//        var image_effect = $('.smcw-effect-main-wrap').data('effect');
//        var auto_effect = $('.smcw-effect-main-wrap').data('auto-effect');
//        if (image_effect === 'fly_image_effects') {
//            /*
//             * Fly effect
//             */
//            $('.woocommerce').flyto({
//                item: '.product',
//                target: '.smcw-cart-icons',
//                button: '.single_add_to_cart_button',
//                shake: true
//            });
//            setTimeout(function () {
//                $('.smcw-cart-icons').effect("shake", {
//                    times: 1
//                }, 100);
//                cart_action();
//                smcw_item_count();
//
//            }, 800
//                    );
//        } else {
//            $('.smcw-ajax-loader').show();
//            setTimeout(function () {
//                cart_action();
//                smcw_item_count();
//                $('.smcw-ajax-loader').hide();
//            }, 800
//                    );
//            if (auto_effect == '1') {
//                setTimeout(function () {
//                    $('.smcw-cart-icons').trigger("click");
//                }, 1000
//                        );
//            }
//        }
//        $('.smcw-cart-wrapper').find('.smcw-cart-container').removeClass('smcw-empty-wrap');
        });
        /*
         * Opening the cart icon
         */
        $(document).on('click', function (event) {
            if ($(event.target).hasClass('smcw-lightbox-active')) {
                var template = $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').data('template');
                if (template == 'template-7' || template == 'template-10') {
                    $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-7 smcw-close-effect-template-7');
                    $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                } else {
                    if (template == 'template-1') {
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-1 smcw-close-effect-template-1');
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                    } else if (template == 'template-2' || template == 'template-9') {
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-2 smcw-close-effect-template-2');
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                    } else if (template == 'template-3' || template == 'template-6') {
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-3 smcw-close-effect-template-3');
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                    } else if (template == 'template-4') {
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-4 smcw-close-effect-template-4');
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                    } else if (template == 'template-5' || template == 'template-8') {
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-items-wrapper').toggleClass('smcw-open-effect-5 smcw-close-effect-template-5');
                        $('.smcw-close-lightbox').closest('.smcw-cart-wrapper').find('.smcw-cart-main-container').removeClass('smcw-lightbox-active');
                    }
                }
            }
        });
    });
}(jQuery));
