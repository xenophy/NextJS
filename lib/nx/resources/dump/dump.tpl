<link rel="stylesheet" type="text/css" href="mbContainer_css" title="style"  media="screen"/>
<link rel="stylesheet" type="text/css" href="jquery_treeview_css" title="style"  media="screen"/>
<script type="text/javascript" src="jquery_js"></script>
<script type="text/javascript" src="jquery_ui_js"></script>
<script type="text/javascript" src="jquery_metadata_js"></script>
<script type="text/javascript" src="jquery_cookie_js"></script>
<script type="text/javascript" src="mbContainer_js"></script>
<script type="text/javascript" src="jquery_treeview_js"></script>

<script type="text/javascript">

    $(function(){

        $(".containerPlus").buildContainers({
            containment:"document",
            elementsPath:"/(-_-)v/scripts/jquery/jquery.mb.containerPlus/elements/",
            initSize: {
                height: $(window).height() * 0.9
            },
            onClose:function(o){},
            onIconize:function(o){},
            onResize: function(o, init){

                if(init && init.height) {

                    var height = init.height;

                    $("#nextjs_dumper_container .mbcontainercontent").css('height', height);
                    height -= 15;
                    $("#nextjs_deumper_render").css('height', height);

                } else {

                    var height = $("#nextjs_dumper_container .mbcontainercontent").height();

                    height -= 15;

                    $("#nextjs_deumper_render").css('height', height);
                }

            },
            effectDuration:200
        });

        if(!$("#demoContainer").mb_getState("closed")){
            $('#close').fadeIn();$('#actions').fadeIn(); $("#open").hide(); $('#open_change').hide();
        }
    });

</script>

<div id="nextjs_dumper_container" class="containerPlus draggable resizable {buttons:'m', skin:'default', width:'500',title:'Next JS Dump Tree' }" style="top:2%; left:1%;">
    <div id="dock"> </div><div style="clear:both;"></div>
    <div id="nextjs_deumper_render" style="margin-top:10px; overflow-y:scroll;">

    dumptags

</div>
