//Functions

 //Bassic Function Syntax
      function myFunc(){
            let a=5;
            return a;
      }
      myFunc();//ithan function call cheythekkunnath

// FUnction with parameter
      function myFunction(z){
            let  a=5;
            let b=z;
            let c=a+b;
            return c;
      }
      myFunction(10);

// Arrow Function 
 /* Now a day most poppulat is Arrow function 
 function name = (parameter) => retuen parameter
 */
myFuctin = (c) =>{
      return c;
}

// Objects
   /*
    Object main ayyt use cheyunnath variables nammal oronnum perukki ann
    ezhuthunnath athin motham oru block ayyt ezhuthunnath ann objects,
    for exaple user details full orumich onnil set akkam,
    object use cheythal at a time full display cheyam loop use cheyth ,
    object call cheyunnath " object name.variable name " or
    allel motham kittan oject name mathram kodutha maathy
    */
    let myObject={
      name :"aron",
      DOB :"19-06-98"
    };//let objectname ={ variablename:"value",variablename:"value",};

// Object Methods
    //key : value
    myObject.name ="Jose";//Edit
    delete myObject.name;//Delete


// Aarray in JavaScript
    /*
    Array not a key and value paire it is indexx based to store tha vlaues
     */
    let myArray =["test",25,"value"]

// String Method
    let a="Aron Jose e" ;
      /*"a" enna variable 'Aron Jose' enna String eduth athinde length edukkan .
      "variablename.length" (Eg:a.length).
      a.indexOf() use cheyunnath eth position ulla characher position find out cheyan ann.
      */
     console.log(a.length);
     console.log(a.indexOf(J));
     console/log(a.lastIndexOf(e)); //last ezhuthiya characher edukku like "e".
     let b = a.slice(0,6);//ith pole ellam ezhutham like length,indexOf,LastindexOf,search,include..
     console.log(b);//slice use cheyth index 0 to 6 word print cheyan.

// Number Method
    let aa = "15";
    let bb = 15;
    console.log(parseInt(aa));//"a" string ann set akki ekkunnath athinde integer akkunnu
     /*
     "parseInt(aa)" : String to integer
     "bb.toString()" :Integer to String
      */

// Array Methods
    let Array=["a","b","c","d"];
    Array[0]="g";//Array Update ,0 index value mari g akum.
    Array.push("H");//"push()" enna method use cheyth array new vvalue add cheyunne.
    Array.unshift("H");//Array ettavum first pppostion "H" varum.
    Array.pop();//last position value will removed,No value need to remove.
    Array.shift();//Fist value will removed.
    Array.splice(0,1);//nammak istam ulla position value remove cheyan index value 0 to 1.
    Array.splice(2,0,"r","t");//index 2 is the value postion where to add and 0 indicate that not delete value,then add values
   let newArray = Array.slice();//slice function new array creat cheyth athil value store cheyum.
    //slice use cheyunnath kond index vecha store cheyunne ,So once value onn vende "slice(1)" first index thot stor akum.
    Array.sort();//Array sort cheyam.
    Array.reverse();//Array reverse cheyth ezhutham.

// If Statement
    //Syntax
      if(condition){

      }else{

      }
    //if else if
      if(condition){

      }else if(condition){

      }else{

      }
//Eg:
      let aronAge=24;
      if(aronAge ===30){
            console.log("not an age of aron");
      }else if(aronAge>=20 && aronAge<=10){
            console.log("age of aron");
      }else{
            console.log("age");
      }

// switch Statement
      let Fruites="Apple";
      switch(Fruites){
            case"Apple":
                  console.log("it is Apple");
            break;
            case"Banana":
                  console.log("It is Banana");
            break;
            default :
                  console.log("default");
      }

//Loop
     //For Loop
            let count=10;
            for(let i=0;i<=10;i++){
                  console.log(i);
            }
      //While loop
            let c=0;
            while(c<=10){
                  console.log(c);
                  c++;
            }

            //next case
            let co=10;
            while(co<=10){
                  console.log(co);
                  break;//check cheyth value mathram print cheyum infinite loop akulla
            }

      //DO While
            let t=0;
            do{
                  console.log(t);
                  t++;
            }while(t<=10);