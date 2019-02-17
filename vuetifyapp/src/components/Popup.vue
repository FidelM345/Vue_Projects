<template>
    <div class="text-xs-center">
        <v-dialog v-model="dialog" width="500">
            <v-btn slot="activator" color="success" dark>
                Add new Project
            </v-btn>

            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Add New Project
                </v-card-title>

                <v-card-text>
                    <v-form class="px-3" ref="forms">
                        <v-text-field v-model="title" label="Project Name" 
                        :rules="nameRules"
                        :counter="10" 
                        required prepend-icon="folder">

                        </v-text-field>

                         <v-text-field v-model="person" label="Person Name" 
                        :rules="nameRules"
                        :counter="10" 
                        required prepend-icon="person">

                        </v-text-field>

                        <v-text-field v-model="status" label="Project Status" 
                        :rules="nameRules"
                        :counter="10" 
                        required prepend-icon="warning">

                        </v-text-field>

                        <v-textarea v-model="content" label="Project Information" prepend-icon="edit"></v-textarea>

                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40"
                            :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                            <v-text-field slot="activator" v-model="date" label="Picker in menu" prepend-icon="event"
                                readonly></v-text-field>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>


                    </v-form>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" @click="submit"  :loading="loading3">
                        Add Project
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import db from '@/firebase'
    export default {
        data() {
            return {
                title: '',
                content: '',
                status:'',
                person:'',
                loading3:false,
                dialog: false,
                date: new Date().toISOString().substr(0, 10),
                menu: false,
                modal: false,
                menu2: false,
                nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters'
      ]
            }
        },
        methods: {
            submit() {
                if(this.$refs.forms.validate()){ //the validate method helps to ensure the form is correctly filled before it submitted
                    console.log(this.title, this.content, this.date)
                    this.loading3=true;

                    const project={
                        title:this.title,
                        content:this.content,
                        person:this.person,
                        status:this.status,
                        date:this.date
                    }

                    db.collection('projects').add(project).then(()=>{
                        //the code is asychronous hence will fire a promise when complete

                        this.loading3=false
                        this.dialog=false
                        this.$emit('projectAdded')//emits event when project is added to firestore for the toolbar to listen

                        console.log('added to the database successfully');

                    })


                }
                
            }
        }

    }
</script>

<style>

</style>
