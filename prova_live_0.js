
 
 // Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
//a.setScale(.5)
//a.setBins(1)
s0.initCam(0)
osc(6,.3,()=>cc[0]*10)
	//.luma(()=>cc[3]/10)
	//.shift(.5)
  	.modulateRotate(src(o0).repeat(2,()=>cc[4]), ()=>a.fft[0])
  .out(o0)

osc(()=>cc[21],()=>cc[22]/.05.ease(),()=>cc[23]*10)
  	.kaleid([3,4,5,6],.8)
	.modulate(src(o0),()=>cc[16]*10, ()=>cc[17]*12)
	.scale(()=>cc[3]*.2)
	.repeatX(()=>Math.sin(time)*.5)
	.out(o1)

src(o1)
	.modulate(o1,5,10).diff(o0,()=>a.fft[1]*.5)
  	.layer(shape([4,3,999],.2,.9).scale(src(o1),.3)
           .mask(o0,()=>cc[20])	.colorama(.2,.9))
  	.out(o2)

src(o1)
	.modulateRotate(o0,2,time/.8 + (time))
	.colorama(()=>cc[19], ()=>cc[20])
  	.modulateScrollX(o2,()=>cc[6])	
  .out(o3)
render(o2)

