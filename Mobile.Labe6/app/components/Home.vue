<template>
    <Page>
        <ActionBar title="Погода" />
        <GridLayout rows="*" height="1500px">
            <RadSideDrawer ref="drawer">
                <StackLayout ~drawerContent backgroundColor="gray">
                    <StackLayout height="24"
                        style="text-align: center; vertical-align: center;">
                        <Label text="Выберите город" />
                    </StackLayout>
                    <ScrollView>
                        <StackLayout>
                            <Button text="Ханты-Мансийск" padding="10"
                                @tap="KhM()" />
                            <Button text="Тюмень" padding="10" @tap="Tym()" />
                            <Button text="Урай" padding="10" @tap="Uray()" />
                            <Button text="Сочи" padding="10" @tap="Sochi()" />
                            <Button text="Кисловодск" padding="10"
                                @tap="KisK()" />
                            <Button text="Москва" padding="10"
                                @tap="Mosc()" />
                            <Button text="Норильск" padding="10"
                                @tap="Noril()" />
                            <Button text="Мурманск" padding="10"
                                @tap="Murm()" />
                            <Button text="Заполярный" padding="10"
                                @tap="Zapol()" />
                            <Button text="Кемерово" padding="10"
                                @tap="Kem()" />
                            <Button text="Анадырь" padding="10"
                                @tap="Anad()" />
                        </StackLayout>
                    </ScrollView>
                </StackLayout>
                <StackLayout ~mainContent>
                    <Label padding="10">Город: {{this.name}}</Label>
                    <Label padding="10">Текущая температура(С°): {{this.temp}}
                    </Label>
                    <Label padding="10">Минимальная температура(С°):
                        {{this.temp_min}}</Label>
                    <Label padding="10">Минимальная температура(С°):
                        {{this.temp_max}}</Label>
                    <Label padding="10">Давление(мм.рт.ст): {{this.pressure}}
                    </Label>
                    <Label padding="10">Скорость ветра(м/с): {{this.speed}}
                    </Label>
                    <TextField v-model="name" hint="Введите город"
                        @returnPress="City()" />
                    <Button text='Вывести' @tap="Output()" />
                </StackLayout>
            </RadSideDrawer>
        </GridLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);
    import {Http} from '@nativescript/core'
    import * as ApplicationSettings from '@nativescript/core/application-settings';

    export default {
        data() {
            return {
                main: {
                    temp: "",
                    pressure: "",
                    temp_min: "",
                    temp_max: "",
                },
                wind: {
                    speed: "",
                },
                name: "",
            }
        },
        methods: {
            KhM() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Ханты-Мансийск&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.temp;
                    this.temp_max = this.result.temp_max;
                    this.temp_min = this.result.temp_min;
                    this.name = this.result.name;
                    this.speed = this.result.speed;
                    console.log(this.result);
                });
            },
            Tym() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Тюмень&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            Uray() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Урай&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            Sochi() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Сочи&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            KisK() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Кисловодск&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            Mosc() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Москва&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            Noril() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Норильск&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            Murm() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Мурманск&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            Zapol() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Заполярный&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            Kem() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Кемерово&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            Anad() {
                Http.getString(
                    "http://api.openweathermap.org/data/2.5/weather?q=Анадырь&appid=29876907afc8b79c1e64ff345dd64baa"
                ).then((result) => {
                    this.result = JSON.parse(result);
                    this.main = this.result.main;
                    this.name = this.result.name;
                    this.wind = this.result.wind;
                    console.log(this.result);
                });
            },
            City() {
                if (this.name != "") {
                    this.msg = this.name;
                    console.log(this.name);
                }
            },
            Output() {
                Http.getString(
                        'http://api.openweathermap.org/data/2.5/weather?q=' +
                        this.name + '&appid=29876907afc8b79c1e64ff345dd64baa')
                    .then((result) => {
                        this.result = JSON.parse(result);
                        console.log(this.result);
                    })
            }
            // InCelsius() {},
            // INmmHg() {}
        }
    };
</script>

<style>

</style>