
(function ($) {
    $(document).ready(function () {


        $("#click").on({

            click: function () {

                $("#tapIt").slideToggle(1000);

                return false;
            },

            dblclick: function () {

                alert("working!")
            }

        });



        $("#btn-2").dblclick(function () {


            $("#tapIt").css({

                " margin": "auto",
                "border": "5px solid red",
                "background": "blue",
                "width": "300",
                "height": "200",
                "position": "absolute",
                "overflow-x": "hidden",
                "overflow-y": "auto",
                "display": "none",
                "border-radius": "0",
                "text-align": "left",
                "color": "black"
            });

        });


        $("#btn-2").click(function () {


            $("#tapIt").css({

                "backgroundColor": "black",
                "border-radius": "20% 0",
                "color": "white",
                "text-align": "center",
            });

        });





        $("#dragBox").draggable();


        $(".smallBox").draggable({ "containment": ".largeBox" });






        $(".smallBox2").draggable({ "revert": "invalid" });
        $(".largeBox2").droppable({
            "drop": function () {


                $(".largeBox2").css({

                    "backgroundColor": "black",
                    "border-radius": "20% 0",

                });
                $(".largeBox2").html("<h3> WELCOME TO JAIL! <br> HAHAHA!!</h3>")
            }
        });






        $(".boxResizable").resizable({ "animate": true });

        $(".boxResizable2").resizable({

            maxHeight: 500,
            maxWidth: 600,
            minHeight: 100,
            minWidth: 150,
        });







        $("#accordionContainer").accordion({
            collapsible: true,

            heightStyle: "content"
        });




        $(".sortablePart ul").sortable({
            "sort": function () {


                $(".ui-sortable-helper").css({

                    "backgroundColor": "rgb(134, 13, 13)",
                    "color": "white",
                })

            }
        });




        $(".sleectOption").selectable();



        var district = ["BARGUNA", "BARISAL", "BHOLA", "JHALOKATI", "PATUAKHALI", "PIROJPUR"
            , "BANDARBAN", "BRAHMANBARIA", "CHANDPUR", "CHITTAGONG", "COMILLA", "COX'S BAZAR", "FENI",
            "KHAGRACHHARI", "LAKSHMIPUR", "NOAKHALI", "RANGAMATI", "DHAKA", "ARIDPUR", "GAZIPUR",
            "GOPALGANJ", "JAMALPUR", "KISHOREGONJ", "MADARIPUR", "MANIKGANJ",
            "MUNSHIGANJ", "MYMENSINGH", "NARAYANGANJ", "NARSINGDI", "NETRAKONA",
            "RAJBARI", "SHARIATPUR", "SHERPUR", "TANGAIL"
            , "BAGERHAT", "CHUADANGA", "JESSORE", "JHENAIDAH", "KHULNA", "KUSHTIA", "MAGURA",
            "MEHERPUR", "NARAIL", "SATKHIRA"
            , "BOGRA", "CHAPAINABABGANJ", "JOYPURHAT", "PABNA", "NAOGAON", "NATORE", "RAJSHAHI", "SIRAJGANJ"
            , "DINAJPUR", "GAIBANDHA", "KURIGRAM,", "LALMONIRHAT", "NILPHAMARI", "PANCHAGARH",
            "RANGPUR", "THAKURGAON"
            , "HABIGANJ", "MAULVIBAZAR", "SUNAMGANJ", "SYLHET"
        ];

        $(".autocompleteOne").autocomplete({ "source": district });



        $(".datepickerInput").datepicker({

            changeMonth: true,
            changeYear: true,
        });





        $(function () {
            $(".checkBoxRadio").checkboxradio();
            $(".checkBoxRadio").checkboxradio();

        });


        $("#tabsArticles").tabs();






        $(".toTop").click(function () {
            $("html, body").animate({ "scrollTop": 0 }, 1500);
            return false;
        });
        $(window).scroll(function () {

            if ($(window).scrollTop() > 500) {
                $(".toTop").fadeIn(1500);
            }
            else {
                $(".toTop").fadeOut(1500);
            }
        });




        $("#megazine").click(function () {

            $("html, body").animate({ scrollTop: 4000 }, 1000);
            return false;
        });








        //its the crud part 
        $(".cruding").on(

            "click", "span", function (AFunctionName) {
                $(this).parent().fadeOut(200, function () {
                    $(this).remove()
                })
                AFunctionName.stopPropagation()
            }

        );

        $(".crudInput").keypress(function (counting) {

            if (counting.which === 13) {

                var task = $(".crudInput").val()
                $(".cruding").append('<li><span> <i class="fa fa-trash-o" aria-hidden="true"></i></span>' + task + '</li>')
                $(".crudInput").val(" ")
            }
        });

        $(".plus-1").click(function () {
            $(".crudInput").fadeToggle()
        });

        $(".cruding").on(
            "click", "li", function () {
                $(this).css("color", "green")
            });

        $(".cruding").on(
            "click", "li", function () {
                $(this).css("text-decoration", "line-through")
            });

        /* $(".cruding").on(
            "click","li", function(){
                $(this).toggleClass("A-CLASS-WITH-SAME-CSS")
        });
        this also can be taken inspite of that! */

        //its the crud part ends!




        $("#originalAccordioncntnr").accordion({
            collapsible: true,
            heightStyle: "content",
        });

        $(".h3ing").keypress(function (headinggiver) {
            if (headinggiver.which === 13) {
                var headingvalue = $(".h3ing").val()
                $(".subheader").text(headingvalue)
                $(".h3ing").val(" ")
            }

        });



        $(".paragraphing").keypress(function (contentgiver) {

            if (contentgiver.which === 13) {
                var contentvalue = $(".paragraphing").val()
                $(".content").text(contentvalue)
                $(".paragraphing").val(" ")
            }

        });







        $('.demo1').percentcircle({
            animate: true,
            diameter: 100,
            guage: 2,
            coverBg: '#efefef',
            bgColor: 'blue',
            fillColor: 'red',
            percentSize: '15px',
            percentWeight: 'normal'
        });


        $('.demo2').percentcircle({
            animate: true,
            diameter: 100,
            guage: 2,
            coverBg: '#fff',
            bgColor: 'blue',
            fillColor: 'red',
            percentSize: '15px',
            percentWeight: 'normal'
        });



        $('.demo3').percentcircle({
            animate: true,
            diameter: 100,
            guage: 2,
            coverBg: '#fff',
            bgColor: 'blue',
            fillColor: 'orange',
            percentSize: '15px',
            percentWeight: 'normal'
        });



        $('.demo4').percentcircle({
            animate: true,
            diameter: 100,
            guage: 2,
            coverBg: '#fff',
            bgColor: 'blue',
            fillColor: 'green',
            percentSize: '15px',
            percentWeight: 'normal',
        });




        $('.demo5').percentcircle();

// $('.demo5').circlechart(); 
// this also can be used.

        //you also can code this way,
        // but extra css under this percentcircle
        // wont be add here. thats it.       





        $("#example").typer({
            strings: [
                "PROFESSIONAL WEB DESIGNER...",
                "PROFESSIONAL WEB DEVELOPER...",
                "AN APP DEVELOPER...",
                "A PROFESSIONAL PROGRAMMER...",
                "PATIONATE CONTENT WRITER...",
                "AND ALSO A VIDEO EDITOR...",
            ],
            typeSpeed: 100,
            backspaceSpeed: 20,
            backspaceDelay: 1000,
            repeatDelay: 2000,
            repeat: true,
            autoStart: true,
            startDelay: 100,
            useCursor: true,
        });



        /* $("#example").typer({
           typeSpeed: 60,
           backspaceSpeed: 20,
           backspaceDelay: 800,
           repeatDelay: 1000,
           repeat: true,
           autoStart: true,
           startDelay: 100,
         });
       
       
         $("#example").typer({
           useCursor: true
         });
       
       */
        //this also cam be taken!! 






        $(".counterUping").counterUp({
            delay: 10,
            time: 2000
        })





$("#waterripples").ripples({

perturbance:0.04,
resolution: 300,
});





























        //its of the clearifying part!
    });

})(jQuery)



















