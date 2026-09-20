<template>
    <section class="home">
        <video 
        src="@/assets/background/bg-video.mp4" 
        class="home__container-bg" 
        autoplay 
        loop
        muted
        playsinline
        preload="auto"></video>
        <div class="home__container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit rem hic beatae, nisi vero quidem placeat, accusantium delectus excepturi ut quasi in, vel ipsa modi facilis mollitia soluta voluptates! Facilis obcaecati vitae delectus! Reprehenderit dicta, aspernatur quaerat exercitationem debitis ab, consequatur accusamus, deleniti repudiandae voluptatum iste reiciendis praesentium quae.
        </div>
    </section>
</template>

<script></script>

<style lang="scss">
    .home {
        position: relative;
        
        
        &__container {
            position: relative;
            z-index: $z-index-content;
            min-width: 100vmax;
            min-height: 100vh;
            padding: 3.39vmax 2.34vmax;
            background: $bg-black;
            opacity: 0.6;

            &-bg {
                position: absolute;
                z-index: $z-index-bg;
                top: 0;
                left: 0;
                min-height: 100vh;
            }
        }
    }
</style>