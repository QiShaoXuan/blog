let grandFather = {
  father:{
    son:function(){
      console.log(this)
    }
  }
}

let grandMother = {
  mother:{
    daughter:()=>{
      console.log(this)
    }
  }
}

grandMother.mother.daughter()
