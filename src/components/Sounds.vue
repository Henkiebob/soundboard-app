<template>
    <v-container fluid grid-list-lg>
        <v-layout wrap>
            <v-flex xs4 v-for="(sound, index) in sounds" :key="index">
                <v-card v-on:click="play(sound.file)">
                    <v-card-text>
                        <v-icon color="green" x-large>play_arrow</v-icon>
                        <p>{{ sound.title }}</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name : 'Sounds',
    data () {
        return {
            sounds : [
                {
                    title : "Cow",
                    file: "eagle.mp3"
                },
                                {
                    title : "Bell",
                    file: "error.mp3"
                },
                                {
                    title : "Test",
                    file: "start_game.mp3"
                }
                ,
                                {
                    title : "Jostein",
                    file: "jostien.mp3"
                }
                ,                {
                    title : "Yo",
                    file: "yo.mp3"
                }
                ,                {
                    title : "Ba",
                    file: "ba.mp3"
                }
                ,                {
                    title : "No",
                    file: "no.mp3"
                }
            ]
        }
    },
    methods : {
        play: function (name) {
            let audio = new Audio(require('@/assets/sounds/' + name));
            audio.play();
        }
    }
}
</script>