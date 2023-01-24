<script>
import { store } from "../store.js";
export default {
    name: "JumboCar",
    data() {
        return {
            store,
            activeSlide: 0,
        }
    },
    methods: {
        nextSlide() {
            // console.log('Hai cliccato next');
            this.activeSlide++
            if (this.activeSlide === slides.length) {
                this.activeSlide = 0
            }
        },
        prevSlide() {
            // console.log('Hai cliccato prev');
            this.activeSlide--
            if (this.activeSlide < 0) {
                this.activeSlide = slides.length
                this.activeSlide--
            }
        },
        currentSlide(index) {
            this.activeSlide = index
        }

    }

}
</script>
<template>
    <!-- <div class="container">
        <div class="slider-wrapper" v-for="(slide, i) in store.">
            <div class="item" v-if="activeSlide === i">
                <img :src="'./assets/' + slide.image" :alt="slide.title">
                <div class="text">
                    <h3>{{ slide.title }}</h3>
                    <p>
                        {{ slide.text }}
                    </p>
                </div>
            </div>
        </div>
        <div class="thumbs">
            <div class="prev" @click="prevSlide"></div>
            <div class="next" @click="nextSlide"></div>
            <div class="thumb" v-for="(slide, i) in slides">
                <img :src="'./assets/' + slide.image" :alt="slide.title" @click="currentSlide(i)"
                    :class="i === activeSlide ? 'active' : ''">
            </div>
        </div>


    </div> -->

</template>