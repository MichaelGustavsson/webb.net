<template>
  <header>
    <nav id="main-nav">
      <div class="container">
        <h1>Westcoast Cars</h1>
        <ul>
          <li><router-link to="/">Hem</router-link></li>
          <li><router-link to="/about">Om Oss</router-link></li>
          <li><router-link to="/sales">Bilar</router-link></li>
          <li><router-link to="/leasing">Leasing</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default { name: 'NavBar' };
</script>

<style scoped>
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
