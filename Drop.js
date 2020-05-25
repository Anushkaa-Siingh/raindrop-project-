class Drop{
constructor(x,y){
this.xposition=x
this.yposition=y
this.radiusX=4
this.radiusY=10




}
display(){
ellipse(this.xposition,this.yposition,this.radiusX,this.radiusY)
}
fall(){
this.yposition=this.yposition+10
if(this.yposition>800){
    this.yposition=0

}
stroke(241, 45, 255)
}
}
