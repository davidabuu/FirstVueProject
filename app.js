const renderApp = Vue.createApp({
    // template: '<h1>Hello World {{firstName}}</h1>',
    data(){
        return{
            firstName:'Abu',
            lastName:'David',
            age:19,
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getRandomUsers(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json();
            console.log(results)
            const {name, picture} = results[0]
            this.firstName = name.first
            this.picture =  picture.large
            
        }
    }
})

renderApp.mount('#render');