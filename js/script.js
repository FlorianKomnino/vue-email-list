console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Hello Vue!',

            randomMailFromResponse : null,
        }
    },
    
    methods: {
        getRandomMail () {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function(response) {
                this.randomMailFromResponse = response.data.response;
                console.log(randomMailFromResponse);
            });
        }
    },

    created() {
        this.getRandomMail();
    }
}).mount ('#app')



