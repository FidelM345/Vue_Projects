<template>

    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                <v-card class="text-xs-center ma-3">
                    <v-responsive class="pt-4">
                        <v-avatar size="100" class="grey lighten-3">
                            <img :src="person.avatar" alt="No image" >
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{person.name}}</div>
                        <div class="greay--text">{{person.role}}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="grey">
                            <v-icon small left>message</v-icon>
                        </v-btn>
                    </v-card-actions>

                </v-card>

            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                team: [{

                        name: 'Felishia',
                        role: 'Web Developer',
                        avatar: '/avatar-1.png'
                    },
                    {

                        name: 'Fidel',
                        role: 'Android Developer',
                        avatar: '/avatar-2.png'
                    },
                    {

                        name: 'Austin',
                        role: 'sales Manager',
                        avatar: '/avatar-3.png'
                    },
                    {

                        name: 'Emma',
                        role: 'Quantity Surveyor ',
                        avatar: '/avatar-4.png'
                    },
                    {
                        name: 'Richard',
                        role: 'Construction Engineer',
                        avatar: '/avatar-5.png'
                    }

                ]

            }
        }

    }
</script>
