console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Click this title to get your random mails list!',

            randomMailFromResponse : null,

            randomMailsListPromises: [],

            randomMailsList: [],

        }
    },
    
    methods: {
        async getRandomMail () {
            await axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                this.randomMailFromResponse = response.data.response;
                console.log(this.randomMailFromResponse);
            });
        },

        async randomMailsListPopulator () {
            for (let i=0 ; i<10 ; i++) {
                // add promises one by one
                this.randomMailsListPromises.push(
                    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                    // we only need the .data.response from the response
                    .then((response) => (response.data.response))
                );
                this.randomMailsList = await axios.all(this.randomMailsListPromises);

            }
            console.log(this.randomMailsList);
        }
    },

    created() {
    }
}).mount ('#app')



