<template>
<div>
    <div class="flex-col bg-gray-800 h-screen w-screen flex items-center justify-center font-sans ">
        <div class="bg-gray-600 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
            <div class="mb-4">
                <h1 class="text-white font-bold text-2xl text-center">Edit Note</h1>
                <div class="flex mt-4">
                    <input class="border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 mr-4 text-black" v-model="msg" />
                    <!-- Add button -->

                </div>
            </div>
            <!-- delete button -->

            <!-- Completed -->
            <div class="flex justify-center">
                <button @click="edit" class="bg-blue-700 p-2 text-white w-44 rounded">Edit</button>
            </div>
        </div>

        <!-- End of file -->
    </div>
</div>
</template>

<script>
import {
    db
} from "../plugins/firebase";
import {
    getStorage,
    uploadBytes,
    ref,
    getDownloadURL
} from "firebase/storage";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
    getDoc,
    query,
    where,
    addDoc,
    orderBy,
    limit,
    updateDoc
} from 'firebase/firestore';
export default {
    data() {
        return {
            id: this.$route.query.id,
            msg: "",
        }
    },
    methods: {
       async edit() {
            const docRef = doc(db, 'todos', this.id);
            await updateDoc(docRef, {todo: this.msg});
            this.$router.push({
                name: 'Todo'
            });
        },
    },
    async mounted() {
        const docRef = doc(db, 'todos', this.id);
        const docSnapshot = await getDoc(docRef);
        this.msg = docSnapshot.data().todo;
    },
}
</script>

<style>

</style>
