const controller = (() => {

  eventHandler = () => {
    document.getElementById("new-joke").addEventListener("click", getNewJoke);
  };

  getNewJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(result => {
      return result.json();
    })
    .then(data => {
      document.getElementById("jokes").innerHTML = data.value;
    })
  }

  return{
    init: () => {
      console.log("App Started");
      eventHandler();
    }
  }

})();

controller.init()
