/*Spread Operators
   Ith main ayyt use cheyunnath oru varibalil store cheythekkunna object values vere oru variable store cheyunnu 
   aa new variable value change vanna ath mothathil bathikkum angane varathe irikkan "spread operators" use cheynnu
    "{...VariableName}" ingane cheyubol athinde copy mathre keru.orginal still constant ann */
    const Player ={
      Name:"Aron",
      Age:24,
      waite:48.3
    };
      const Player1 = {...Player};//spread Operator
      const player1 =Object.assign({},Player);//object model
    Player1.waite=54;//edit 

/* Array using in spread Operator,concantination and push */
      const global=["aron","gisna","joseme","Sis"];
      const global2=["jjose","lissamma","amod","adarsh"];

      const play=global.concat(global2);//pokkathe rand array concant cheyth otta aarray akum.
      const play1=[...global,global2];//this two Array are used to sinle using Spread operator.
      const play2=[...global, "peter"];//push operator.


/* Array Destructuring */
      const arry=["hellow","hi","pooi"];
      const [first,second,third]=arry;
      console.log(first);//index value kodukkathe first,second,third koduthal mathy.

/*Object Destructuing */
      const desobject={
            id:0,
            name:"aron",
            age:45
      };
      const{name,id,age}=desobject;//Array pole ivide pattulla karanam avide index ann,
                                    //evide key value paire ann,so same key kodukkanam.


/*Arrow function  */
      const func=(value)=>value+5;//single line annel return illathe edukkam.

/*Object in Array */
      const object=[
            {
                  id:0,
                  name:"aron",
            },
            {
                  id:1,
                  name:"gisna"           
             },
      ];
      object.forEach((value,index,array)=>{
            console.log(value.name);
            console.log(index);
            console.log(array);
      });
 //forEach same Array return cheyuvann

//  Map method 
//  vere oru array return cheyuvann so vere oru new arry set cheythann map method set akkunnath.
      const object1=[
            {
                  id:0,
                  name:"aron",
                  age:20
            },
            {
                  id:1,
                  name:"gisna",
                  age:25           
            },
            {
                  id:2,
                  name:"gisna1",
                  age:20           
            },
      ];
      const newArrayobject=object1.map((value)=>value.name);
      console.log(newArrayobject);

// filter method
      const newfilterarray=object1.filter((value)=>value.age===20 && value.id===1);//20 age ullath mathram print cheyum
            //athpole multiple values check cheyan sathikkum.
      console.log(newfilterarray);

// Reduce Method
      /* Reduce method main ayyt use cheyunnath oru array values add cheyunnathinn okke ann */
      const addArray=[10,15,20,25,30];
     // Eg:
            let total=0;
            for(let i=0;i<addArray.length;i++){
                  document.write(total[i]);
            }//ith ann normal method But JavaScript advace ayyt ithine minimise cheyth Reduce method use cheyunnu.

      const newAddArray=addArray.reduce((total,value,index,array)=>total+value,0);//"total" variable ann reduce method
      //4 parameter carry cheyum values,index,full array and a variable.


//Find Method
      /* 
      Find method main ayyt use cheyunnath oru 
      example vech paranjal oru array of object und athil onn mathram eduth print cheyanam  
      vere onnum venda  athinn find methos use cheyanm
      */
      const object2=[
            {
                  id:0,
                  name:"aron",
                  age:20
            },
            {
                  id:1,
                  name:"gisna",
                  age:25           
            },
            {
                  id:2,
                  name:"gisna1",
                  age:20           
            },
      ];
      const findobject=object2.find((value)=>value.name==="aron");

// Sort method
const sortArray=[10,15,20,5,25,30];
sortArray.sort();//evide sort first kidakunnathe nokku 10nth position nokkulla soo sort currect akulla
console.log(sortArray);
const arraysort=sortArray.sort((a,b)=>a-b);//"a"first position and "b" is the second position this is the accesinding order
const arraysort1=sortArray.sort((a,b)=>b-a);//decending order.


//High Order method ellam chain cheyam
const newArrayobject1=object1.map((value)=>value.name).filter((value)=>value.age===20).reduce((total,value)=>total+value,0);


// Flate Array concept
      /* A single array conttains nest array so we use flate()method */
      arrayName.flat(Infinity);//"infinity" enna parameter kodutha ethra nest array undelum set ayy single ara ayy kanikkum. 
