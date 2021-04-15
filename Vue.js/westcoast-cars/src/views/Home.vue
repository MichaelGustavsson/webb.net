<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div> -->
  <header id="main-display">
      <div class="container">
        <div class="main-display-container">
          <div class="main-display-content">
            <h1>Vår utställning</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              voluptatem laborum suscipit odio veritatis? Quia tempore
              reiciendis esse alias totam delectus illo magni repellat
              consequuntur! Laudantium cupiditate atque fuga quis nostrum
              adipisci obcaecati rerum. Illo in sit quasi. Blanditiis maiores
              vitae ratione molestiae laboriosam illum in ea omnis placeat
              veritatis!
            </p>
            <a href="sales.html" class="btn btn-secondary">Läs mer</a>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>

<style>
  #main-display{
    color: #fff;
    background: #333;
    padding: 2rem;
    position: relative;
  }

  #main-display:before {
    content: '';
    background: url('../assets/cars.jpg') no-repeat center center/cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }

  #main-display .main-display-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    height: 50vh;
  }

  #main-display .main-display-content {
    z-index: 1;
  }

  #main-display .main-display-content p {
    margin-bottom: 1rem;
  }
</style>