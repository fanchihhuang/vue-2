const { createApp } = Vue;

createApp({
    data() {
        return {

        }
    },
    methods: {
        login() {
            const emailInput = document.querySelector("#username");
            const pwInput = document.querySelector("#password");
            
            const username = emailInput.value;
            const password = pwInput.value;

            const user = {
                username,
                password
            };
            
            const url = "https://vue3-course-api.hexschool.io/v2/admin/signin";
            axios.post(url, user)
                .then((res) => {
                    console.log(res.data);
                    const {token, expired}=res.data;
                    //存取cookie
                    document.cookie = `yokumoku=${token}; expires=${expired}`;
                    location.href="products.html";
                })
                .catch((err) => {
                    console.log(err);
                })

        }
    }
}).mount('#app')



