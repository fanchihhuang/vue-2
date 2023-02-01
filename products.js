const { createApp } = Vue;

createApp({
    data() {
      return {
       products:[],
       temp:{}
      }
    },
    methods:{
       checkAdmin(){
        const url="https://vue3-course-api.hexschool.io/v2/api/user/check";
        axios.post(url)
        .then((res) => {
            console.log(res.data);
            this.getData();
        })
        .catch((err) => {
            console.log(err);
            location.href="index.html";
        })
       } ,
       getData(){
        const url="https://vue3-course-api.hexschool.io/v2/api/likefanzi/admin/products";

        axios.get(url)
        .then((res) => {
            this.products=res.data.products;
            console.log(this.products)
        })
        .catch((err) => {
            console.log(err);
        })
       }
    },
    mounted(){
        //取出cookie
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)yokumoku\s*=\s*([^;]*).*$)|^.*$/, '$1'); 
        //將cookie存入headers
        axios.defaults.headers.common.Authorization = token;
        this. checkAdmin();
    }
  }).mount('#app')