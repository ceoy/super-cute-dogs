<template>
    <div class="mdc-typography">
        <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <span class="mdc-top-app-bar__title">
                        Dogs are Love
                    </span>
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                    <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Download" alt="Download">file_download</a>
                    <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Print this page" alt="Print this page">print</a>
                </section>
            </div>
        

            <div class="mdc-tab-bar" role="tablist">
                <div class="mdc-tab-scroller">
                    <div class="mdc-tab-scroller__scroll-area">
                        <div class="mdc-tab-scroller__scroll-content">
                            <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                                <span class="mdc-tab__content">                            
                                    <span class="mdc-tab__text-label">Best Dogs</span>
                                </span>
                                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span class="mdc-tab__ripple"></span>
                            </button>
                            <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">
                                <span class="mdc-tab__content">
                                    <span class="mdc-tab__text-label">Good Dogs</span>
                                </span>
                                <span class="mdc-tab-indicator">
                                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span class="mdc-tab__ripple"></span>
                            </button>
                            <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">
                                <span class="mdc-tab__content">
                                    <span class="mdc-tab__text-label">About</span>
                                </span>
                                <span class="mdc-tab-indicator">
                                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span class="mdc-tab__ripple"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="content content--active tab-top-bar-adjust">
                <home-view />
            </div>
            <div class="content tab-top-bar-adjust">
                <good-dogs-view />
            </div>
            <div class="content tab-top-bar-adjust">
                <about-view />
            </div>
        </div>
    </div>
</template>

<script>
    import Home from './components/Home.vue'
    import About from './components/About.vue'
    import GoodDogs from './components/GoodDogs.vue'
    import Vue from 'vue'

    import { MDCTabBar } from '@material/tab-bar';

    // register components
    Vue.component('home-view', Home)
    Vue.component('good-dogs-view', GoodDogs)
    Vue.component('about-view', About)

    export default {
        mounted: function() { // document is loaded
            // find all content tabs
            var contentElements = document.querySelectorAll('.content')

            // get the tab bar and listen to changes
            new MDCTabBar(document.querySelector('.mdc-tab-bar')).listen("MDCTabBar:activated", function(event) {
                // find the active tab and set it inactive
                document.querySelector(".content--active").classList.remove('content--active')
                // set the new tab as activesaf
                contentElements[event.detail.index].classList.add('content--active')
            })
        }
    }
</script>

<style lang="scss">
    @import "material-components-web/material-components-web";
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
    @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);


    p {
        color: #0F3FAC;

        button {
            color: yellowgreen;
        }
    }

    // Fixed the Padding of the first element after the combined tab-bar and top-app-bar
    .tab-top-bar-adjust {
        padding-top: 112px;
        margin-top: 0px;
    }

    .mdc-top-app-bar .mdc-tab__text-label,
    .mdc-top-app-bar .mdc-tab__icon {
        color: #fff;
    }

    .mdc-top-app-bar .mdc-tab-indicator__content {
       background-color: #fff;
    }

    .content {
        display: none;
    }

    .content--active {
        display: block;
    }

    .container {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        align-items: center;
        overflow: auto;
    }
</style>