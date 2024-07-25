<script setup>
import { ref } from 'vue';
</script>
<template>
    <div class="guide-wrap">   
        <v-row>
            <h2 class="sub-title">Icon</h2>
            <v-col cols="12">
                <v-icon>icon-trash</v-icon> 
                <v-icon>icon-pencil</v-icon>  
                <v-icon>icon-download</v-icon>  
                <v-icon>icon-clip</v-icon>  
                <v-icon>icon-minus</v-icon>  
                <v-icon>icon-plus </v-icon>  
                <v-icon>icon-lock</v-icon>  
                <v-icon>icon-q</v-icon>               
                <v-icon>icon-a</v-icon> 
                <v-icon>icon-pdf</v-icon>
                <v-icon>icon-ppt</v-icon>
                <v-icon>icon-pick-on</v-icon>
                <v-icon>icon-pick-off</v-icon>
                <v-icon>icon-prod</v-icon>
                <v-icon>icon-flow-arrow</v-icon>
            </v-col>     
        </v-row>
    </div>  
</template>
<style scoped>
.guide-wrap {
    padding: 4rem;
    margin: 0 auto;
    max-width: 128rem;

    .sub-title {
        padding: 1rem 0;    
        font-size: 2rem;
    }
    .v-row + .v-row{
        margin-top: 5rem;
    }
    i+i{
        margin: 1rem;
    }
}
</style>