<template>
    <div :class="wrapper">
        <div :class="textWrapper">
            <h1>WEATHER DATA APPLICATION</h1>
            <p>Are you looking for a town weather? Search for it below</p>
        </div>
        <div :class="formWrapper">
            <input type="text" placeholder="Enter a city name" v-model="city">
            <button @click="getWeatherData">Search</button>
        </div>
           
    </div>
    <div :class="container">
        <h2>Weather informations</h2>
        <div :class="dataContainer" v-if="weatherData">
            <h2>{{ weatherData.name }} </h2>
            <hr>
            <ul>
                <li>
                    <span>Country : </span>
                    <span>{{ weatherData.sys.country }}</span>
                </li>

                <li>
                    <span>Longitude : </span>
                    <span>{{ weatherData.coord.lon }}</span>
                </li>
                <li>
                    <span>Latitude : </span>
                    <span>{{ weatherData.coord.lat }}</span>
                </li>

                <li>
                    <span>Sunset : </span>
                    <span>{{ weatherData.sys.sunset }}</span>
                </li>
                
                <li>
                    <span>Temperature : </span>
                    <span>{{ weatherData.main.temp }} °C</span>
                </li>

                <li>
                    <span>Clouds : </span>
                    <span>{{ weatherData.weather[0].description }}</span>
                </li>

                <li>
                    <span>Humidity : </span>
                    <span>{{ weatherData.main.humidity }}</span>
                </li>
                <li>
                    <span>Pressure : </span>
                    <span>{{ weatherData.main.pressure }}</span>
                </li>
                
            </ul>
        </div>   
    </div>
</template>

<script>
    export default{
        data(){
            return{
                container: "container",
                wrapper: "wrapper",
                textWrapper: "text-wrapper",
                formWrapper: "form-wrapper",
                dataContainer: "data-container",
                city: "",
                weatherData : null
            }
        },
        methods: {
            async getWeatherData(){
                try{
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=bbf9282d58eb730e75bbd264382c6a79&units=metric`)
                    const data = await response.json();
                    this.weatherData = data
                    this.city=null
                }
                catch(e){
                    console.log("[ERROR] Weather informations searching failed ! ", e)
                }
            }
        }
        
    }
</script>

<style scoped>
    .container{
        width: 600px;
        height: 570px;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
    }

    .container > h2{
        font-family: 'Roboto' sans-serif;
        margin-top: 50px;
        padding: 15px;
    }
    .wrapper{
        width: 580px;
        height: 300px;
        padding: 50px;
        margin-top: 150px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-around;
        /* background-color: rgb(210, 210, 210); */
    }

    .text-wrapper{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-around;
    }

    .text-wrapper > h1{
        color: white;
        font-weight: bold;
        font-family: "montserrat" sans-serif;
        text-align: center;
        margin-bottom: 10px;
    }

    .text-wrapper > p{
        color: white;
        font-size: 16px;
        font-family: "montserrat" sans-serif;
        text-align: center;
        margin-bottom: 50px;
    }

    .form-wrapper{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
    }

    .wrapper > .form-wrapper > input{
        width: 65%;
        height: 50px;
        text-align: center;
        font-family: 'Roboto' sans-serif;
    }

    .wrapper > .form-wrapper > button{
        width: 30%;
        height: 50px;
        font-family: 'Roboto' sans-serif;
        font-size: 15px;
        background-color: rgb(0, 121, 220);
        color: white;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 1px 1px 1px rgba(74, 74, 74, 0.526);
        cursor: pointer;
    }

    .data-container{
        /* background-color: brown; */
        width: 95%;
        height: 500px;
        margin: 10px;
    }

    .container > h2{
        color: black;
        font-weight: bold;
        margin-top: 10px;
    }

    .data-container > h2 {
        color: black;
    }

    .data-container > hr{
        width: 500px; 
        border: 0.2px solid black;
    }

    .data-container > ul {
        margin-top: 20px;
        width: 85%;
    }

    .data-container > ul > li{
        padding: 10px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .data-container > ul > li > span {
        font-size: 17px;
        color: black;
    }


</style>