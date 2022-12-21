console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'This is a randomly created list of mails!',

            randomMailFromResponse : null,

        }
    },
    
    methods: {
        async getRandomMail () {
            await axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                this.randomMailFromResponse = response.data.response;
                console.log(this.randomMailFromResponse);
            });
        }
    },

    created() {
        this.getRandomMail()
    }
}).mount ('#app')



