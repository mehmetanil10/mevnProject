import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore('userStore', {

    actions: {
        async updateUserDetails(updatedUserData) {
            this.isLoading=true;
            try {
            const response = await axios.put('http://localhost:3000/api/v1/user/updateUser',updatedUserData);
            } catch (error) {
                console.error('Error at update user details', error)
            } finally {
                this.isLoading = false;
            }
        },
    },
});