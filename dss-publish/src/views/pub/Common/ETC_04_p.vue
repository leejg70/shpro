<script setup>
import { ref } from 'vue';

const loading = ref(false);
</script>

<template>
    <v-btn @click="loading = !loading">로딩화면 보기</v-btn>

    <!-- loading -->
    <v-dialog v-model="loading">
        <div class="ma-auto">
            <v-progress-circular
                :size="32"
                :width="6"
                color="primary"
                indeterminate
            />
        </div>
    </v-dialog>
    <!--// loading -->
</template>