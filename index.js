let chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes:[
      'Chuck Norris counted to infinity... Twice.',
      'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
    ],
    displayInfo: function() {
      console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
    },
    getAge: function() {
        console.log(this.birthDate)
        return this.birthDate
    },
    addJoke: function(joke){
        this.jokes.push(joke)
    },
    getRandomJoke: function() {
        return this.jokes[Math.floor(Math.random()*this.jokes.length)]
    },
    getRandomJokeFromApi:  async () => {
        //let joke = await fetch('https://api.chucknorris.io/jokes/random').then(res=>res.json())
        axios.get('https://api.chucknorris.io/jokes/random').then((joke)=>{
            console.log(joke.data.value)
        })

    }
  }
  

  async function callApi() {
    let joke = await axios.get('https://api.chucknorris.io/jokes/random') 
    console.log(joke)
  } 

  function traditionalCallApi(){
    axios.get('https://api.chucknorris.io/jokes/random').then((joke)=>{
        console.log(joke.data.value)
    })
 }



  chuck.displayInfo();
  
  console.log('getAge', chuck.getAge()) ; // Should return 79 if you are in 2019
  
  chuck.addJoke('Chuck Norris can divide by zero.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris kills flies with his gun.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  console.log(chuck.getRandomJokeFromApi()) 
  chuck.displayInfo();