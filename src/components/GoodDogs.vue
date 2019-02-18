<template>
    <div class="margin-top">
        <ul class="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
            <li v-for="image of images" class="mdc-image-list__item">
                <img class="mdc-image-list__image" :src="image">
            </li>
        </ul>
    </div>
</template>

<script>
    function importAll(r) {
        return r.keys().map(r)
    }
    const images = importAll(require.context('../assets/dogs', false, /\.(png|jpg|svg)$/))

    export default {
        name: "GoodDogsView",
        data: function() {
            return {
                images
            }
        }
    }
</script>

<style lang="scss">
    @import "@material/image-list/mdc-image-list";

    .my-masonry-image-list {
        @include mdc-image-list-masonry-columns(3);
    }

    .margin-top {
        margin-top: 2rem;
    }
</style>