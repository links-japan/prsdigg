(self.webpackChunkprsdigg=self.webpackChunkprsdigg||[]).push([[8001,8591],{43061:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var n=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"},a=t(30076),j=function(e,s){return n.createElement(a.Z,Object.assign({},e,{ref:s,icon:r}))};j.displayName="CloseCircleFilled";var l=n.forwardRef(j)},99809:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var n=t(59968),r=t(96410),a=t(82961),j=t(28970);function l(e){return(0,n.Z)(e)||(0,r.Z)(e)||(0,a.Z)(e)||(0,j.Z)()}},82575:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return v}});t(19793);var n=t(51752),r=(t(13816),t(37744)),a=t(67294),j=t(64478),l=(t(51350),t(38272)),c=(t(13062),t(71230)),i=(t(89032),t(15746)),u=(t(75257),t(51890)),o=(t(67167),t(71577)),m=t(67823),d=t(39387),f=t(30381),h=t.n(f);function g(e){var s=e.transferType,t=(0,j.$)(),n=t.t,r=t.i18n;h().locale(r.language);var f=(0,d.plC)({variables:{transferType:s}}),g=f.data,v=f.loading,b=f.fetchMore;if(v)return a.createElement(m.Z,null);var k=g.myTransferConnection,p=k.nodes,y=k.pageInfo,z=y.hasNextPage,E=y.endCursor;return a.createElement(l.ZP,{size:"small",itemLayout:"vertical",dataSource:p,loadMore:z&&a.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},a.createElement(o.Z,{loading:v,onClick:function(){b({variables:{after:E,transferType:s}})}},n("load_more"))),renderItem:function(e){var s,t;return a.createElement(l.ZP.Item,{key:e.traceId},a.createElement(c.Z,{justify:"space-around",align:"middle"},a.createElement(i.Z,{xs:4,sm:4,md:2},a.createElement(u.C,{src:e.currency.iconUrl})),a.createElement(i.Z,{xs:0,sm:0,md:8},h()(e.createdAt).format("YYYY-MM-DD HH:mm:SS")),a.createElement(i.Z,{xs:8,sm:8,md:6},e.amount),a.createElement(i.Z,{xs:6,sm:6,md:4},n("transfer.transfer_type."+e.transferType)),a.createElement(i.Z,{xs:6,sm:6,md:4},e.snapshotId?a.createElement("a",{href:"https://mixin.one/snapshots/"+e.snapshotId,target:"_blank"},n("transfer.snapshot")):a.createElement("span",null,n("transfer.processing")))),a.createElement(c.Z,{style:{marginTop:10}},a.createElement("a",{style:{color:"#aaa"},href:"/articles/"+(null==e||null==(s=e.article)?void 0:s.uuid),target:"_blank"},null==e||null==(t=e.article)?void 0:t.title)))}})}function v(){var e=(0,j.$)().t;return a.createElement("div",null,a.createElement(r.Z,{title:e("revenue_manage")}),a.createElement(n.Z,null,a.createElement(n.Z.TabPane,{tab:e("author_transfers"),key:"author"},a.createElement(g,{transferType:"author_revenue"})),a.createElement(n.Z.TabPane,{tab:e("reader_transfers"),key:"reader"},a.createElement(g,{transferType:"reader_revenue"}))))}},46700:function(e,s,t){var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":15596,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":15596,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var s=a(e);return t(s)}function a(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=46700},56982:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var n=t(67294);function r(e,s,t){var r=n.useRef({});return"value"in r.current&&!t(r.current.condition,s)||(r.current.value=e(),r.current.condition=s),r.current.value}}}]);
//# sourceMappingURL=8001-98435fb3e2ebe5bb99e2.chunk.js.map