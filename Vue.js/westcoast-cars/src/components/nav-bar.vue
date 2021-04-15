<template>
  <header>
    <nav id="main-nav">
      <div class="container">
        <h1 class="logo">WestCoast Cars</h1>
        <ul>
          <li><router-link to="/">Start</router-link></li>
          <li><router-link to="/about">Om oss</router-link></li>
          <li><a href="sales.html">Bilar</a></li>
          <li><router-link to="/leasing">Leasing</router-link></li>
          <li><router-link to="/vehicles">Admin</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
  /* Navigation */
  #main-nav {
    background: #f4f4f4;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  #main-nav .container {
    display: grid;
    grid-template-columns: 4fr 5fr;
    padding: 1rem;
    align-items: center;
  }

  #main-nav ul {
    justify-self: end;
    display: flex;
  }

  #main-nav ul li a {
    padding: 0.7rem;
    font-weight: bold;
  }

  #main-nav ul li a.active {
    background: var(--primary-color);
    color: var(--light-color);
  }

  #main-nav ul li a:hover {
    background: var(--light-color);
    color: var(--dark-color);
  }

  #main-nav .social {
    justify-self: center;
  }

  #main-nav .social i {
    color: #666;
    margin-right: 0.5rem;
  }
</style>
