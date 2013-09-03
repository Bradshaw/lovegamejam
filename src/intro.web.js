var scroll = 0;
var raise = height;
var spart = [];
var fps = 0;
width = 80;
height = 35;

function pTh(percent){
	return (percent/100)
}

ascwar.update = function(dt){
	fps = (1000/dt)
    dt = Math.min(dt,1000/20);
    if (splotch.age>5)
    	newSplotch();
    splotch.age += dt*0.01;
	scroll+=0.01*dt;
	raise = Math.max(1,raise-0.01*dt)
}

function drawSplotch(){
	if (splotch.age>0)
		ascwar.circle(splotch.x,splotch.y,(splotch.age*splotch.age)/5,"*");

}

function newSplotch() {
	splotch = {};
	splotch.x = Math.random()*width;
	splotch.y = Math.random()*height;
	splotch.age = -Math.random()*15;
}

newSplotch();

ascwar.draw = function(dt){

	//ascwar.setColour(10,20,30);
	ascwar.setColour(25,35,45);
	ascwar.setNeutral(" ")
	ascwar.clearScreen();
	var ligt= false;

	ascwar.setColour(240,160,170);
	ascwar.circle(width/2,18,25+Math.sin(scroll/7)*5,"-");
	ascwar.circle(width/2,18,15+Math.sin(scroll/7)*5,"=");
	ascwar.circle(width/2,18,5+Math.sin(scroll/7)*5,"#");


	ascwar.setColour(240,150,170);
	drawSplotch();


	var r = 5;
	var xoff = 37;
	ascwar.setColour(180,80,90);
	ascwar.text(width/2-xoff,raise+(r++), "   _                                                                      "," ");
	ascwar.text(width/2-xoff,raise+(r++), "\\_|_)                    () |                        /\\                   "," ");
	ascwar.text(width/2-xoff,raise+(r++), "  |     __        _      /\\/| __,   _  _  _    _    |  |  __,   _  _  _   "," ");
	ascwar.text(width/2-xoff,raise+(r++), " _|    /  \\_|  |_|/     /   |/  |  / |/ |/ |  |/    |  | /  |  / |/ |/ |  "," ");
	ascwar.text(width/2-xoff,raise+(r++), "(/\\___/\\__/  \\/  |__/  /(__/ \\_/|_/  |  |  |_/|__/   \\_|/\\_/|_/  |  |  |_/"," ");
	ascwar.text(width/2-xoff,raise+(r++), "                                                      /|                  "," ");
	ascwar.text(width/2-xoff,raise+(r++), "                                                      \\|                  "," ");
	r+=3;
	ascwar.setColour(220,120,130);
	centerText(raise+(r++),",d88b.d88b, "," ");
	centerText(raise+(r++),"88888888888 "," ");
	centerText(raise+(r++),"`Y8888888Y' "," ");
	centerText(raise+(r++),"  `Y888Y'   "," ");
	centerText(raise+(r++),"    `Y'     "," ");
	r+=3;
	ascwar.setColour(180,80,90);
	centerText(raise+(r++),"Love Game Jam is a tool for jammers"," ")
	centerText(raise+(r++),"Currently in development, we're hoping for a prototype shortly"," ")
	r+=2;
	centerText(raise+(r++),"( We love you! )"," ")
    

	/*
	ascwar.setColour(170,150,160);
	ascwar.box(0,0,width,height,"+",'-','|');
	ascwar.text(3,0,"+ Love Game Jam v0.0 +")
	ascwar.text(width/2-29,height-1,"#######+ Kevin \"Gaeel\" Bradshaw - 2013 - YoinkPL +",'#')
	*/
}

function centerText(line,text,ignore){
	var off = (text.length)/2;
	ascwar.text((width/2)-off,line,text,ignore);
}

console.log("loaded");