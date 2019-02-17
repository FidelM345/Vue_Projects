<template>
<nav>
<v-snackbar
      v-model="snackbar"
     
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
      color="success"
    >
      {{ text }}
      <v-btn
        color="white"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>


<v-toolbar app dark class="blue">
    <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">Beast</span>
        <span>berica</span>
        
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/about">About</v-btn>
      <v-btn flat to="/team">Team</v-btn>
      <v-btn flat to="/projects">Projects</v-btn>


      <v-menu>
      <v-btn
         flat
        slot="activator"
      >
      <v-icon >expand_more</v-icon>
        Dropdown Menu
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in menuitems"
          :key="index"
           router
          :to="item.route"
     
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>


    </v-toolbar-items>
</v-toolbar>


<v-navigation-drawer app class="blue lighten-3" dark v-model="drawer">


  <v-toolbar flat class="transparent">
        <v-list class="pa-3">
          <v-list-tile avatar>
            <v-list-tile-avatar size="70">
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
            <v-spacer></v-spacer>

            <v-list-tile-content>
              <v-list-tile-title>Fidel Omolo</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

     

      <v-list class="pt-4" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
           router
          :to="item.route"
        >
         <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

       <v-layout column align-center>

        <v-flex>
          <popup @projectAdded="snackbar=true"/>
        </v-flex>

      </v-layout>

    
</v-navigation-drawer>

</nav>
    
</template>

<script>
import Popup from './Popup'

export default {

  components: {
    Popup
  },

    data(){
        return{
            drawer:false,
            snackbar: false,
        y: 'top',
        x: 'right',
        mode: '',
        timeout: 4000,
        text: 'Added New Project',
            items: [
          { title: 'Home', icon: 'dashboard',route:'/' },
          { title: 'About', icon: 'question_answer',route:'/about' },
           { title: 'Team', icon: 'question_answer',route:'/team' },
           { title: 'Projects', icon: 'question_answer',route:'/projects' }
         
        ],

        menuitems:[
        { title: 'Home', icon: 'dashboard',route:'/' },
          { title: 'About', icon: 'question_answer',route:'/about' },
           { title: 'Team', icon: 'question_answer',route:'/team' },
           { title: 'Projects', icon: 'question_answer',route:'/projects' }
      ]
      
        }
    }


}

</script>

<style>

</style>
