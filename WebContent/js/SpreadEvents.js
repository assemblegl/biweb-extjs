var gl = gl || {};
Ext.define('gl.SpreadEvents', {
    extend: 'Ext.Panel',
    xtype: 'marked-spline-line',
    bodyStyle: 'background: transparent !imporltv1t',

    layout: {
        type: 'vbox',
        pack: 'center'
    },
    exampleDescription: [
        'Marked splines are multi-series splines displaying smooth curves across multiple categories. Markers are placed at each connected point to clearly depict their position. '
    ],
    themes: {
        classic: {
            percentChangeColumn: {
                width: 75
            }
        },
        neptune: {
            percentChangeColumn: {
                width: 100
            }
        }
    },
    initComponent: function() {
        var me = this;
        var datalength = 50;

        // Ext.define('ForumThread', {
        // extend: 'Ext.data.Model',
        // //fields: ['day', 'act', 'nc', 'ltv1','ltv3','ltv7' ],
        // fields: ['day', 'act', 'nc', 'ltv1','ltv3' ],
        // Property: 'threadid'
        // });

        //percentRange(0.3,0.5) 0.3-0.5 之间的随机值
        function prange(value,s,e){
            return Math.ceil(value*(s+Math.random()*(e-s)));
        }

        function generateData(){
            var data = [];

            for(var i=0;i<datalength;i++){
                var d = Ext.Date.add(new Date(), Ext.Date.DAY,-i);
                var click = prange(1,1000,2000);
                var disclick = prange(click,0.6,1);
                var act = prange(disclick,1.5,3.3);
                var dau1 = prange(act,0.4,0.7);
                var dau3 = prange(dau1,0.4,0.6);
                var dau7 = prange(dau3,0.4,0.7);
                var dau15 = prange(dau7,0.4,0.7);
                var dau30 = prange(dau15,0.2,0.7);
                data.push({
                    day: d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
                    click: click,
                    disclick: disclick,
                    act:act,
                    dau1:dau1,
                    dau3:dau3,
                    dau7:dau7,
                    dau15:dau15,
                    dau30:dau30
                })
            }

            for(var i = 0;i<data.length;i++){
                var record = data[i];
               console.log(record.day,record.click,record.disclick,record.dau15,record.dau1) ;
            }

            return data;
        }

        this.myDataStore = Ext.create('Ext.data.Store', {
            fields: ['day', 'click', 'disclick', 'act','dau','dau1','dau3','dau7','dau15','dau30' ],
            pageSize: 15,
            autoLoad: true,
            //model: 'ForumThread',
            //remoteSort: true,
            proxy:{
                type: 'memory',
                enablePaging: true,
                reader: {
                    type: 'json',
                    root: 'root'
                },
                data: generateData()
            //     [
            //     { day: '2016年12月10日',click:340 act: 20, nc: 10, ltv1: 10,ltv3: 10,ltv7: 10 },
            //     { day: '2016年12月9日' ,click:236 act: 17, nc: 98, ltv1: 18,ltv3: 18,ltv7: 18 },
            //     { day: '2016年12月8日' ,click:267 act: 34, nc: 94, ltv1: 36,ltv3: 36,ltv7: 36 },
            //     { day: '2016年12月7日' ,click:147 act: 50, nc: 87, ltv1: 58,ltv3: 58,ltv7: 58 },
            //     { day: '2016年12月6日' ,click:257 act: 64, nc: 77, ltv1: 84,ltv3: 84,ltv7: 84 },
            //     { day: '2016年12月5日' ,click:246 act: 77, nc: 64, ltv1: 19,ltv3: 19,ltv7: 19 },
            //     { day: '2016年12月4日' ,click:670 act: 87, nc: 50, ltv1: 73,ltv3: 73,ltv7: 73 },
            //     { day: '2016年12月3日' ,click:437 act: 94, nc: 34, ltv1: 75,ltv3: 75,ltv7: 75 },
            //     { day: '2016年12月2日' ,click:365 act: 98, nc: 17, ltv1: 67,ltv3: 67,ltv7: 67 },
            //     { day: '2016年12月1日' ,click:135 act: 100, nc: 10, ltv1: 24,ltv3: 24,ltv7: 24 },
            //     { day: '2016年11月30日',click: act: 98, nc: 17, ltv1: 67,ltv3: 67,ltv7: 67 },
            //     { day: '2016年11月29日',click: act: 94, nc: 34, ltv1: 75,ltv3: 75,ltv7: 75 },
            //     { day: '2016年11月28日',click: act: 87, nc: 50, ltv1: 73,ltv3: 73,ltv7: 73 },
            //     { day: '2016年11月27日',click: act: 77, nc: 64, ltv1: 19,ltv3: 19,ltv7: 19 },
            //     { day: '2016年11月26日',click: act: 64, nc: 77, ltv1: 84,ltv3: 84,ltv7: 84 },
            //     { day: '2016年11月25日',click: act: 50, nc: 87, ltv1: 58,ltv3: 58,ltv7: 58 },
            //     { day: '2016年11月24日',click: act: 34, nc: 94, ltv1: 36,ltv3: 36,ltv7: 36 },
            //     { day: '2016年11月23日',click: act: 17, nc: 98, ltv1: 18,ltv3: 18,ltv7: 18 },
            //     { day: '2016年11月22日',click: act: 00, nc: 00, ltv1: 00,ltv3: 00,ltv7: 00 },
            //     { day: '2016年11月21日',click: act: 17, nc: 98, ltv1: 18,ltv3: 18,ltv7: 18 },
            //     { day: '2016年11月20日',click: act: 34, nc: 94, ltv1: 36,ltv3: 36,ltv7: 36 },
            //     { day: '2016年11月19日',click: act: 50, nc: 87, ltv1: 58,ltv3: 58,ltv7: 58 },
            //     { day: '2016年11月18日',click: act: 64, nc: 77, ltv1: 84,ltv3: 84,ltv7: 84 },
            //     { day: '2016年11月17日',click: act: 77, nc: 64, ltv1: 19,ltv3: 19,ltv7: 19 },
            //     { day: '2016年11月16日',click: act: 87, nc: 50, ltv1: 73,ltv3: 73,ltv7: 73 },
            //     { day: '2016年11月15日',click: act: 94, nc: 34, ltv1: 75,ltv3: 75,ltv7: 75 },
            //     { day: '2016年11月14日',click: act: 98, nc: 17, ltv1: 67,ltv3: 67,ltv7: 67 },
            //     { day: '2016年11月13日',click: act: 00, nc: 00, ltv1: 32,ltv3: 32,ltv7: 32 },
            //     { day: '2016年11月12日',click: act: 98, nc: 17, ltv1: 67,ltv3: 67,ltv7: 67 },
            //     { day: '2016年11月11日',click: act: 94, nc: 34, ltv1: 75,ltv3: 75,ltv7: 75 },
            //     { day: '2016年11月10日',click: act: 87, nc: 50, ltv1: 73,ltv3: 73,ltv7: 73 },
            //     { day: '2016年11月9日' ,click: act: 77, nc: 64, ltv1: 19,ltv3: 19,ltv7: 19 },
            //     { day: '2016年11月8日' ,click: act: 64, nc: 77, ltv1: 84,ltv3: 84,ltv7: 84 },
            //     { day: '2016年11月7日' ,click: act: 50, nc: 87, ltv1: 58,ltv3: 58,ltv7: 58 },
            //     { day: '2016年11月6日' ,click: act: 34, nc: 94, ltv1: 36,ltv3: 36,ltv7: 36 },
            //     { day: '2016年11月5日' ,click: act: 17, nc: 98, ltv1: 18,ltv3: 18,ltv7: 18 },
            //     { day: '2016年11月4日' ,click: act: 10, nc: 10, ltv1: 20,ltv3: 20,ltv7: 20 }
            // ]
            }
            
        });
        
        chds = Ext.create('Ext.data.JsonStore', {
            fields: ['channel','schannel','adtype'],
            data: [
                { channel: 'channel1'  ,schannel:'schannel1' ,adtype:'adtype1'  },
                { channel: 'channel2'  ,schannel:'schannel2' ,adtype:'adtype2'  },
                { channel: 'channel3'  ,schannel:'schannel3' ,adtype:'adtype3'  },
                { channel: 'channel4'  ,schannel:'schannel4' ,adtype:'adtype4'  },
                { channel: 'channel5'  ,schannel:'schannel5' ,adtype:'adtype5'  },
                { channel: 'channel6'  ,schannel:'schannel6' ,adtype:'adtype6'  },
                { channel: 'channel7'  ,schannel:'schannel7' ,adtype:'adtype7'  },
                { channel: 'channel8'  ,schannel:'schannel8' ,adtype:'adtype8'  },
                { channel: 'channel9'  ,schannel:'schannel9' ,adtype:'adtype9'  },
                { channel: 'channel10' ,schannel:'schannel10',adtype:'adtype10' },
                { channel: 'channel11' ,schannel:'schannel11',adtype:'adtype11' }       
            ]
        });

        idxds = Ext.create('Ext.data.JsonStore', {
            fields: ['id','name','boolean','dataIndex'],
            data: [
                { id: '1' , name:'日期'       , boolean:true   , dataIndex:'day'},
                { id: '2' , name:'点击'       , boolean:true   , dataIndex:'click'},
                { id: '3' , name:'排重点击'   , boolean:true  , dataIndex:'disclick'},
                { id: '4' , name:'活跃'       , boolean:true  , dataIndex:'act'},
                { id: '5' , name:'1日留存'    , boolean:true  , dataIndex:'dau1'},
                { id: '6' , name:'3日留存'    , boolean:false  , dataIndex:'dau3'},
                { id: '7' , name:'7日留存'    , boolean:false  , dataIndex:'dau7'},
                { id: '8' , name:'15日留存'   , boolean:false  , dataIndex:'dau15'},
                { id: '9' , name:'30日留存'   , boolean:false  , dataIndex:'dau30'}
            ]
        });

        var idxmenu = Ext.create('Ext.menu.Menu', {
            id: 'idxmenu',
            style: {
                overflow: 'visible'     // For the Combo popup
            }  
        });

        //init menu
        for (var i = 0; i < idxds.getCount(); i++) {  
            var record = idxds.getAt(i); 
            var ishide = false;
            if(i == 0){
               ishide = true; //hide column day in idxenu 
            }
            idxmenu.add({
                text: record.get('name'),
                checked: record.get('boolean'),
                checkHandler: onItemCheck,
                hidden: ishide
            });  
        }

        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                    xtype: 'combobox',
                    labelWidth: 30,
                    width: 200,
                    //flex: 1,
                    fieldLabel: '渠道',
                    displayField: 'channel',
                    margin: '0 5 0 0',
                    store: chds
                },
                {
                    xtype: 'combobox',
                    labelWidth: 45,
                    width: 210,
                    fieldLabel: '小渠道',
                    displayField: 'schannel',
                    store:chds
                },{
                    xtype: 'combobox',
                    labelWidth: 60,
                    width: 225,
                    fieldLabel: '广告类型',
                    displayField: 'adtype',
                    store:chds
                },
                '->',
                {
                    xtype: 'datefield',
                    name: 'startDate',
                    fieldLabel: '日期',
                    labelWidth: 30,
                    width: 200,
                    value: Ext.util.Format.date(new Date(),"YYYY-mm-dd"),
                    margin: '0 5 0 5'
                },{
                    //hold datefield pos
                    xtype: 'label',
                    label:'',
                    width: 25        
                }
            // ,{
            //     text: 'Save Chart',
            //     handler: function() {
            //         Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice){
            //             if(choice == 'yes'){
            //                 me.down('chart').save({
            //                     type: 'image/png'
            //                 });
            //             }
            //         });

            //     }
            // }
            ]
        },{
            xtype: 'toolbar',
            items:['->',
                {
                    text:'选择指标',
                    iconCls: 'bmenu',  // <-- icon
                    menu: idxmenu
                },{
                    //hold datefield pos
                    xtype: 'label',
                    label:'',
                    width: 25        
                }
            ]
        }];

        // me.dockedItems = [{
        //     xtype: 'toolbar',
        //     dock: 'top',

        //     items: [
        //         '->',
        //     {
        //         text: 'Save Chart',
        //         handler: function() {
        //             Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice){
        //                 if(choice == 'yes'){
        //                     me.down('chart').save({
        //                         type: 'image/png'
        //                     });
        //                 }
        //             });

        //         }
        //     }]
        // }];

        function buildColumn(){ 
            var columns = [];  
                var item = {}; 
                item.dataIndex='day';
                item.text = '日期';
                item.sortable=true;

                columns[0]=item;
                   
                return  columns;
        }

        function onItemClick(item){
            Ext.example.msg('Menu Click', 'You clicked the "{0}" menu item.', item.text);
        }

        function initgd(){
            var m=Ext.getCmp('idxmenu');
            var columns = [];
            var ci = 0;
            m.items.each(function(it,index,length){
                if(it.checked){
                    var item = {};               
                    item.text = it.text;
                    item.sortable=true;   

                    for (var i = 0; i < idxds.getCount(); i++) { 
                        var record = idxds.getAt(i);
                        if(record.get('name') == it.text){
                           item.dataIndex=record.get('dataIndex'); 
                           break;
                        }
                    };

                    columns[ci]=item;
                    ci++;
                }
            }); 

            var gd=Ext.getCmp('idgd');   
            gd.reconfigure(this.myDataStore,columns);
            gd.doLayout();
        }

        function onItemCheck(item, checked){
            var clickitemname = item.text;
            var m=Ext.getCmp('idxmenu');
            var columns = [];
            var ci = 0;
            m.items.each(function(it,index,length){
                if(it.checked || index == 0){ //index =0,is day column always show
                    var item = {};               
                    item.text = it.text;
                    item.sortable=true;   
                    
                    // idxds.each(function(record){
                    //     if(record.get('name') == it.text){
                    //        item.dataIndex=record.get('dataIndex'); 
                    //        //break;
                    //     }
                    // });

                    for (var i = 0; i < idxds.getCount(); i++) { 
                        var record = idxds.getAt(i);
                        if(record.get('name') == it.text){
                           item.dataIndex=record.get('dataIndex'); 
                           break;
                        }
                    };

                    columns[ci]=item;
                    ci++;
                }
            });
            
            if(ci == 0){
                idxmenu.removeAll(true);
                for (var i = 0; i < idxds.getCount(); i++) {  
                    var record = idxds.getAt(i); 
                    var checkflag = false;
                    if(record.get('name') == clickitemname){
                        checkflag = true;
                    }
                    idxmenu.add({
                        text:record.get('name'),
                        checked:checkflag,
                        checkHandler: onItemCheck
                    })  
                }
                Ext.example.msg('警告！','至少要选择一个指标');
                console.log('checked==0 rebuild idx menu:',item.text,item.checked);
                return;
            }

            var gd=Ext.getCmp('idgd');   
            gd.reconfigure(this.myDataStore,columns);
            gd.doLayout();
            console.log('Item Checked:',item.text,item.checked);
        }

        var gd = Ext.create("Ext.grid.Panel", {
            id: 'idgd',
            title: ' ',
            columns : {
                defaults: {
                    sortable: true,
                    menuDisabled: false
                }
                 ,items: [
                     { text: '日期', dataIndex: 'day' }
                //     { text: '活跃', dataIndex: 'act' },
                //     { text: '新增', dataIndex: 'nc' },
                //     { text: '1日留存', dataIndex: 'ltv1' },
                //     { text: '3日留存', dataIndex: 'ltv3' },
                //     { text: '7日留存', dataIndex: 'ltv7' }
                 ]
            },
            store: this.myDataStore,
            width: '100%',
            bbar: {
                xtype: 'pagingtoolbar',
                pageSize: 15,
                store: this.myDataStore,
                displayInfo: true,
                plugins: new Ext.ux.ProgressBarPager()
            } 
        });

        me.items = [gd
        //{
        //     xtype: 'chart',
        //     width: '100%',
        //     height: 400,
        //     animate: true,
        //     shadow: false,
        //     padding: '10 0 0 0',
        //     style: 'background: #fff;',
        //     store: this.myDataStore,
        //     insetPadding: 40,
        //     legend: {
        //         position: 'right',
        //         boxStrokeWidth: 0,
        //         labelFont: '12px Helvetica'
        //     },
        //     items: [{
        //         type  : 'text',
        //         text  : 'Line Charts - Marked Spline',
        //         font  : '22px Helvetica',
        //         width : 100,
        //         height: 30,
        //         x : 40, //the sprite x position
        //         y : 12  //the sprite y position
        //     }],
        //     axes: [{
        //         type: 'Numeric',
        //         fields: ['act', 'nc', 'ltv1','ltv3','ltv7' ],
        //         position: 'left',
        //         grid: true,
        //         label: {
        //             renderer: function(v) {
        //                 return Ext.util.Format.number(v, '0.00');
        //             }
        //         }
        //     }, {
        //         type: 'Category',
        //         title: '日期',
        //         fields: 'day',
        //         position: 'bottom',
        //         grid: true,
        //         label: {
        //             rotate: {
        //                 degrees: -45
        //             }
        //         }
        //     }],
        //     series: [{
        //         type: 'line',
        //         axis: 'left',
        //         title: '活跃',
        //         xField: 'day',
        //         yField: 'act',
        //         smooth: true,
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             shadow: false,
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '新增',
        //         xField: 'day',
        //         yField: 'nc',
        //         smooth: true,
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             shadow: false,
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '1日留存',
        //         xField: 'day',
        //         yField: 'ltv1',
        //         smooth: true,
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             shadow: false,
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '3日留存',
        //         xField: 'day',
        //         yField: 'ltv3',
        //         smooth: true,
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             shadow: false,
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '7日留存',
        //         xField: 'day',
        //         yField: 'ltv7',
        //         smooth: true,
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             shadow: false,
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         }
        //     }
        //     ]
        
        // }, 
        // {
        //     style: 'margin-top: 10px;',
        //     xtype: 'gridpanel',
        //     id: 'idgd',
        //     title: ' ',
        //     columns : {
        //         defaults: {
        //             sortable: true,
        //             menuDisabled: false
        //         }
        //         ,items: [
        //             { text: '日期', dataIndex: 'day' },
        //             { text: '活跃', dataIndex: 'act' },
        //             { text: '新增', dataIndex: 'nc' },
        //             { text: '1日留存', dataIndex: 'ltv1' },
        //             { text: '3日留存', dataIndex: 'ltv3' },
        //             { text: '7日留存', dataIndex: 'ltv7' }
        //         ]
        //     },
        //     store: this.myDataStore,
        //     width: '100%',
        //     bbar: {
        //         xtype: 'pagingtoolbar',
        //         pageSize: 10,
        //         store: this.myDataStore,
        //         displayInfo: true,
        //         plugins: new Ext.ux.ProgressBarPager()
        //     }     
        // }
        ];

        initgd();

        this.callParent();
    }
});
