var gl = gl || {};
Ext.define('gl.SpreadOverView', {
    extend: 'Ext.Panel',
    xtype: 'marked-line',
    bodyStyle: 'background: transparent !important',
    // layout:{
    //     //align : 'stretch',
    //     type:'table',
    //     columns:2
    // },
    //layout: 'anchor',
    layout:'vbox',
    //scrollable: true,
    //{
        //type: 'vbox',
        //align : 'stretch',
        //pack  : 'start',
        //pack: 'center'
    //},
    // exampleDescription: [
    //     'Marked lines are multi-series lines displaying trends across multiple categories. Markers are placed at each point to clearly depict their position on the chart. '
    // ],
    // themes: {
    //     classic: {
    //         percentChangeColumn: {
    //             width: 75
    //         }
    //     },
    //     neptune: {
    //         percentChangeColumn: {
    //             width: 100
    //         }
    //     }
    // }, 
    initdata:function() {
        this.datads.load();
        // this.datads.load({
        //     scope: this,
        //     callback:function(records, operation, success) {
        //         var len = records.length;
        //         //this.prolabsh='lala';
        //         Ext.getCmp('id-sov-lab-sh').setText(records[len-1].get('sh'));
        //         Ext.getCmp('id-sov-lab-dc').setText(records[len-1].get('dc'));
        //         Ext.getCmp('id-sov-lab-crate').setText(records[len-1].get('crate'));
        //         //Ext.util.Cookies.set('sovsh','test');
        //         //window.conf.sovsh='test';
        //         //labsh.setText(records[len-1].get('sh'));
        //         console.log('datads load');
        //     }
        // });
        console.log('init data run');
    },
    initComponent: function() {
        var me = this;

        // this.myDataStore = Ext.create('Ext.data.JsonStore', {
        //     fields: ['month', 'data1', 'data2', 'data3', 'data4' ],
        //     data: [
        //         { month: '03:00', data1: 46, data2: 20, data3: 35, data4: 4 },
        //         { month: '04:00', data1: 138, data2: 89, data3: 36, data4: 5 },
        //         { month: '06:00', data1: 269, data2: 110, data3: 37, data4: 4 },
        //         { month: '08:00', data1: 364, data2: 213, data3: 38, data4: 5 },
        //         { month: '10:00', data1: 532, data2: 431, data3: 39, data4: 4 },
        //         { month: '12:00', data1: 1034, data2: 639, data3: 42, data4: 4 },
        //         { month: '14:00', data1: 1255, data2: 822, data3: 43, data4: 4 },
        //         { month: '16:00', data1: 1672, data2: 998, data3: 44, data4: 4 },
        //         //{ month: 'Sep', data1: 16, data2: 32, data3: 44, data4: 4 },
        //         //{ month: 'Oct', data1: 16, data2: 32, data3: 45, data4: 4 },
        //         //{ month: 'Nov', data1: 15, data2: 31, data3: 46, data4: 4 },
        //         //{ month: 'Dec', data1: 15, data2: 31, data3: 47, data4: 4 }
        //     ]
        // });

        // var labsh=Ext.create('Ext.form.Label',{
        //     id:'id-sov-lab-sh',                   
        //     style:'font-size:35px;color: #004b97',
        //     listeners:{  
        //         afterrender:function(obj){  
        //             obj.tip=Ext.create('Ext.tip.ToolTip',{  
        //                 target:obj.getEl().getAttribute("id"),  
        //                 trackMouse:true,  
        //                 renderTo: Ext.getBody(),  
        //                 html:'广告的展示次数',  
        //             });  
        //         }  
        //     }             
        // });

        // var datads = Ext.create('Ext.data.TreeStore',{
        //     root:{
        //         expanded: true
        //     },
        //     autoLoad:true
        // });
        // var datads = Ext.create('Ext.data.JsonStore', {
        // });
        // var nulljson='[';
        // for(var i=0 ;i<8;i++){
        //     if(i != 0){
        //        nulljson+=','; 
        //     }
        //var nulljson='[{"date":"'+0+'","sh":0,"dc":0,"crate":0,"acadv":0,"accam":0,"acrate":0,"roi":0,"ltv":0,"arpu":0,"arppu":0,"charge":0,"nwpayrate":0,"dautotal":0,"daucam":0,"dauadv":0,"wautotal":0,"waucam":0,"wauadvmautotal":0,"maucam":0,"mauadvlc1total":0,"lc1cam":0,"lc1adv":0}]';
        //}
        //nulljson+=']';
        //console.log('json:'+nulljson);
        //var nulljson=[{'date':'0','sh':0,'dc':0,'crate':0,'acadv':0,'accam':0,'acrate':0,'roi':0,'ltv':0,'arpu':0,'arppu':0,'charge':0,'nwpayrate':0,'dautotal':0,'daucam':0,'dauadv':0,'wautotal':0,'waucam':0,'wauadvmautotal':0,'maucam':0,'mauadvlc1total':0,'lc1cam':0,'lc1adv':0}];
        //var datads = Ext.create('Ext.data.TreeStore',{
        me.datads = Ext.create('Ext.data.JsonStore',{
            fields:['date','sh','dc','crate','acadv','accam','acrate','roi','ltv','arpu','arppu','charge','nwpayrate','dautotal','daucam','dauadv','wautotal','waucam','wauadvmautotal','maucam','mauadvlc1total','lc1cam','lc1adv'],
            // data: [
            //     { date: '02:00', sh: 46,  dc: 20}, 
            //     { date: '04:00', sh: 138, dc: 89}, 
            //     { date: '06:00', sh: 269, dc: 110}, 
            //     { date: '08:00', sh: 364, dc: 213}, 
            //     { date: '10:00', sh: 532, dc: 431}, 
            //     { date: '12:00', sh: 1034, dc: 639}
            // ]
            proxy: {
               type: 'ajax',
               url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc7ujm&userid='+conf.username+'&password='+conf.passwd,
               reader: {
                    type: 'json',
                    rootProperty: 'd'
               }
            }
            // ,root:{
            //     expanded: true
            // }
            ,listeners: {
                load:function(store,records,opts){
                    var len = records.length;
                    console.log('datads load,len:'+len);

                    if(len != 0){
                        Ext.getCmp('id-sov-lab-sh').setText(records[len-1].get('sh'));
                        Ext.getCmp('id-sov-lab-dc').setText(records[len-1].get('dc'));
                        Ext.getCmp('id-sov-lab-crate').setText(records[len-1].get('crate')+'%');
    
                        Ext.getCmp('id-sov-lab-acadv').setText(records[len-1].get('acadv'));
                        Ext.getCmp('id-sov-lab-accam').setText(records[len-1].get('accam'));
                        Ext.getCmp('id-sov-lab-acrate').setText(records[len-1].get('acrate')+'%');
    
                        Ext.getCmp('id-sov-lab-roi').setText(records[len-1].get('roi'));
                        Ext.getCmp('id-sov-lab-ltv').setText(records[len-1].get('ltv'));
                        Ext.getCmp('id-sov-lab-arpu').setText(records[len-1].get('arpu'));
                        Ext.getCmp('id-sov-lab-arppu').setText(records[len-1].get('arppu'));
                        Ext.getCmp('id-sov-lab-charge').setText(records[len-1].get('charge'));
                        Ext.getCmp('id-sov-lab-nwpayrate').setText(records[len-1].get('nwpayrate')+'%');
    
                        Ext.getCmp('id-sov-lab-dautotal').setText(records[len-1].get('dautotal'));
                        Ext.getCmp('id-sov-lab-daucam').setText(records[len-1].get('daucam'));
                        Ext.getCmp('id-sov-lab-dauadv').setText(records[len-1].get('dauadv'));
                        Ext.getCmp('id-sov-lab-wautotal').setText(records[len-1].get('wautotal'));
                        Ext.getCmp('id-sov-lab-waucam').setText(records[len-1].get('waucam'));
                        Ext.getCmp('id-sov-lab-wauadv').setText(records[len-1].get('wauadv'));
                        Ext.getCmp('id-sov-lab-mautotal').setText(records[len-1].get('mautotal'));
                        Ext.getCmp('id-sov-lab-maucam').setText(records[len-1].get('maucam'));
                        Ext.getCmp('id-sov-lab-mauadv').setText(records[len-1].get('mauadv'));
    
                        Ext.getCmp('id-sov-lab-lctotal').setText(records[len-1].get('lc1total'));
                        Ext.getCmp('id-sov-lab-lccam').setText(records[len-1].get('lc1cam'));
                        Ext.getCmp('id-sov-lab-lcadv').setText(records[len-1].get('lc1adv'));

                    }else{
                        //me.datads.loadData([]);
                        console.log('datads in load,len:'+len);
                    }     
                }
            }
            //,autoLoad:true
        });

        me.datads.load();
        
        // datads.on('load',function(store,records,opts){
        //     var len = records.length;
        //     Ext.getCmp('id-sov-lab-sh').setText(records[len-1].get('sh'));
        //     Ext.getCmp('id-sov-lab-dc').setText(records[len-1].get('dc'));
        //     Ext.getCmp('id-sov-lab-crate').setText(records[len-1].get('crate')+'%');
        //     Ext.getCmp('id-sov-lab-acadv').setText(records[len-1].get('acadv'));
        //     Ext.getCmp('id-sov-lab-accam').setText(records[len-1].get('accam'));
        //     Ext.getCmp('id-sov-lab-acrate').setText(records[len-1].get('acrate')+'%');
        //     Ext.getCmp('id-sov-lab-roi').setText(records[len-1].get('roi'));
        //     Ext.getCmp('id-sov-lab-ltv').setText(records[len-1].get('ltv'));
        //     Ext.getCmp('id-sov-lab-arpu').setText(records[len-1].get('arpu'));
        //     Ext.getCmp('id-sov-lab-arppu').setText(records[len-1].get('arppu'));
        //     Ext.getCmp('id-sov-lab-charge').setText(records[len-1].get('charge'));
        //     Ext.getCmp('id-sov-lab-nwpayrate').setText(records[len-1].get('nwpayrate')+'%');
        //     Ext.getCmp('id-sov-lab-dautotal').setText(records[len-1].get('dautotal'));
        //     Ext.getCmp('id-sov-lab-daucam').setText(records[len-1].get('daucam'));
        //     Ext.getCmp('id-sov-lab-dauadv').setText(records[len-1].get('dauadv'));
        //     Ext.getCmp('id-sov-lab-wautotal').setText(records[len-1].get('wautotal'));
        //     Ext.getCmp('id-sov-lab-waucam').setText(records[len-1].get('waucam'));
        //     Ext.getCmp('id-sov-lab-wauadv').setText(records[len-1].get('wauadv'));
        //     Ext.getCmp('id-sov-lab-mautotal').setText(records[len-1].get('mautotal'));
        //     Ext.getCmp('id-sov-lab-maucam').setText(records[len-1].get('maucam'));
        //     Ext.getCmp('id-sov-lab-mauadv').setText(records[len-1].get('mauadv'));
        //     Ext.getCmp('id-sov-lab-lctotal').setText(records[len-1].get('lc1total'));
        //     Ext.getCmp('id-sov-lab-lccam').setText(records[len-1].get('lc1cam'));
        //     Ext.getCmp('id-sov-lab-lcadv').setText(records[len-1].get('lc1adv'));

        //     console.log('datads load');
        // });

        // datads.load({
        //     scope: this,
        //     callback:function(records, operation, success) {
        //         var len = records.length;
        //         Ext.getCmp('id-sov-lab-sh').setText(records[len-1].get('sh'));
        //         Ext.getCmp('id-sov-lab-dc').setText(records[len-1].get('dc'));
        //         Ext.getCmp('id-sov-lab-crate').setText(records[len-1].get('crate')+'%');

        //         Ext.getCmp('id-sov-lab-acadv').setText(records[len-1].get('acadv'));
        //         Ext.getCmp('id-sov-lab-accam').setText(records[len-1].get('accam'));
        //         Ext.getCmp('id-sov-lab-acrate').setText(records[len-1].get('acrate')+'%');

        //         Ext.getCmp('id-sov-lab-roi').setText(records[len-1].get('roi'));
        //         Ext.getCmp('id-sov-lab-ltv').setText(records[len-1].get('ltv'));
        //         Ext.getCmp('id-sov-lab-arpu').setText(records[len-1].get('arpu'));
        //         Ext.getCmp('id-sov-lab-arppu').setText(records[len-1].get('arppu'));
        //         Ext.getCmp('id-sov-lab-charge').setText(records[len-1].get('charge'));
        //         Ext.getCmp('id-sov-lab-nwpayrate').setText(records[len-1].get('nwpayrate')+'%');

        //         Ext.getCmp('id-sov-lab-dautotal').setText(records[len-1].get('dautotal'));
        //         Ext.getCmp('id-sov-lab-daucam').setText(records[len-1].get('daucam'));
        //         Ext.getCmp('id-sov-lab-dauadv').setText(records[len-1].get('dauadv'));

        //         Ext.getCmp('id-sov-lab-wautotal').setText(records[len-1].get('wautotal'));
        //         Ext.getCmp('id-sov-lab-waucam').setText(records[len-1].get('waucam'));
        //         Ext.getCmp('id-sov-lab-wauadv').setText(records[len-1].get('wauadv'));

        //         Ext.getCmp('id-sov-lab-mautotal').setText(records[len-1].get('mautotal'));
        //         Ext.getCmp('id-sov-lab-maucam').setText(records[len-1].get('maucam'));
        //         Ext.getCmp('id-sov-lab-mauadv').setText(records[len-1].get('mauadv'));

        //         Ext.getCmp('id-sov-lab-lctotal').setText(records[len-1].get('lc1total'));
        //         Ext.getCmp('id-sov-lab-lccam').setText(records[len-1].get('lc1cam'));
        //         Ext.getCmp('id-sov-lab-lcadv').setText(records[len-1].get('lc1adv'));

        //         console.log('datads load');
        //     }
        // });

        var advds = Ext.create('Ext.data.JsonStore',{
        	fields:['id','name','boolean'],
        	proxy: {
        	   type: 'ajax',
        	   url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv3edc&userid='+conf.username+'&password='+conf.passwd,
        	   reader: {
        	        type: 'json',
                    rootProperty: 'adv'
        	   }
        	},
        	autoLoad:true,
            listeners: {
                load:function(store,records,opts){
                    var cb = Ext.getCmp("id-adv-combo");
                    var range = advds.getRange();
                    for(var i=0;i<range.length;i++){ 
                        if(range[i].data.boolean == true){
                            window.conf.advid=range[i].data.id;
                            window.conf.advname=range[i].data.name;
                            Ext.util.Cookies.set('adv',range[i].data.id);
                            Ext.util.Cookies.set('advn',Ext.util.Base64.encode(range[i].data.name));
                            cb.setValue(range[i].data.name);
                        }
                    }
                }
            }
        });         
        
        var chds = Ext.create('Ext.data.JsonStore',{
            fields:['id','name','boolean'],
            proxy: {
                type: 'ajax',
                url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc5tgb&userid='+conf.username+'&password='+conf.passwd,
                reader: {
                    type: 'json',
                    rootProperty: 'ch'
                }
            },
            autoLoad:true,
            listeners: {
                load:function(store,records,opts){
                    var cb = Ext.getCmp("id-ch-combo");
                    var range = chds.getRange();
                    console.log('chds range len:'+range.length);
                    for(var i=0;i<range.length;i++){ 
                        if(range[i].data.boolean == true){
                            window.conf.chid=range[i].data.id;
                            window.conf.chname=range[i].data.name;
                            Ext.util.Cookies.set('ch',range[i].data.id);
                            Ext.util.Cookies.set('chn',Ext.util.Base64.encode(range[i].data.name));
                            cb.setValue(range[i].data.name);
                        }
                    }
                }
            }
        });

        // var schds = Ext.create('Ext.data.JsonStore',{
        //     fields:['id','name','boolean'],
        //     proxy: {
        //           type: 'ajax',
        //           url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc6yhn&userid='+conf.username+'&password='+conf.passwd,
        //           reader: {
        //               type: 'json',
        //               rootProperty: 'sch'
        //           }
        //       },
        //       autoLoad:true
        // });

        // idxds = Ext.create('Ext.data.JsonStore', {
        //     fields: ['id','name','boolean','num'],
        //     data: [
        //         { id: '1' , name:'点击'       , boolean:true  , num:'18'},
        //         { id: '2' , name:'排重点击'   , boolean:true  , num:'19'},
        //         { id: '3' , name:'点击率'     , boolean:true  , num:'18320'},
        //         { id: '4' , name:'激活推广量' , boolean:true  , num:'213'},
        //         { id: '5' , name:'激活自然量' , boolean:true  , num:'860'},
        //         { id: '6' , name:'激活总量'   , boolean:false  , num:'1073'},
        //         { id: '7' , name:'ROI'        ,boolean:false   , num:'32%'},
        //         { id: '8' , name:'充值金额'   , boolean:false  , num:'365'},
        //         { id: '9' , name:'arpu'       , boolean:false , num:'46'},
        //         { id: '10' , name:'arppu'      , boolean:false , num:'680'},
        //         { id: '11' , name:'新增付费率' , boolean:false , num:'1733'},
        //         { id: '12' , name:'DAU总量'    , boolean:false , num:'482'},
        //         { id: '13', name:'DAU自然量'  , boolean:false , num:'364'},
        //         { id: '14', name:'DAU推广量'  , boolean:false , num:'20032'},
        //         { id: '15', name:'总量次日留' , boolean:false , num:'9600'}, 
        //         { id: '16', name:'总量3日留'  , boolean:false , num:'7500'},
        //         { id: '17', name:'总量7日留'  , boolean:false , num:'3100'}, 
        //         { id: '18', name:'总量14日留' , boolean:false , num:'2058'},
        //         { id: '19', name:'总量30日留' , boolean:false , num:'1260'}     
        //     ]
        // });  
        // function flushContentPanel(ctid){
        //     var vs = contentp.getSize();
        //     contentp.removeAll(true);
        //     if(ctid !=null && ctid.substring(0,2) == 'gl'){
        //         var tp = Ext.create(ctid,{
        //             width:vs.width,
        //             height:vs.height
        //         });
        //         //tp.initdata()
        //         contentp.add(tp);
        //         console.log('contentp add tp,ctid is gl head'); 
        //     }else{
        //         var tp = Ext.create('gl.deving',{});
        //         var size = contentp.getSize();
        //         tp.setSize(size.width,size.height);
        //         contentp.add(tp);
        //         console.log('contentp add gl.deving');
        //     }  
        // };


    //     var gldatepanel = Ext.create('Ext.panel.Panel',{
    //         layout: 'hbox',
    //         region: 'center',
    //         padding: '0 0 0 0',
    //         //width: '98%',
    //         items:[{
    //             xtype: 'datepicker',
    //             id: 'datestart',
    //             maxDate: new Date(),
    //             handler: function(picker, date) {
    //                 Ext.getCmp('sbtn').setValue(5);
    //                 Ext.util.Cookies.set('st',Ext.util.Format.date(date,'Y-m-d'));
    //             }
    //         },{
    //             xtype: 'datepicker',
    //             id: 'dateend',
    //             maxDate: new Date(),
    //             handler: function(picker, date) {
    //                 Ext.getCmp('sbtn').setValue(5);
    //                 Ext.util.Cookies.set('et',Ext.util.Format.date(date,'Y-m-d'));
    //             }
    //         },{
    //             xtype: 'panel',
    //             layout: {
    //                 type: 'vbox',
    //                 align: 'stretch'
    //                 },
    //             items:[
    //                 // {
    //                 //     xtype: 'panel',
    //                 //     //frame:true,
    //                 //     height:'100%',
    //                 //     items:[
    //                     {
    //                         xtype: 'segmentedbutton',
    //                         id: 'sbtn',
    //                         vertical: true,
    //                         items: [{
    //                             text: '今日',
    //                             pressed: true,
    //                             handler:function(){
    //                                 var today = new Date();
    //                                 Ext.getCmp('datestart').setValue(today);
    //                                 Ext.getCmp('dateend').setValue(today);
    //                                 window.conf.stime=today;
    //                                 window.conf.etime=today;
    //                                 Ext.util.Cookies.set('st',Ext.util.Format.date(today,'Y-m-d'));
    //                                 Ext.util.Cookies.set('et',Ext.util.Format.date(today,'Y-m-d'));
    //                                 console.log('click 今日');
    //                             }
    //                         }, {
    //                             text: '昨天',
    //                             handler:function(){
    //                                 var yes = Ext.Date.add(new Date(), Ext.Date.DAY,-1);
    //                                 Ext.getCmp('datestart').setValue(yes);
    //                                 Ext.getCmp('dateend').setValue(yes);
    //                                 window.conf.stime=yes;
    //                                 window.conf.etime=yes;
    //                                 Ext.util.Cookies.set('st',Ext.util.Format.date(yes,'Y-m-d'));
    //                                 Ext.util.Cookies.set('et',Ext.util.Format.date(yes,'Y-m-d'));
    //                                 console.log('click 昨天');
    //                             }
    //                         }, {
    //                             text: '过去30天',
    //                             handler:function(){
    //                                 var today = new Date();
    //                                 var starttime = Ext.Date.add(today, Ext.Date.DAY,-30);
    //                                 Ext.getCmp('datestart').setValue(starttime);
    //                                 Ext.getCmp('dateend').setValue(today);
    //                                 window.conf.stime=starttime;
    //                                 window.conf.etime=today;
    //                                 Ext.util.Cookies.set('st',Ext.util.Format.date(starttime,'Y-m-d'));
    //                                 Ext.util.Cookies.set('et',Ext.util.Format.date(today,'Y-m-d'));
    //                                 console.log('click 过去30天:');
    //                             }
    //                         }, {
    //                             text: '本月',
    //                             handler:function(){
    //                                 var today = new Date();
    //                                 var starttime =  new Date(today.getFullYear(),today.getMonth(),1);
    //                                 Ext.getCmp('datestart').setValue(starttime);
    //                                 Ext.getCmp('dateend').setValue(today);
    //                                 window.conf.stime=starttime;
    //                                 window.conf.etime=today;
    //                                 Ext.util.Cookies.set('st',Ext.util.Format.date(starttime,'Y-m-d'));
    //                                 Ext.util.Cookies.set('et',Ext.util.Format.date(today,'Y-m-d'));
    //                                 console.log('click 本月:',starttime);
    //                             }
    //                         }, {
    //                             text: '前一个月',
    //                             handler:function(){
    //                                 //start time
    //                                 var lastmonthdaystart = Ext.Date.add(new Date(),Ext.Date.MONTH,-1);                    
    //                                 lastmonthdaystart = new Date(lastmonthdaystart.getFullYear(),lastmonthdaystart.getMonth(),1);
    //                                 Ext.getCmp('datestart').setValue(lastmonthdaystart);

    //                                 //end time
    //                                 var today = new Date();
    //                                 var lastmonthdayend = new Date(today.getFullYear(),today.getMonth(),1);
    //                                 lastmonthdayend = Ext.Date.add(lastmonthdayend,Ext.Date.DAY,-1);
    //                                 Ext.getCmp('dateend').setValue(lastmonthdayend);

    //                                 window.conf.stime=lastmonthdaystart;
    //                                 window.conf.etime=lastmonthdayend;
    //                                 Ext.util.Cookies.set('st',Ext.util.Format.date(lastmonthdaystart,'Y-m-d'));
    //                                 Ext.util.Cookies.set('et',Ext.util.Format.date(lastmonthdayend,'Y-m-d'));
    //                                 console.log('click 前一个月,stattime:',lastmonthdaystart,'endtime:',lastmonthdayend);
    //                             }
    //                         },{
    //                             text: '自定义日期'
    //                         }]
    //                     },{
    //                         xtype: 'panel',
    //                         //frame:true,
    //                         //width: '100%',
    //                         padding: '40 0 0 0',
    //                         //region: 'center',
    //                         layout: {
    //                             type: 'vbox',
    //                             align: 'stretch',
    //                             pack: 'center'
    //                         },
    //                         items:[{
    //                         xtype: 'button',
    //                         text: '确定',
    //                         handler:function(){
    //                             var starttime = Ext.getCmp('datestart').getValue();
    //                             var endtime = Ext.getCmp('dateend').getValue();
    //                             console.log(starttime,endtime);
    //                             me.stime = starttime;
    //                             me.etime = endtime;
    //                             //me.setText(starttime.getFullYear()+'-'+(starttime.getMonth()+1)+'-'+starttime.getDate());
    //                             me.datads.load();
    //                             gldatemenu.hide();
    //                             }
    //                         }]
    //                     }
    //                 //]
    //             //}
                
    //             ]
    //         },
    //         ]
    //     });

    //     var gldatemenu = Ext.create('Ext.menu.Menu', {
    //     style: {
    //         overflow: 'visible'   
    //     },
    //     items:[
    //         gldatepanel
    //     ]
    // });

        var headpanel=Ext.create('Ext.panel.Panel', {
            //region: 'north',
            //anchor: '100% -45',
            frame:true,
            //flex:1,
            width: '100%', 
            //height: 45,            
            dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items:[{
                    xtype: 'combobox',
                    id:'id-ch-combo',
                    labelWidth: 30,
                    width: 200,
                    //flex: 1,
                    fieldLabel: '渠道',
                    displayField: 'name',
                    valueField:'id',
                    margin: '0 5 0 0',
                    store: chds,
                    listeners:{
                        select:function(combo,record,opts){
                            //window.conf.chid = this.getValue();
                            //window.conf.chname = this.getRawValue();
                            Ext.util.Cookies.set('ch',this.getValue());
                            Ext.util.Cookies.set('chn',Ext.util.Base64.encode(this.getRawValue()));
                            
                            //var ctid = Ext.util.Cookies.get('ctid'); 
                            //me.datads.load();                         
                            //flushContentPanel(ctid);
                            //Ext.getCmp('id-sov-click-chart').bindStore(datads);
                            //me.datads.removeAll(true);
                            me.datads.load();
                            //datads.loadData(gdatads.getData());
                            //console.log(datads.getData().items);
                            console.log('ch select,id:'+this.getValue()+',name:'+this.getRawValue()+'.');
                            //console.log(window.conf)
                        }
                    }
                },
                // {
                //     xtype: 'combobox',
                //     id:'id-sch-combo',
                //     labelWidth: 45,
                //     width: 210,
                //     fieldLabel: '小渠道',
                //     displayField: 'name',
                //     valueField:'id',
                //     store:schds,
                //     listeners:{
                //         select:function(combo,record,opts){
                //             window.conf.schid = this.getValue();
                //             window.conf.schname = this.getRawValue();
                //             Ext.util.Cookies.set('sch',this.getValue());
                //             Ext.util.Cookies.set('schn',this.getRawValue());
                //             console.log('sch select,id:'+this.getValue()+',name:'+this.getRawValue());
                //         }
                //     }
                // },
                {
                    xtype: 'combobox',
                    id:'id-adv-combo',
                    labelWidth: 60,
                    width: 225,
                    fieldLabel: '广告类型',
                    displayField: 'name',
                    valueField:'id',
                    store:advds,
                    listeners:{
                        select:function(combo,record,opts){
                            window.conf.advid = this.getValue();
                            window.conf.advname = this.getRawValue();
                            Ext.util.Cookies.set('adv',this.getValue());
                            Ext.util.Cookies.set('advn',this.getRawValue());
                            console.log('adv select,id:'+this.getValue()+',name:'+this.getRawValue());
                        }
                    }
                },
                '->',
                {
                    text:'选择日期',
                    id: 'iddmenu',
                    iconCls: 'bmenu',  // <-- icon
                    menu: Ext.create('gl.DateMenu',{}),//gldatemenu,
                    margin: '0 20 0 0'
                }]
            }]       
        });

//    	var range = advds.getRange();
//    	console.log('range:'+range.length);
//    	for(var i=0;i<range.length;i++){ 
//    		if(range[i].data.boolean == true){
//    			Ext.getCmp("id-adv-combo").setValue(range[i].data.name);
//    		}
//    	}
        
        // var chinit = 0;
        // chds.on('load',function(store,record,opts){
        //     if(chinit == 0){
        //         chinit = 1;
        //     }else{
        //         return;
        //     }
        //     var cb = Ext.getCmp("id-ch-combo");
        //     var range = chds.getRange();
        //     console.log('chds range len:'+range.length);
        //     for(var i=0;i<range.length;i++){ 
        //         if(range[i].data.boolean == true){
        //             window.conf.chid=range[i].data.id;
        //             window.conf.chname=range[i].data.name;
        //             Ext.util.Cookies.set('ch',range[i].data.id);
        //             Ext.util.Cookies.set('chn',Ext.util.Base64.encode(range[i].data.name));
        //             cb.setValue(range[i].data.name);
        //         }
        //     }
        // });

        // var advinit = 0;
        // advds.on('load',function(store,record,opts){
        // 	if(advinit == 0){
        // 		advinit = 1;
        // 	}else{
        // 		return;
        // 	}
        // 	var cb = Ext.getCmp("id-adv-combo");
        // 	var range = advds.getRange();
        // 	for(var i=0;i<range.length;i++){ 
        // 		if(range[i].data.boolean == true){
        //             window.conf.advid=range[i].data.id;
        //             window.conf.advname=range[i].data.name;
        //             Ext.util.Cookies.set('adv',range[i].data.id);
        //             Ext.util.Cookies.set('advn',Ext.util.Base64.encode(range[i].data.name));
        // 			cb.setValue(range[i].data.name);
        // 		}
        // 	}
        // });
        
        // var schinit = 0;
        // schds.on('load',function(store,record,opts){
        //     if(schinit == 0){
        //         schinit = 1;
        //     }else{
        //         return;
        //     }
        //     var cb = Ext.getCmp("id-sch-combo");
        //     var range = schds.getRange();
        //     for(var i=0;i<range.length;i++){ 
        //         if(range[i].data.boolean == true){
        //             window.conf.schid=range[i].data.id;
        //             window.conf.schname=range[i].data.name;
        //             Ext.util.Cookies.set('sch',range[i].data.id);
        //             Ext.util.Cookies.set('schn',range[i].data.name);
        //             cb.setValue(range[i].data.name);
        //         }
        //     }
        // });          

        var clickpanel =  Ext.create('Ext.panel.Panel',{
            collapsible: true,
            title: '点击概览',
            layout: 'vbox',
            //region: 'west',
            //colspan:1,
            columnWidth:0.5,
            height:430,
            //flex:1,
            //width:'50%',
            frame:true,
            items:[{   
                xtype: 'panel',
                layout: 'hbox',
                width:'100%',
                //frame:true,
                items:[{
                    xtype: 'panel',
                    title: '展示', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[
                    // {
                    //     xtype:'button',
                    //     id: 'idshowpanel',
                    //     html:'展示',
                    //     tooltip: 'tooltip'
                    // },
                    //labsh
                    {
                        xtype: 'label', 
                        id:'id-sov-lab-sh',                   
                        style:'font-size:35px;color: #004b97',
                        //text: '1672',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'广告的展示次数',  
                                });  
                            }                          
                        }
                    }
                    ]
                },{
                    xtype: 'panel',
                    title: '排重点击', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-dc',
                        style:'font-size:35px;color: #004b97',
                        //text: '998',
                        listeners:{  
                            afterrender:function(obj){  
                            	console.log('version:'+window.conf.version);
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'点击数据的排重数(依据设备信息)',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '点击率', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-crate',
                        style:'font-size:35px;color: #004b97',
                        //text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'排重点击次数/展示',  
                                });  
                            }  
                        }
                    }]
                }]
            },{   
                xtype: 'panel',
                //frame:true,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                    },
                width:'100%',
                height:260,
                items:[
                {
            xtype: 'chart',
            id:'id-sov-click-chart',
            //width: 400,
            width:'100%',
            height: 220,
            margin: '0 30 0 30',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: me.datads,
            insetPadding: 5,
            axes: [{
                type: 'Numeric',
                fields: ['sh', 'dc'],
                position: 'left',
                grid: true,
                maximum:300,
                minimum: 0,
                label: {
                    renderer: function(v) { return v ; }
                }
            }, {
                type: 'Category',
                fields: ['date'],
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: '展示',
                xField: 'date',
                yField: 'sh',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                }
                ,
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: '排重点击',
                xField: 'date',
                yField: 'dc',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                }
                ,
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },{
                type: 'line',
                axis: 'left',
                title: '点击率',
                xField: 'date',
                yField: 'crate',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                }
                ,
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }
            ]
        }
        ]
            }
            ]
        });


        var activepanel =  Ext.create('Ext.panel.Panel',{
            collapsible: true,
            title: '激活概览',
            layout: 'vbox',
            //region: 'east',
            //colspan:1,
            height:430,
            columnWidth:0.5,
            //width:'50%',
            frame:true,
            //flex:1,
            items:[{   
                xtype: 'panel',
                layout: 'hbox',
                width:'100%',
                //frame:true,
                items:[{
                    xtype: 'panel',
                    title: '激活推广量', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[
                    {
                        xtype: 'label',                    
                        style:'font-size:35px;color: #004b97',
                        id:'id-sov-lab-acadv',
                        //text: '1672',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'通过广告引导，首次安装应用并打开的设备数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '激活自然量', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-accam',
                        style:'font-size:35px;color: #004b97',
                        //text: '998',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'未通过广告引导，首次安装应用并打开的事件数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '激活率', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-acrate',
                        style:'font-size:35px;color: #004b97',
                        //text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                }]
            },{   
                xtype: 'panel',
                //frame:true,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                    },
                width:'100%',
                height:260,
                items:[{
            xtype: 'chart',
            width: '100%',
            height: 220,
            margin: '0 30 0 30',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: me.datads,
            insetPadding: 5,
            axes: [{
                type: 'Numeric',
                fields: ['acadv', 'accam', 'acrate'],
                position: 'left',
                grid: true,
                maximum:500,
                minimum: 0,
                label: {
                    renderer: function(v) { return v ; }
                }
            }, {
                type: 'Category',
                fields: 'date',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: '激活推广量',
                xField: 'date',
                yField: 'acadv',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: '激活自然量',
                xField: 'date',
                yField: 'accam',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },{
                type: 'line',
                axis: 'left',
                title: '激活率',
                xField: 'date',
                yField: 'acrate',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }
            ]
        }]
            }
            ]
        });

        var chargepanelLeft =  Ext.create('Ext.panel.Panel',{
            collapsible: true,
            title: '收入概览',
            layout: 'vbox',
            //margin: '30 0 0 0',
            //region: 'south',
            //height:430,
            //height:'100%',
            //width:'100%',
            //colspan:2,
            columnWidth:0.5,
            frame:true,
            items:[{   
                xtype: 'panel',
                layout: 'hbox',
                width:'100%',
                //frame:true,
                items:[{
                    xtype: 'panel',
                    title: '充值总金额', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[
                    {
                        xtype: 'label',  
                        id:'id-sov-lab-charge',                  
                        style:'font-size:35px;color: #004b97',
                        //text: '1672',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'通过广告引导，首次安装应用并打开的设备数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '新增付费率', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-nwpayrate',
                        style:'font-size:35px;color: #004b97',
                        //text: '998',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'未通过广告引导，首次安装应用并打开的事件数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '当日ltv', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-ltv',
                        style:'font-size:35px;color: #004b97',
                        //text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                }
                ]
            }
            ,{   
                xtype: 'panel',
                //frame:true,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                    },
                width:'100%',
                height:260,
                items:[
                {
            xtype: 'chart',
            width: '100%',
            height: 220,
            margin: '0 30 0 30',
            padding: '0 0 0 0',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: me.datads,
            insetPadding: 5,
            axes: [{
                type: 'Numeric',
                fields: ['charge', 'nwpayrate', 'ltv'],
                position: 'left',
                grid: true,
                maximum:300,
                minimum: 0,
                label: {
                    renderer: function(v) { return v ; }
                }
            }, {
                type: 'Category',
                fields: 'date',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: '充值总金额',
                xField: 'date',
                yField: 'charge',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: '新增付费率',
                xField: 'date',
                yField: 'nwpayrate',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },{
                type: 'line',
                axis: 'left',
                title: '当日ltv',
                xField: 'date',
                yField: 'ltv',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }
            ]
        }
        ]
            }
            ]
        });

        var chargepanelRight =  Ext.create('Ext.panel.Panel',{
            collapsible: true,
            title: '收入概览',
            layout: 'vbox',
            //margin: '30 0 0 0',
            //region: 'south',
            //height:430,
            //height:'100%',
            //width:'100%',
            //colspan:2,
            columnWidth:0.5,
            frame:true,
            items:[{   
                xtype: 'panel',
                layout: 'hbox',
                width:'100%',
                //frame:true,
                items:[
                {
                    xtype: 'panel',
                    title: 'ARPU', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-arpu',
                        style:'font-size:35px;color: #004b97',
                        //text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: 'ARPPU', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-arppu',
                        style:'font-size:35px;color: #004b97',
                        //text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: 'ROI', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-roi',
                        style:'font-size:35px;color: #004b97',
                        //text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                }

                ]
            }
            ,{   
                xtype: 'panel',
                //frame:true,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                    },
                width:'100%',
                height:260,
                items:[
                {
            xtype: 'chart',
            width: '100%',
            height: 220,
            margin: '0 30 0 30',
            padding: '0 0 0 0',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: me.datads,
            insetPadding: 5,
            axes: [{
                type: 'Numeric',
                fields: ['arpu', 'arppu', 'roi'],
                position: 'left',
                grid: true,
                maximum:300,
                minimum: 0,
                label: {
                    renderer: function(v) { return v ; }
                }
            }, {
                type: 'Category',
                fields: 'date',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: 'ARPU',
                xField: 'date',
                yField: 'arpu',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: 'ARPPU',
                xField: 'date',
                yField: 'arppu',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },{
                type: 'line',
                axis: 'left',
                title: 'ROI',
                xField: 'date',
                yField: 'roi',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }
            ]
        }
        ]
            }
            ]
    });

    function onDWMauMenuCheck(item, checked){ 
        if(checked == true){
           if(item.text == 'DAU'){
                daumenu.removeAll(true);
                initDauMenu();

                //dwmaupanel.removeAll(false);
                //dwmaupanel.add(daupanel);
                waupanel.hide();
                maupanel.hide();
                daupanel.show();
           }else if(item.text == 'WAU'){
                waumenu.removeAll(true);
                initWauMenu();

                // dwmaupanel.removeAll(false);
                // dwmaupanel.add(waupanel);
                
                maupanel.hide();
                daupanel.hide();
                waupanel.show();              
           }else if(item.text == 'MAU'){
                maumenu.removeAll(true);
                initMauMenu();

                //dwmaupanel.removeAll(false);
                //dwmaupanel.add(maupanel);
                
                waupanel.hide();
                daupanel.hide();
                maupanel.show();
           }
        }

        console.log('dau menu click:'+item.text+',checked:'+checked);
    };

    //dwm menu
    var daumenuds = Ext.create('Ext.data.JsonStore', {
        fields: ['id','name','boolean'],
        data: [
            { id: '1' , name:'DAU',boolean:true },
            { id: '2' , name:'WAU',boolean:false},
            { id: '3' , name:'MAU',boolean:false}
        ]
    });

    var waumenuds = Ext.create('Ext.data.JsonStore', {
        fields: ['id','name','boolean'],
        data: [
            { id: '1' , name:'DAU',boolean:false },
            { id: '2' , name:'WAU',boolean:true},
            { id: '3' , name:'MAU',boolean:false}
        ]
    });

    var maumenuds = Ext.create('Ext.data.JsonStore', {
        fields: ['id','name','boolean'],
        data: [
            { id: '1' , name:'DAU',boolean:false },
            { id: '2' , name:'WAU',boolean:false},
            { id: '3' , name:'MAU',boolean:true}
        ]
    }); 

    var daumenu = Ext.create('Ext.menu.Menu', {
        style: {
            overflow: 'visible'
        }  
    });

    var waumenu = Ext.create('Ext.menu.Menu', {
        style: {
            overflow: 'visible'
        }  
    });

    var maumenu = Ext.create('Ext.menu.Menu', {
        style: {
            overflow: 'visible'
        }  
    });

    function initDauMenu(){
        for (var i = 0; i < daumenuds.getCount(); i++) {  
            var record = daumenuds.getAt(i); 
            daumenu.add({
                text:record.get('name'),
                checked:record.get('boolean'),
                group:'daugroup',
                checkHandler: onDWMauMenuCheck
            });
        }   
    }

    function initWauMenu(){
        for (var i = 0; i < waumenuds.getCount(); i++) {  
            var record = waumenuds.getAt(i); 
            waumenu.add({
                text:record.get('name'),
                checked:record.get('boolean'),
                group:'waugroup',
                checkHandler: onDWMauMenuCheck
            });
        }
    }

    function initMauMenu(){
        for (var i = 0; i < maumenuds.getCount(); i++) {  
            var record = maumenuds.getAt(i); 
            maumenu.add({
                text:record.get('name'),
                checked:record.get('boolean'),
                group:'maugroup',
                checkHandler: onDWMauMenuCheck
            });
        }
    }

    initDauMenu(); 
    initWauMenu();
    initMauMenu();

var daupanel = Ext.create('Ext.panel.Panel', {
    //collapsible: true,
    //title: 'D/W/MAU概览',
    layout: 'vbox',
    //columnWidth: 0.5,
    //height: 430,
    //frame: true,
    height: '100%',
    width:'100%',
    items: [{
        xtype: 'panel',
        layout: 'hbox',
        width: '100%',
        //frame:true,
        items: [{
            xtype: 'panel',
            id: 'id-sov-daupal-tol',
            title: 'DAU总量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
            // {
            //     xtype:'button',
            //     id: 'idshowpanel',
            //     html:'展示',
            //     tooltip: 'tooltip'
            // },
            //labsh
            {
                xtype: 'label',
                id: 'id-sov-lab-dautotal',
                style: 'font-size:35px;color: #004b97',
                //text: '1672',
                listeners: {
                    afterrender: function(obj) {
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '广告的展示次数',
                        });
                    }
                }
            }]
        },
        {
            xtype: 'panel',
            id: 'id-sov-daupal-cam',
            title: 'DAU自然量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [{
                xtype: 'label',
                id: 'id-sov-lab-daucam',
                style: 'font-size:35px;color: #004b97',
                //text: '998',
                listeners: {
                    afterrender: function(obj) {
                        console.log('version:' + window.conf.version);
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '点击数据的排重数(依据设备信息)',
                        });
                    }
                }
            }]
        },
        {
            xtype: 'panel',
            id: 'id-sov-daupal-adv',
            title: 'DAU推广量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            dockedItems: {
                //itemId: 'id-sov-daupanel-toolbar',
                xtype: 'toolbar',
                items: ['->', {
                    text: 'D/W/MAU选择',
                    menu: daumenu
                }]
            },
            items: [{
                xtype: 'label',
                id: 'id-sov-lab-dauadv',
                style: 'font-size:35px;color: #004b97',
                //text: '60%',
                listeners: {
                    afterrender: function(obj) {
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '排重点击次数/展示',
                        });
                    }
                }
            }]
        }]
    },
    {
        xtype: 'panel',
        //frame:true,
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'center'
        },
        width: '100%',
        height: 260,
        items: [{
            xtype: 'chart',
            //width: 400,
            width: '100%',
            height: 220,
            margin: '0 30 0 30',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: me.datads,
            insetPadding: 5,
            axes: [{
                type: 'Numeric',
                fields: ['sh', 'dc'],
                position: 'left',
                grid: true,
                maximum: 300,
                minimum: 0,
                label: {
                    renderer: function(v) {
                        return v;
                    }
                }
            },
            {
                type: 'Category',
                fields: ['date'],
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: 'DAU总量',
                xField: 'date',
                yField: 'dautotal',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },
            {
                type: 'line',
                axis: 'left',
                title: 'DAU自然量',
                xField: 'date',
                yField: 'daucam',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },
            {
                type: 'line',
                axis: 'left',
                title: 'DAU推广量',
                xField: 'date',
                yField: 'dauadv',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }]
        }]
    }]
}); 

var waupanel = Ext.create('Ext.panel.Panel', {
    //collapsible: true,
    //title: 'D/W/MAU概览',
    layout: 'vbox',
    //columnWidth: 0.5,
    //height: 430,
    //frame: true,
    height: '100%',
    width:'100%',
    items: [{
        xtype: 'panel',
        layout: 'hbox',
        width: '100%',
        //frame:true,
        items: [{
            xtype: 'panel',
            //id: 'id-sov-waupal-tol',
            title: 'WAU总量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
            // {
            //     xtype:'button',
            //     id: 'idshowpanel',
            //     html:'展示',
            //     tooltip: 'tooltip'
            // },
            //labsh
            {
                xtype: 'label',
                id: 'id-sov-lab-wautotal',
                style: 'font-size:35px;color: #004b97',
                //text: '1672',
                listeners: {
                    afterrender: function(obj) {
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '广告的展示次数',
                        });
                    }
                }
            }]
        },
        {
            xtype: 'panel',
            //id: 'id-sov-waupal-cam',
            title: 'WAU自然量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [{
                xtype: 'label',
                id: 'id-sov-lab-waucam',
                style: 'font-size:35px;color: #004b97',
                //text: '998',
                listeners: {
                    afterrender: function(obj) {
                        console.log('version:' + window.conf.version);
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '点击数据的排重数(依据设备信息)',
                        });
                    }
                }
            }]
        },
        {
            xtype: 'panel',
            //id: 'id-sov-waupal-adv',
            title: 'WAU推广量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            dockedItems: {
                xtype: 'toolbar',
                items: ['->', {
                    text: 'D/W/MAU选择',
                    menu: waumenu
                }]
            },
            items: [{
                xtype: 'label',
                id: 'id-sov-lab-wauadv',
                style: 'font-size:35px;color: #004b97',
                //text: '60%',
                listeners: {
                    afterrender: function(obj) {
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '排重点击次数/展示',
                        });
                    }
                }
            }]
        }]
    },
    {
        xtype: 'panel',
        //frame:true,
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'center'
        },
        width: '100%',
        height: 260,
        items: [{
            xtype: 'chart',
            //width: 400,
            width: '100%',
            height: 220,
            margin: '0 30 0 30',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: me.datads,
            insetPadding: 5,
            axes: [{
                type: 'Numeric',
                fields: ['wautotal','waucam','wauadv'],
                position: 'left',
                grid: true,
                maximum: 300,
                minimum: 0,
                label: {
                    renderer: function(v) {
                        return v;
                    }
                }
            },
            {
                type: 'Category',
                fields: ['date'],
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: 'WAU总量',
                xField: 'date',
                yField: 'wautotal',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },
            {
                type: 'line',
                axis: 'left',
                title: 'WAU自然量',
                xField: 'date',
                yField: 'waucam',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },
            {
                type: 'line',
                axis: 'left',
                title: 'WAU推广量',
                xField: 'date',
                yField: 'wauadv',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }]
        }]
    }]
});

var maupanel = Ext.create('Ext.panel.Panel', {
    //collapsible: true,
    //title: 'D/W/MAU概览',
    layout: 'vbox',
    //columnWidth: 0.5,
    //height: 430,
    //frame: true,
    height: '100%',
    width:'100%',
    items: [{
        xtype: 'panel',
        layout: 'hbox',
        width: '100%',
        //frame:true,
        items: [{
            xtype: 'panel',
            //id: 'id-sov-maupal-tol',
            title: 'MAU总量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
            // {
            //     xtype:'button',
            //     id: 'idshowpanel',
            //     html:'展示',
            //     tooltip: 'tooltip'
            // },
            //labsh
            {
                xtype: 'label',
                id: 'id-sov-lab-mautotal',
                style: 'font-size:35px;color: #004b97',
                //text: '1672',
                listeners: {
                    afterrender: function(obj) {
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '广告的展示次数',
                        });
                    }
                }
            }]
        },
        {
            xtype: 'panel',
            //id: 'id-sov-maupal-cam',
            title: 'MAU自然量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [{
                xtype: 'label',
                id: 'id-sov-lab-maucam',
                style: 'font-size:35px;color: #004b97',
                //text: '998',
                listeners: {
                    afterrender: function(obj) {
                        console.log('version:' + window.conf.version);
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '点击数据的排重数(依据设备信息)',
                        });
                    }
                }
            }]
        },
        {
            xtype: 'panel',
            //id: 'id-sov-maupal-adv',
            title: 'MAU推广量',
            //width: 150,
            height: 150,
            bodyPadding: 10,
            flex: 1,
            frame: true,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            dockedItems: {
                xtype: 'toolbar',
                items: ['->', {
                    text: 'D/W/MAU选择',
                    menu: maumenu
                }]
            },
            items: [{
                xtype: 'label',
                id: 'id-sov-lab-mauadv',
                style: 'font-size:35px;color: #004b97',
                //text: '60%',
                listeners: {
                    afterrender: function(obj) {
                        obj.tip = Ext.create('Ext.tip.ToolTip', {
                            target: obj.getEl().getAttribute("id"),
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            html: '排重点击次数/展示',
                        });
                    }
                }
            }]
        }]
    },
    {
        xtype: 'panel',
        //frame:true,
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'center'
        },
        width: '100%',
        height: 260,
        items: [{
            xtype: 'chart',
            //width: 400,
            width: '100%',
            height: 220,
            margin: '0 30 0 30',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: me.datads,
            insetPadding: 5,
            axes: [{
                type: 'Numeric',
                fields: ['mautotal', 'maucam','mauadv'],
                position: 'left',
                grid: true,
                maximum: 300,
                minimum: 0,
                label: {
                    renderer: function(v) {
                        return v;
                    }
                }
            },
            {
                type: 'Category',
                fields: ['date'],
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: 'MAU总量',
                xField: 'date',
                yField: 'mautotal',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },
            {
                type: 'line',
                axis: 'left',
                title: 'MAU自然量',
                xField: 'date',
                yField: 'maucam',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },
            {
                type: 'line',
                axis: 'left',
                title: 'MAU推广量',
                xField: 'date',
                yField: 'mauadv',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }]
        }]
    }]
});

var dwmaupanel = Ext.create('Ext.panel.Panel', {
    collapsible: true,
    title: 'D/W/MAU概览',
    //layout: 'vbox',
    columnWidth: 0.5,
    height: 430,
    frame: true,
    items: [
        daupanel
        ,waupanel
        ,maupanel
    ]
});

waupanel.hide();
maupanel.hide();

        var lcpanel =  Ext.create('Ext.panel.Panel',{
            collapsible: true,
            title: '留存概览',
            layout: 'vbox',
            //region: 'west',
            //colspan:1,
            columnWidth:0.5,
            height:430,
            //flex:1,
            //width:'50%',
            frame:true,
            items:[{   
                xtype: 'panel',
                layout: 'hbox',
                width:'100%',
                //frame:true,
                items:[{
                    xtype: 'panel',
                    title: '留存总量', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[
                    // {
                    //     xtype:'button',
                    //     id: 'idshowpanel',
                    //     html:'展示',
                    //     tooltip: 'tooltip'
                    // },
                    //labsh
                    {
                        xtype: 'label', 
                        id:'id-sov-lab-lctotal',                   
                        style:'font-size:35px;color: #004b97',
                        //text: '1672',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'广告的展示次数',  
                                });  
                            }                          
                        }
                    }
                    ]
                },{
                    xtype: 'panel',
                    title: '留存自然量', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-lccam',
                        style:'font-size:35px;color: #004b97',
                        //text: '998',
                        listeners:{  
                            afterrender:function(obj){  
                                console.log('version:'+window.conf.version);
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'点击数据的排重数(依据设备信息)',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '留存推广量', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        id:'id-sov-lab-lcadv',
                        style:'font-size:35px;color: #004b97',
                        //text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'排重点击次数/展示',  
                                });  
                            }  
                        }
                    }]
                }]
            },{   
                xtype: 'panel',
                //frame:true,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                    },
                width:'100%',
                height:260,
                items:[
                {
            xtype: 'chart',
            //width: 400,
            width:'100%',
            height: 220,
            margin: '0 30 0 30',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: me.datads,
            insetPadding: 5,
            axes: [{
                type: 'Numeric',
                fields: ['lc1total', 'lc1cam','lc1adv'],
                position: 'left',
                grid: true,
                maximum:300,
                minimum: 0,
                label: {
                    renderer: function(v) { return v ; }
                }
            }, {
                type: 'Category',
                fields: ['date'],
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: '留存总量',
                xField: 'date',
                yField: 'lc1total',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                }
                ,
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: '留存自然量',
                xField: 'date',
                yField: 'lc1cam',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                }
                ,
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            },{
                type: 'line',
                axis: 'left',
                title: '留存推广量',
                xField: 'date',
                yField: 'lc1adv',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                }
                ,
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }
            ]
        }
        ]
            }
            ]
        });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // var idxpanel = Ext.create('Ext.panel.Panel',{
        //     layout: 'hbox',
        //     region: 'center',
        //     padding: '10 0 0 0',
        //     width: '98%'
            // items:[{
            //     xtype: 'panel',
            //     title:'title', 
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true,
            //     layout: {
            //         type: 'hbox',
            //         align: 'middle',
            //         pack: 'center'
            //     },
            //     items:[{
            //         xtype: 'label',
            //         style:'font-size:40px;color: #004b97',
            //         text:'17'
            //     }]   
            // },{
            //     xtype: 'panel',
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true
            // },{
            //     xtype: 'panel',
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true
            // },{
            //     xtype: 'panel',
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true
            // },{
            //     xtype: 'panel',
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true
            // },{
            //     xtype:'toolbar',
            //     id:'idbar',
            //     items:[{
            //         text:'选择指标',
            //         iconCls: 'bmenu',  // <-- icon
            //         menu: idxmenu
            //     }]
            // }    
            // ]
        //});

        //init idx panel
        // for (var i = 0; i < 5; i++) {  
        //     var record = idxds.getAt(i); 
        //     idxpanel.add({
        //         xtype: 'panel',
        //         title: record.get('name'), 
        //         width: 200,
        //         height: 200,
        //         bodyPadding: 10,
        //         flex: 1,
        //         frame: true,
        //         layout: {
        //             type: 'hbox',
        //             align: 'middle',
        //             pack: 'center'
        //         },
        //         items:[{
        //             xtype: 'label',
        //             style:'font-size:40px;color: #004b97',
        //             text: record.get('num')
        //         }]
        //     })
        // } 

        //init idx panel idxmenu
        // idxpanel.add({
        //         xtype:'toolbar',
        //         id:'idbar',
        //         items:[{
        //             text:'选择指标',
        //             iconCls: 'bmenu',  // <-- icon
        //             menu: idxmenu
        //         }]
        //     });

        // var idxpanel2 = Ext.create('Ext.panel.Panel',{
        //     layout: 'hbox',
        //     region: 'center',
        //     columns: 5,
        //     width: '98%'
        // });

        // var idxpanel3 = Ext.create('Ext.panel.Panel',{
        //     layout: 'hbox',
        //     region: 'center',
        //     columns: 5,
        //     width: '98%'
        // });

        // var idxpanel4 = Ext.create('Ext.panel.Panel',{
        //     layout: 'hbox',
        //     region: 'center',
        //     columns: 5,
        //     width: '98%'
        // });

        // var bodypanel = Ext.create('Ext.panel.Panel',{
        //     // layout: {
        //     //          //type: 'vbox',
        //     layout:'vbox',

            //         },
            //align: 'stretch',
            //region: 'south',
            //flex:1,
            //anchor: '100% 100%',
            //frame: true,
            //height:'100%',
            //autoHeight:true,
            //width: '100%',
            //height: '400',
            //pack: 'center',
            //scrollable: true,
            //items: [clickpanel,idxpanel,idxpanel2,idxpanel3,idxpanel4]
        //     items: [{
        //         xtype:'panel',
        //         layout:'hbox',
        //         //flex:1,
        //         width:'100%',
        //         frame:true,
        //         //scrollable: true,
        //         items:[clickpanel,
        //         activepanel
        //         ]
        //     },{
        //         xtype:'panel',
        //         layout:'hbox',
        //         flex:1,
        //         //height:'100%',
        //         frame:true,
        //         //scrollable: true,
        //         items:[chargepanel
        //         ]
        //     }]
        // });
    
        var bodypanel = Ext.create('Ext.panel.Panel',{
            // layout:{
            //     //align : 'stretch',
            //     type:'table',
            //     columns:2
            // },
            //layout:'border',
            layout: 'column',
            flex:1,
            frame: true,
            width: '100%',
            height:'100%',
            scrollable: true,
            items:[
            clickpanel
            ,activepanel
            ,chargepanelLeft
            ,chargepanelRight
            ,dwmaupanel
            ,lcpanel
            ]
        });

        this.items = [headpanel,bodypanel];
        //me.items = [clickpanel,activepanel,chargepanel];
        // me.items = [headpanel,clickpanel,
        // idxpanel,idxpanel2,idxpanel3,idxpanel4,
        // {
        //     xtype: 'chart',
        //     width: '100%',
        //     height: 410,
        //     padding: '10 0 0 0',
        //     animate: true,
        //     shadow: false,
        //     style: 'background: #fff;',
        //     legend: {
        //         position: 'right',
        //         boxStrokeWidth: 0,
        //         labelFont: '12px Helvetica'
        //     },
        //     store: this.myDataStore,
        //     insetPadding: 40,
        //     // items: [{
        //     //     type  : 'text',
        //     //     text  : '历史数据',
        //     //     font  : '22px Helvetica',
        //     //     width : 100,
        //     //     height: 30,
        //     //     x : 40, //the sprite x position
        //     //     y : 12  //the sprite y position
        //     // }
        //     // ,{
        //     //     type: 'text',
        //     //     text: 'Data: Browser Stats 2012',
        //     //     font: '10px Helvetica',
        //     //     x: 12,
        //     //     y: 380
        //     // }, 
        //     // {
        //     //     type: 'text',
        //     //     text: 'Source: http://www.w3schools.com/',
        //     //     font: '10px Helvetica',
        //     //     x: 12,
        //     //     y: 390
        //     // }
        //     //],
        //     axes: [{
        //         type: 'Numeric',
        //         fields: ['data1', 'data2', 'data3', 'data4' ],
        //         position: 'left',
        //         grid: true,
        //         minimum: 0,
        //         label: {
        //             renderer: function(v) { return v ; }
        //         }
        //     }, {
        //         type: 'Category',
        //         fields: 'month',
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
        //         title: '点击',
        //         xField: 'month',
        //         yField: 'data1',
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         },
        //         tips: {
        //             trackMouse: true,
        //             style: 'background: #FFF',
        //             height: 20,
        //             renderer: function(storeItem, item) {
        //                 var title = item.series.title;
        //                 this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
        //             }
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '排重点击',
        //         xField: 'month',
        //         yField: 'data2',
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         },
        //         tips: {
        //             trackMouse: true,
        //             style: 'background: #FFF',
        //             height: 20,
        //             renderer: function(storeItem, item) {
        //                 var title = item.series.title;
        //                 this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
        //             }
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '激活',
        //         xField: 'month',
        //         yField: 'data3',
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         },
        //         tips: {
        //             trackMouse: true,
        //             style: 'background: #FFF',
        //             height: 20,
        //             renderer: function(storeItem, item) {
        //                 var title = item.series.title;
        //                 this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
        //             }
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '自然激活',
        //         xField: 'month',
        //         yField: 'data4',
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         },
        //         tips: {
        //             trackMouse: true,
        //             style: 'background: #FFF',
        //             height: 20,
        //             renderer: function(storeItem, item) {
        //                 var title = item.series.title;
        //                 this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
        //             }
        //         }
        //    }]
        // }
        // // , {
        // //     style: 'margin-top: 10px;',
        // //     xtype: 'gridpanel',
        // //     columns : {
        // //         defaults: {
        // //             sortable: false,
        // //             menuDisabled: true,
        // //             renderer: function(v) { return v; }
        // //         },
        // //         items: [
        // //             { text: '日期', dataIndex: 'month', renderer: function(v) { return v; } },
        // //             { text: '点击', dataIndex: 'data1' },
        // //             { text: '排重点击', dataIndex: 'data2' },
        // //             { text: '激活', dataIndex: 'data3' },
        // //             { text: '自然激活', dataIndex: 'data4' }
        // //         ]
        // //     },
        // //     store: this.myDataStore,
        // //     width: '100%'   
        // // }
        // ];

        //Ext.QuickTips.init();
        //datads.reload();

        this.callParent();
    }
});
