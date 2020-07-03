<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
            <b-navbar-brand href="#" class="notable">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" class="roboto" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                    <b-nav-item href="#">
                        <router-link class="nav-link" to="/">Artistas</router-link>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <router-link class="nav-link" to="/articulos">Articulos</router-link>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <router-link class="nav-link" to="/administracion">Administración</router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.notable{
    font-family: 'Notable', sans-serif;
}

.roboto {
    font-family: 'Roboto', sans-serif;
}

$info: #433edf;

@import url('https://fonts.googleapis.com/css2?family=Notable&family=Roboto&display=swap');
@import '../../node_modules/bootstrap/scss/bootstrap.scss'; 
</style>