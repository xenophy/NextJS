<link rel="stylesheet" type="text/css" href="mbContainer_css" title="style"  media="screen"/>
<link rel="stylesheet" type="text/css" href="jqGrid_css" title="style"  media="screen"/>
<!--
<link rel="stylesheet" type="text/css" href="jquery_ui_custom_css" title="style"  media="screen"/>
<link rel="stylesheet" type="text/css" href="ui_jqgrid_css" title="style"  media="screen"/>
<link rel="stylesheet" type="text/css" href="ui_multiselect_css" title="style"  media="screen"/>
-->
<script type="text/javascript" src="jquery_js"></script>
<script type="text/javascript" src="jquery_ui_js"></script>
<script type="text/javascript" src="jquery_metadata_js"></script>
<script type="text/javascript" src="mbContainer_js"></script>
<!--
<script type="text/javascript" src="jqGrid_js"></script>
-->

<script type="text/javascript">

    var dumpdata = dumodata_insert;

    $(function(){

/*
        jQuery("#nextjs_deumper_render table").jqGrid({
            url: 'server.php?q=tree',
            treedatatype: "xml",
            mtype: "POST",
            colNames:["id","Account","value"],
            colModel:[{
                name:'id',
                index:'id',
                width:1,
                hidden:true,
                key:true
            }, {
                name:'name',
                width: 200,
                index:'name'
            }, {
                name:'value',
                index:'acc_num',
                width:80,
                align:"center"
            }],
            height:'auto',
            treeGrid: true,
            ExpandColumn : 'name',
        });

*/

        $(".containerPlus").buildContainers({
            containment:"document",
            elementsPath:"/(-_-)v/scripts/jquery/jquery.mb.containerPlus/elements/",
            initSize: {
                height: 300
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

<div id="nextjs_dumper_container" class="containerPlus draggable resizable {buttons:'m', skin:'default', width:'500',title:'Dock' }" style="top:2%; left:2%">
    <div id="dock"> </div><div style="clear:both;"></div>
    <div id="nextjs_deumper_render" style="margin-top:10px; overflow-y:scroll;">

    </div>
</div>
