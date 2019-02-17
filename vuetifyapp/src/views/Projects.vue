<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in projects"
      :key="i"
    >
      <div slot="header">{{item.title}}</div>
      <v-card>
        <v-card-text class="px-4 grey--text">
          <div class="font-weight-bold">{{item.date}}</div>
          <div>{{item.content}}</div>
         </v-card-text>
        
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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

