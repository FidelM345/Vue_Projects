<template>
    <v-container>


        <v-layout row wrap class="mb-3">
            <v-tooltip bottom>
                <v-btn flat small color="pink" @click="sortBy('title')" slot="activator">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text-lowercase">By projet Name</span>
                </v-btn>

                <span>Sort By project name</span>
            </v-tooltip>


            <v-tooltip bottom>
                <v-btn flat small color="pink" @click="sortBy('name')" slot="activator">
                    <v-icon left small>person</v-icon>
                    <span class="caption text-lowercase">By Person</span>
                </v-btn>


                <span>Sort By person</span>
            </v-tooltip>
            
        </v-layout>


        <v-card v-for="item in projects" :key="item.name">

            <v-layout row wrap :class="`pa-3 project ${item.status}`">

                <v-flex xs12 md6>
                    <div class="caption grey--text">
                        <h4>Project title</h4>
                    </div>
                    <div>{{item.title}}</div>

                </v-flex>

                <v-flex xs12 sm4 md2>
                    <div class="caption grey--text">
                        <h4>Person Name</h4>
                    </div>
                    <div>{{item.person}}</div>

                </v-flex>

                <v-flex xs12 sm4 md2>
                    <div class="caption grey--text">
                        <h4>Due date</h4>
                    </div>
                    <div>{{item.date}}</div>

                </v-flex>

                <v-flex xs12 sm4 md2>

                    <div class="right">
                        <v-chip :class="`btnchip ${item.status}`" small dark>{{item.status}}</v-chip>
                    </div>

                </v-flex>


            </v-layout>

            <v-divider></v-divider>

        </v-card>

    </v-container>
</template>

<script>
import db from '@/firebase'
    export default {
        data() {
            return {

                projects:[]


                // projects: [{
                //         title: 'Laravel blog',
                //         name: 'Frlishia',
                //         date: '20th Feburuary',
                //         status: 'Ongoing'
                //     },
                //     {
                //         title: 'Vue blog',
                //         name: 'Gloria',
                //         date: '8th Feburuary',
                //         status: 'Completed'
                //     },
                //     {
                //         title: 'Android blog',
                //         name: 'Dennis',
                //         date: '12th Feburuary',
                //         status: 'Ongoing'
                //     },
                //     {
                //         title: 'Angular blog',
                //         name: 'Faith',
                //         date: '31st April',
                //         status: 'Completed'
                //     },
                //     {
                //         title: 'Ruby blog',
                //         name: 'Joan ',
                //         date: '10th Feburuary',
                //         status: 'Submited'
                //     },
                //     {
                //         title: 'React blog',
                //         name: 'Nicole',
                //         date: '15th Feburuary',
                //         status: 'Submited'
                //     }
                // ]
            }
        },
        methods: {
            sortBy(value) {

                this.projects.sort((a, b) => a[value] < b[value] ? -1 : 1) //used for sorting items in array

            }
        },
        created(){
            db.collection("projects") .onSnapshot(res=>{
        // Listen for document metadata changes
         const changes=res.docChanges()//documents changes in the firestore
         changes.forEach(change=>{
             //the forEach cycles through each of the changes

             if(change.type==='added'){
                 this.projects.push({
                     ...change.doc.data(),//gets the actual data from the firestore doc
                     id:change.doc.id //get the auto generated document id
                 })
             }
         })
    });
        }
    }
</script>

<style scoped>
    .project.Completed {
        border-left: 4px solid #3cd1c2;

    }

    .project.Submited {
        border-left: 4px solid orange;

    }

    .project.Ongoing {
        border-left: 4px solid tomato;

    }


    .btnchip.Completed {
        background-color: #3cd1c2;

    }



    .btnchip.Submited {
        background-color: orange;

    }

    .btnchip.Ongoing {
        background-color: tomato;

    }
</style>
