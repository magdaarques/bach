#Notes
https://github.com/geikha/hyper-hydra?tab=readme-ov-file 

##intro

imatges de la partitura en el github.
(connectant en la nanokontrol)[https://github.com/ojack/hydra-standalone/blob/master/docs/midi.md]


1 - PROGRAMA

a.show()
//s0.initScreen()
s0.initCam()
s1.initImage("https://raw.githubusercontent.com/magdaarques/bach/main/bach_fuga_00.jpg")
s2.initImage("https://raw.githubusercontent.com/magdaarques/bach/main/bach_fuga_01.jpg")
s3.initImage("https://raw.githubusercontent.com/magdaarques/bach/main/bach_fuga_03.jpg")

//intro captura applicació text edit en el programa llançat desde obs en app oberta. Text edit en el programa llançat desde obs en app oberta.

src(s0)
  .modulateScrollX(noise(3).shift(0,0.05).pixelate(8,8),0.1)
  .modulateScrollY(noise(10).thresh(0,0.05).pixelate(8,8),0.1)
  .layer(src(s0).invert( ).contrast(()=>(cc[0]*6.28)-3.14).mask(osc(1,2,10)).scale(1,22/16/(5/3))).modulate(o0, ()=>(cc[1]*6.28),() => a.fft[0] * 1.3)
  .out(o0)
render(o0)

2 - IMATGES


part 1 imatges partitures - B/N

s0.initImage("https://raw.githubusercontent.com/magdaarques/bach/main/bach_fuga_00.jpg") 
s1.initImage("https://raw.githubusercontent.com/magdaarques/bach/main/bach_fuga_01.jpg") 
s2.initImage("https://raw.githubusercontent.com/magdaarques/bach/main/bach_fuga_02.jpg") 

//src(o0).scale(1.01).layer(
//src(s0).scale(1,9/16)
  //.invert().luma().invert()).out(o0)
//render(o0)
//osc(6,.2,.1).thresh(.2,0).modulate(src(s0).add(gradient()),1).scale(1,9/16).out(o1)
osc(6,.2,.1).thresh(.2,0).modulate(src(s0),.9,1).scale(1,9/16).out(o1)

//src(s1).scale(1,9/16).mask(o1).out(o0)
src(o0).invert().scale(1.01).saturate(1.2)
  .modulate(osc(6,.0,1.5).brightness(-.5).modulate(
  noise(5).add(gradient()),1),.003
).layer(
src(s0).thresh().mask(o1).luma(.29).invert([0,1]).scale(2,9/16)).out(o0)

part 2



3 - CÀMERA SOROLL ONA

//camera 
s0.initCam(1)
osc([3,5,6,7], 0.9, 0.001)
    .kaleid([3,4,5,7,8,9,10].ease(0.1))
    .color(()=>a.fft[0]* .1, ()=>a.fft[0]* [0.1,.5,.8])
    .colorama(0.4)
    .rotate(()=>a.fft[0]* -0.001 )
    .modulateRotate(s0,()=>a.fft[1] * 0.003)
    .modulate(s0, 0.9,()=>Math.sin(time)*.10)
    .modulateScale(o0,0.9)
    .out(o0)
