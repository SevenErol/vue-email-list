
const { createApp } = Vue
createApp({
    data() {
        return {
            mailList: [],
            visible: false
        }
    },

    methods: {

        randomTenMail() {

            for (let index = 0; index < 10; index++) {

                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(response => {

                        this.mailList.push(response.data.response)

                    })

            }
        },

        visibility() {
            this.visible = true
        }
    },
    mounted() {

        this.randomTenMail()

        setTimeout(this.visibility, 5000)
        
    }
}).mount('#app')