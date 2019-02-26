<template>
    <div>
        <h1 class="mdc-typography--headline4">
            About Super Cute Dogs
        </h1>
        <p class="mdc-typography--body1 default-color">
            Why are our dogs perfect and cute and lovable?
        </p>
        <div v-for="dog_fact in dog_facts">
            <div class="mdc-form-field">
                <div class="mdc-checkbox">
                    <input 
                        type="checkbox"
                        class="mdc-checkbox__native-control"
                        checked="true">
                    <div class="mdc-checkbox__background">
                        <svg 
                            class="mdc-checkbox__checkmark"
                            viewBox="0 0 24 24">
                            <path 
                                class="mdc-checkbox__checkmark-path"
                                fill="none"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59" /> 
                        </svg>
                        <div class="mdc-checkbox__mixedmark" />
                    </div>
                </div>
            </div>
            <label for="checkbox-1">{{ dog_fact }}</label>
        </div>
        <div>
            <p class="default-color">
                Some of you, particularly those who think they have recently lost a dog to “death”, don’t really understand this. I’ve had no desire to explain, but won’t be around forever and must.
                <br><br>
                Dogs never die. They don’t know how to. They get tired, and very old, and their bones hurt. Of course they don’t die. If they did they would not want to always go for a walk, even long after their old bones say:” No, no, not a good idea. Let’s not go for a walk.” Nope, dogs always want to go for a walk. They might get one step before their aging tendons collapse them into a heap on the floor, but that’s what dogs are. They walk.
                <br><br>
                It’s not that they dislike your company. On the contrary, a walk with you is all there is. Their boss, and the cacaphonic symphony of odor that the world is. Cat poop, another dog’s mark, a rotting chicken bone ( exultation), and you. That’s what makes their world perfect, and in a perfect world death has no place.
                <br><br>
                However, dogs get very very sleepy. That’s the thing, you see. They don’t teach you that at the fancy university where they explain about quarks, gluons, and Keynesian economics. They know so much they forget that dogs never die. It’s a shame, really. Dogs have so much to offer and people just talk a lot.
                <br><br>
                When you think your dog has died, it has just fallen asleep in your heart. And by the way, it is wagging it’s tail madly, you see, and that’s why your chest hurts so much and you cry all the time. Who would not cry with a happy dog wagging its tail in their chest. Ouch! Wap wap wap wap wap, that hurts. But they only wag when they wake up. That’s when they say: “Thanks Boss! Thanks for a warm place to sleep and always next to your heart, the best place.”
                <br><br>
                When they first fall asleep, they wake up all the time, and that’s why, of course, you cry all the time. Wap, wap, wap. After a while they sleep more. (remember, a dog while is not a human while. You take your dog for walk, it’s a day full of adventure in an hour. Then you come home and it’s a week, well one of your days, but a week, really, before the dog gets another walk. No WONDER they love walks.)
                <br><br>
                Anyway, like I was saying, they fall asleep in your heart, and when they wake up, they wag their tail. After a few dog years, they sleep for longer naps, and you would too. They were a GOOD DOG all their life, and you both know it. It gets tiring being a good dog all the time, particularly when you get old and your bones hurt and you fall on your face and don’t want to go outside to pee when it is raining but do anyway, because you are a good dog. So understand, after they have been sleeping in your heart, they will sleep longer and longer.
                <br><br>
                But don’t get fooled. They are not “dead.” There’s no such thing, really. They are sleeping in your heart, and they will wake up, usually when you’re not expecting it. It’s just who they are.
                <br><br>
                I feel sorry for people who don’t have dogs sleeping in their heart. You’ve missed so much. Excuse me, I have to go cry now.
                <br><br>
                Sleep tight, pupper.
            </p>
        </div>

        <div 
            id="alert-dialog" 
            class="mdc-dialog"
            role="alertdialog"
            aria-modal="true"
            aria-describedby="alert-dialog-description">
            <div class="mdc-dialog__scrim" />
            <div class="mdc-dialog__container">
                <div class="mdc-dialog__surface">
                    <section
                        id="alert-dialog-description" 
                        class="mdc-dialog__content">
                        <p>These are facts and cannot be changed!</p>
                    </section>
                    <footer class="mdc-dialog__actions">
                        <button 
                            type="button" 
                            class="mdc-button mdc-dialog__button mdc-ripple-upgraded" 
                            data-mdc-dialog-action="accept">
                            Ok sorry
                        </button>
                        <button
                            type="button"
                            class="mdc-button mdc-dialog__button mdc-ripple-upgraded" 
                            data-mdc-dialog-action="close">
                            missclick
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {MDCDialog} from '@material/dialog'

export default {
    name: "AboutView",
    data: function() {
        return {
            'dog_facts': [
                "Our Dogs are super cute!",
                "Our Dogs are super fluffy!",
                "Our Dogs are super cool!"
            ]
        }
    },
    mounted: function() {
        const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

        let changeEventHandler = (event) => {
            event.target.checked = true
            dialog.open()
        }

        let close = (event) => {
            dialog.close("")
        }

        let checkBoxes = document.querySelectorAll(".mdc-checkbox__native-control")
        for (var i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].onchange = changeEventHandler
        }
        let dialogButtons = document.querySelectorAll('.mdc-dialog__button')
        for (var a = 0; a < dialogButtons.length; a++) {
            dialogButtons[a].addEventListener('click', close)
        }
    }
}
</script>

<style lang="scss">
    @import "@material/checkbox/mdc-checkbox";

    .mdc-checkbox {
        @include mdc-checkbox-focus-indicator-color(var(--mdc-theme-primary, #6200ee));
        @include mdc-checkbox-container-colors(
            var(--mdc-theme-primary, #6200ee), // unchecked stroke
            var(--mdc-theme-primary, #6200ee), // unchecked fill
            var(--mdc-theme-primary, #6200ee), // checked stroke
            var(--mdc-theme-primary, #6200ee) // checked fill
        )
    }

    p {
        color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))
    }
</style>
