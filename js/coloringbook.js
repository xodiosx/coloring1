

function setGradient() {

//thick_mode();

setTimeout("fade_out(1);",100)
    var x = document.getElementById("color");
var defaultVal = x.defaultValue;
ctx_sketch.strokeStyle = x.value;
selected_color =  x.value;
}
function init(){screen_width=500,screen_height=850
var e='<img src="https://xodiosx.github.io/coloring1/images/choosepic.png" style="width:500px;margin-top:3px;"><table style="width:100%;"><tr>',t=0
for(var o in pics)e+='<td class="frontpage_td"><img src="https://xodiosx.github.io/coloring1/images/'+pics[o]+'.png" style="max-width:60px;height:100px;cursor:pointer;" onclick="load_pic('+o+');"></td>',t++,3==t&&(t=0,e+="</tr><tr>")
e+="</tr></table>",mobile||(e+='<span class="large orange button" style="margin-top:17px;" onclick="show_embed();" id="embed_button">Click here to add this to your website/blog</span><div id="embed_code" style="display:none;font-size:27px;">Copy and paste the code below:<br><input type="text" style="width:460px;font-size:21px;" value="<iframe src=&quot;//funhtml5games.com?embed=eastercoloring&quot; style=&quot;width:410px;height:640px;border:none;&quot; frameborder=&quot;0&quot; scrolling=&quot;no&quot;></iframe>" onclick="this.select();"></div>'),document.getElementById("frontpage_div").innerHTML=e,document.getElementById("loading_div").ontouchmove=ce,document.getElementById("frontpage_div").ontouchmove=ce,document.getElementById("icons_div").ontouchmove=ce,document.getElementById("bottom_panel").ontouchmove=ce,canvas_width=screen_width,canvas_height=screen_height-40,document.getElementById("main_div").style.width=screen_width+"px",document.getElementById("main_div").style.height=screen_height+"px",init_sketch(),document.getElementById("color_selector_container").style.width=canvas_width+"px"
var n=""
for(var o in colors)n+='<div style="display:inline-block;height:45px;background:'+colors[o]+';"><img src="images/crayon_down.png" style="width:19.9px;cursor:pointer;" onclick="select_color(\''+colors[o]+'\', this);" id="crayon_'+o+'"></div>'
document.getElementById("color_selector").innerHTML=n,window.scrollTo(0,1),resize_screen(),window.onresize=resize_screen,document.getElementById("main_div").style.display="block",document.getElementById("loading_div").style.display="block",setTimeout("fade_out(1);",3e3)}function show_embed(){fade_out(e)
}function fade_out(e){document.getElementById("loading_div").style.opacity=e>.05?e:0,e-=.05,e>=0?setTimeout("fade_out("+e+");",50):document.getElementById("loading_div").style.display="none"}function load_pic(e){select_color(colors[5],document.getElementById("crayon_5")),document.getElementById("main_div").style.display="block",draw_mode(!0),bg_image=new Image,bg_image.onload=init_page,bg_image.src="images/"+pics[e]+".png"}function resize_screen(){viewport_size=get_viewport()
var e=screen_width,t=screen_height
game_area_width=viewport_size[0],game_area_height=viewport_size[1],screen_zoom=(game_area_height-0)/t,e*screen_zoom>game_area_width&&(screen_zoom=(game_area_width-0)/e),document.getElementById("main_div").style.transform="scale("+screen_zoom+", "+screen_zoom+")",document.getElementById("main_div").style.transformOrigin="left top",game_area_left=0}function get_viewport(){var e,t
return void 0!==window.innerWidth?(e=window.innerWidth,t=window.innerHeight):void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!=document.documentElement.clientWidth?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):(e=document.getElementsByTagName("body")[0].clientWidth,t=document.getElementsByTagName("body")[0].clientHeight),[e,t]}function select_color(e,t){selected_crayon&&(selected_crayon.src="images/crayon_down.png"),t.src="images/crayon_up.png",selected_crayon=t,selected_color=e,ctx_sketch.strokeStyle=selected_color}function init_page(){canvas_bg=document.getElementById("canvas_bg"),ctx_bg=canvas_bg.getContext("2d"),canvas_bg.width=canvas_width,canvas_bg.height=canvas_height,ctx_bg.drawImage(bg_image,0,0),ctx_bg.strokeRect(0,0,canvas_width,canvas_height),canvas_inlines=document.getElementById("canvas_inlines"),ctx_inlines=canvas_inlines.getContext("2d"),canvas_inlines.width=canvas_width,canvas_inlines.height=canvas_height,document.getElementById("frontpage_div").style.display="none",fill_mode(true)}function main_menu_pre(e){e&&(document.getElementById("popup_div").innerHTML='Return to main menu?<br><span class="large orange button" onclick="main_menu();">OK</span>&nbsp;&nbsp;<span class="large orange button" onclick="main_menu_pre(false);">CANCEL</span>'),document.getElementById("popup_div").style.display=e?"block":"none"}function main_menu(){document.getElementById("popup_div").style.display="none",ctx_sketch.clearRect(0,0,canvas_width,canvas_height),document.getElementById("frontpage_div").style.display="block"}function inlines_mode(){inline_mode=!inline_mode,document.getElementById("inlines_icon").style.borderColor=inline_mode?"#f00":"#fff",inline_mode?floodfill_mode&&fill_mode():ctx_sketch.strokeStyle=selected_color}function draw_mode(e){e&&(ctx_sketch.strokeStyle=selected_color)}function thick_mode(){if(floodfill_mode)return fill_mode(false);pen_width=ctx_sketch.lineWidth,pen_width+=2,pen_width>14&&(pen_width=6),ctx_sketch.lineWidth=pen_width,update_thick_inner()}function update_thick_inner(){var e=ctx_sketch.lineWidth
document.getElementById("thick_inner").style.borderWidth=e/2+"px",document.getElementById("thick_inner").style.marginTop=-(e/2)+"px",document.getElementById("thick_inner").style.marginLeft=-(e/2)+"px"}function fill_mode(){floodfill_mode=!floodfill_mode,document.getElementById("fill_icon").style.borderColor=floodfill_mode?"#f00":"#fff",floodfill_mode&&inline_mode&&inlines_mode()}function floodfill(e,t,o,n,c,i,a){o={r:hexToR(o),g:hexToG(o),b:hexToB(o),a:255}
var s=ctx_bg.getImageData(0,0,c,i),d=s.data,l=n.getImageData(0,0,c,i)
flood_data=l.data
var _,r,u=d.length,m=[],h=4*(e+t*c),g=h,f=h,p=4*c,v=[d[h],d[h+1],d[h+2],d[h+3]],y=d[h]+d[h+1]+d[h+2]+d[h+3]
if(!pixelCompare(h,v,y,o,d,u,a)||v[3]>50)return!1
for(m.push(h);m.length;)if(h=m.pop(),pixelCompareAndSet(h,v,y,o,d,u,a)){for(g=h,f=h,r=parseInt(h/p)*p,_=r+p;r<(f-=4)&&pixelCompareAndSet(f,v,y,o,d,u,a););for(;_>(g+=4)&&pixelCompareAndSet(g,v,y,o,d,u,a););for(var x=f;g>x;x+=4)x-p>=0&&pixelCompare(x-p,v,y,o,d,u,a)&&m.push(x-p),u>x+p&&pixelCompare(x+p,v,y,o,d,u,a)&&m.push(x+p)}n.putImageData(l,0,0)}function pixelCompare(e,t,o,n,c,i,a){return 0>e||e>=i?!1:0===c[e+3]?!0:c[e+3]>100?!1:t[3]===n.a&&t[0]===n.r&&t[1]===n.g&&t[2]===n.b?!1:t[3]===c[e+3]&&t[0]===c[e]&&t[1]===c[e+1]&&t[2]===c[e+2]?!0:Math.abs(t[3]-c[e+3])<=255-a&&Math.abs(t[0]-c[e])<=a&&Math.abs(t[1]-c[e+1])<=a&&Math.abs(t[2]-c[e+2])<=a?!0:!1}function pixelCompareAndSet(e,t,o,n,c,i,a){if(pixelCompare(e,t,o,n,c,i,a))return flood_data[e]=c[e]=n.r,flood_data[e+1]=c[e+1]=n.g,flood_data[e+2]=c[e+2]=n.b,flood_data[e+3]=c[e+3]=n.a,!0
for(var s=-1;1>=s;s++)for(var d=-2;2>=d;d++)flood_data[e+4*s+d*(4*canvas_width)]=n.r,flood_data[e+1+4*s+d*(4*canvas_width)]=n.g,flood_data[e+2+4*s+d*(4*canvas_width)]=n.b,flood_data[e+3+4*s+d*(4*canvas_width)]=n.a
return!1}function hexToR(e){return parseInt(cutHex(e).substring(0,2),16)}function hexToG(e){return parseInt(cutHex(e).substring(2,4),16)}function hexToB(e){return parseInt(cutHex(e).substring(4,6),16)}function cutHex(e){return"#"==e.charAt(0)?e.substring(1,7):e}function download_pic(e){ctx_inlines.fillStyle="#ffffff",ctx_inlines.fillRect(0,0,canvas_width,canvas_height),ctx_inlines.drawImage(canvas_sketch,0,0,canvas_width,canvas_height),ctx_inlines.drawImage(bg_image,0,0,canvas_width,canvas_height)
var t=canvas_inlines.toDataURL()
e.href=t,e.download="coloringbook.png"}function print_pic(){window.print()}function leftClick(e){return window.focus(),e||(e=event),void 0===e.which?1==e.button:1==e.which||0==e.button}function nrc(e){return 0==leftClick(e)?ce(e):void 0}function cp(e){e||(e=event),e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&(e.cancelBubble=!0)}function ce(e){return e||(e=event),void 0!==e.preventDefault?e.preventDefault():void 0!==e.cancelBubble&&(e.returnValue=0,e.cancelBubble=!0),!1}function init_sketch(){/\d/.test(location.host)&&(canvas_sketch=document.getElementById("canvas_sketch"),canvas_sketch.width=canvas_width,canvas_sketch.height=canvas_height,ctx_sketch=canvas_sketch.getContext("2d"),ctx_sketch.lineWidth=8,ctx_sketch.strokeStyle="#000000",ctx_sketch.globalAlpha=1,ctx_sketch.shadowBlur=0,ctx_sketch.shadowColor="#000000",update_thick_inner(),bg_div=document.getElementById("background_div"),bg_div.onmousedown=mouse_start,bg_div.onmouseup=mouse_end,bg_div.onmousemove=mouse_move,bg_div.ontouchstart=touch_start,bg_div.ontouchend=touch_end,bg_div.ontouchmove=touch_move)}function move_cursor(){
setTimeout("fade_out(1);",100)
,
ctx_sketch.beginPath(),ctx_sketch.moveTo(draw_x,draw_y),ctx_sketch.lineTo(cursor_x,cursor_y),ctx_sketch.lineCap="round",ctx_sketch.stroke(),cursor_x=draw_x,cursor_y=draw_y}function touch_start(e){if(e.preventDefault(),touch_x=cursor_x=parseInt(e.touches[0].pageX/screen_zoom),touch_y=cursor_y=parseInt(e.touches[0].pageY/screen_zoom-screen_y),cursor_x_drag=touch_x+parseInt(bg_div.style.left),cursor_y_drag=touch_y+parseInt(bg_div.style.top),drag_start_left=parseInt(bg_div.style.left),drag_start_top=parseInt(bg_div.style.top),e.touches.length>1&&(scaling=e.touches.length),!inline_mode||floodfill_mode||eraser)floodfill_mode&&floodfill(touch_x,touch_y,selected_color,ctx_sketch,canvas_width,canvas_height,0)
else{ctx_inlines.clearRect(0,0,canvas_width,canvas_height),floodfill(touch_x,touch_y,selected_color,ctx_inlines,canvas_width,canvas_height,0)
var t=ctx_sketch.createPattern(canvas_inlines,"repeat")
ctx_sketch.strokeStyle=t}}function touch_move(e){if(e.preventDefault(),zoom_enabled){var t=e.touches[0],o=e.touches[1]
if(t&&o){var n=getDistance({x:t.clientX,y:t.clientY},{x:o.clientX,y:o.clientY})
lastDist||(lastDist=n),scale=bg_div.style.zoom*(n/lastDist),1>scale&&(scale=1),scale>4&&(scale=4),bg_div.style.zoom=scale,lastDist=n}else if(0==scaling){var c=e.touches[0].pageX/scale-cursor_x_drag,i=e.touches[0].pageY/scale-cursor_y_drag
bg_div.style.left=drag_start_left+c+"px",bg_div.style.top=drag_start_top+i+"px"}}else floodfill_mode||(touch_x=parseInt(e.touches[0].pageX/screen_zoom),touch_y=parseInt(e.touches[0].pageY/screen_zoom-screen_y),draw_x=touch_x,draw_y=touch_y,move_cursor())}function touch_end(e){return floodfill_mode?void floodFill(touch_x,touch_y,ctx_sketch,selected_color,15):(scaling=e.touches.length,void(lastDist=!1))}function get_mouse_pos(e){e.preventDefault(),null!=e.pageX&&(mouse_x=e.pageX),null!=e.pageY&&(mouse_y=e.pageY),mouse_x=Math.floor(mouse_x/screen_zoom),mouse_y=Math.floor(mouse_y/screen_zoom)-screen_y}function mouse_start(e){if(get_mouse_pos(e),cursor_x=mouse_x,cursor_y=mouse_y,!inline_mode||floodfill_mode||eraser)floodfill_mode?floodfill(mouse_x,mouse_y,selected_color,ctx_sketch,canvas_width,canvas_height,0):mouse_down=!0
else{ctx_inlines.clearRect(0,0,canvas_width,canvas_height),floodfill(mouse_x,mouse_y,selected_color,ctx_inlines,canvas_width,canvas_height,0)
var t=ctx_sketch.createPattern(canvas_inlines,"repeat")
ctx_sketch.strokeStyle=t,mouse_down=!0}}function mouse_move(e){return mouse_down?(get_mouse_pos(e),draw_x=mouse_x,draw_y=mouse_y,void move_cursor()):!1}function mouse_end(e){mouse_down=!1}function getDistance(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}var floodfill_mode=!1,inline_mode=!1,zoom_enabled=!1,bg_image=!1,screen_width=768,screen_height=1024,current_tool=0,selected_color="#00ff00",selected_crayon=!1,canvas_bg=!1,ctx_bg=!1,eraser=!1,canvas_width=!1,canvas_height=!1,pics=["easter1","easter2","easter3","easter4","easter5","easter6","easter7","easter8","easter9","easter10","easter11","easter12","easter13","easter14","easter15","easter16","easter17","easter18","easter19","easter20","easter21"],colors=["#ffffff","#8b4513","#800000","#f40000","#ff4500","#ffa500","#ffff00","#9acd32","#00ec00","#008000","#00fa9a","#20b2aa","#00ffff","#00bfff","#0000ff","#000080","#4b0082","#8b008b","#ee82ee","#bc8f8f","#ffc0cb","#ffe4c4","#f5f5f5","#808080","#000000"],deviceAgent=navigator.userAgent.toLowerCase(),iOS=deviceAgent.match(/(iphone|ipod|ipad)/)
void 0!==document.oncontextmenu?document.oncontextmenu=ce:document.onclick=nrc,void 0!==document.ondragstart&&(document.ondragstart=ce)
var IE=/Trident|MSIE|Edge/i.test(navigator.userAgent),mobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),flood_data=!1,cursor_x=0,cursor_y=0,draw_x=cursor_x,draw_y=cursor_y,screen_y=74,mouse_down=!1,drag_start_left=0,drag_start_top=0,cursor_x_drag=0,cursor_y_drag=0,scaling=0,lastDist=0,scale=1,touch_length=0,bg_div=!1,canvas_sketch=!1
