<template>
  <div>{{dataMessage}}</div>
</template>

<script>

import { db } from "../plugins/firebase";
import {getStorage, uploadBytes, ref, getDownloadURL} from "firebase/storage";
import { collection, getDocs, deleteDoc, doc, onSnapshot, getDoc, query, where, addDoc,orderBy, limit,} from 'firebase/firestore';

export default {
  name: "Home.vue",
  data() {
    return {
      slug: null,
      dataMessage:[],
    }
  },
  
  methods: {
    async getListOrder(){
        let unSub = null;
        const collectionRef = collection(db, 'videos');
        unSub = onSnapshot(collectionRef, (snapShot) => {
            const localMessage = [];
            console.log(snapShot);
            snapShot.forEach(doc => {
                localMessage.push({
                    id: doc.id,
                    content: doc.data().content,
                    date: doc.data().date,
                    urlVideo:doc.data().urlVideo
                });
            });
            this.dataMessage = localMessage;
        });
    },
  },
  mounted() {
      this.getListOrder();
  },
}
</script>

<style scoped>

</style>
